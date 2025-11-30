import { useState, useEffect } from 'react';

export default function DictionaryPopup({ word, position, onClose }) {
  const [definition, setDefinition] = useState('');
  const [loading, setLoading] = useState(false);
  const [examples, setExamples] = useState([]);
  const [phonetic, setPhonetic] = useState('');

  // Real Dictionary API
  const fetchDefinition = async (word) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = await response.json();
      
      if (data && data[0]) {
        const wordData = data[0];
        const firstMeaning = wordData.meanings[0];
        const firstDefinition = firstMeaning.definitions[0];
        setDefinition(firstDefinition.definition);
        
        const exampleSentences = firstMeaning.definitions
          .filter(def => def.example)
          .map(def => def.example)
          .slice(0, 2);
        setExamples(exampleSentences);
        
        setPhonetic(wordData.phonetic || wordData.phonetics[0]?.text || '');
      } else {
        setDefinition(`No definition found for "${word}"`);
      }
    } catch (error) {
      console.error('Dictionary API error:', error);
      setDefinition(`Error fetching definition for "${word}"`);
    }
    setLoading(false);
  };

  // Səs tələffüzü - YENİ VERSİYA
  const speakWord = () => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      utterance.volume = 1.0;
      utterance.pitch = 1.0;
      
      // Səs seçimi
      const voices = speechSynthesis.getVoices();
      const englishVoice = voices.find(voice => 
        voice.lang.includes('en') && !voice.localService
      ) || voices.find(voice => voice.lang.includes('en'));
      
      if (englishVoice) {
        utterance.voice = englishVoice;
      }
      
      utterance.onerror = (event) => {
        console.log('Speech error:', event);
        alert('Speech synthesis failed. Try using Chrome browser.');
      };
      
      speechSynthesis.speak(utterance);
    } else {
      alert('Text-to-speech not supported in your browser. Try Chrome.');
    }
  };

  // Sözü yerli saxlama
  const saveWord = () => {
    const savedWords = JSON.parse(localStorage.getItem('vocabularyWords') || '[]');
    if (!savedWords.includes(word)) {
      savedWords.push(word);
      localStorage.setItem('vocabularyWords', JSON.stringify(savedWords));
      alert(`"${word}" saved to your vocabulary!`);
    } else {
      alert(`"${word}" is already in your vocabulary!`);
    }
  };

  useEffect(() => {
    if (word) {
      fetchDefinition(word);
    }
  }, [word]);

  if (!word) return null;

  // Popup yerini hesabla
  const popupStyle = {
    position: 'fixed',
    left: `${Math.max(20, Math.min(position.x, window.innerWidth - 360))}px`,
    top: `${Math.max(20, Math.min(position.y, window.innerHeight - 320))}px`,
    background: 'linear-gradient(135deg, #1A1A1A 0%, #222 100%)',
    border: '2px solid #FF6B35',
    borderRadius: '12px',
    padding: '20px',
    color: 'white',
    width: '340px',
    maxWidth: 'calc(100vw - 40px)',
    boxShadow: '0 20px 50px rgba(0,0,0,0.9)',
    zIndex: 10000,
    fontFamily: '"SF Pro Display", -apple-system, sans-serif'
  };

  return (
    <div style={popupStyle}>
      {/* Close Button */}
      <button 
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '12px',
          right: '15px',
          background: 'rgba(255,107,53,0.2)',
          border: 'none',
          color: '#FF6B35',
          fontSize: '20px',
          cursor: 'pointer',
          fontWeight: 'bold',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(255,107,53,0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(255,107,53,0.2)';
        }}
      >
        ×
      </button>

      {/* Word & Phonetic */}
      <div style={{ marginBottom: '15px', paddingRight: '30px' }}>
        <h3 style={{
          color: '#FF6B35',
          margin: '0 0 5px 0',
          fontSize: '20px',
          fontWeight: '700'
        }}>
          {word}
        </h3>
        {phonetic && (
          <p style={{
            color: '#888',
            fontSize: '14px',
            margin: 0,
            fontStyle: 'italic'
          }}>
            /{phonetic}/
          </p>
        )}
      </div>

      {/* Definition */}
      <div style={{
        fontSize: '14px',
        lineHeight: '1.5',
        color: '#CCCCCC',
        marginBottom: '15px',
        minHeight: '40px'
      }}>
        {loading ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '20px',
              height: '20px',
              border: '2px solid #FF6B35',
              borderTop: '2px solid transparent',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}></div>
            Loading definition...
          </div>
        ) : (
          definition
        )}
      </div>

      {/* Example Sentences */}
      {examples.length > 0 && (
        <div style={{ marginBottom: '15px' }}>
          <h4 style={{ 
            color: '#FF6B35', 
            fontSize: '12px', 
            margin: '0 0 8px 0',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            📝 Examples:
          </h4>
          {examples.map((example, index) => (
            <p key={index} style={{
              fontSize: '12px',
              color: '#999',
              fontStyle: 'italic',
              margin: '0 0 8px 0',
              lineHeight: '1.4',
              borderLeft: '2px solid #FF6B35',
              paddingLeft: '10px',
              background: 'rgba(255,107,53,0.05)',
              padding: '8px 10px',
              borderRadius: '4px'
            }}>
              "{example}"
            </p>
          ))}
        </div>
      )}

      {/* Action Buttons */}
      <div style={{
        display: 'flex',
        gap: '10px',
        marginTop: '20px'
      }}>
        <button 
          onClick={speakWord}
          style={{
            background: 'rgba(255,107,53,0.1)',
            color: '#FF6B35',
            border: '1px solid #FF6B35',
            padding: '10px 15px',
            borderRadius: '8px',
            fontSize: '13px',
            cursor: 'pointer',
            fontWeight: '600',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255,107,53,0.2)';
            e.target.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255,107,53,0.1)';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          🔊 Speak
        </button>
        <button 
          onClick={saveWord}
          style={{
            background: 'linear-gradient(45deg, #FF6B35, #FF8B35)',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '8px',
            fontSize: '13px',
            cursor: 'pointer',
            fontWeight: '600',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 15px rgba(255,107,53,0.3)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-1px)';
            e.target.style.boxShadow = '0 6px 20px rgba(255,107,53,0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(255,107,53,0.3)';
          }}
        >
          💾 Save
        </button>
      </div>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}
