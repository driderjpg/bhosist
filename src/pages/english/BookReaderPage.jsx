import { useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import { englishBooks } from './data/booksData';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// PDF.JS WORKER - NETLIFY ÜÇÜN XÜSUSİ KONFİQ
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

export default function BookReaderPage() {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const [selectedWord, setSelectedWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [loading, setLoading] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [showPopup, setShowPopup] = useState(false);
  const [pdfError, setPdfError] = useState('');

  const book = englishBooks.find(b => b.id === parseInt(bookId));

  // PDF URL-Nİ TAM AL
  const getPdfUrl = () => {
    if (!book) return '';
    return `${window.location.origin}${book.pdfUrl}`;
  };

  // SÖZ SEÇMƏ
  const handleTextSelection = useCallback(() => {
    const selection = window.getSelection();
    const text = selection.toString().trim();
    
    console.log('🎯 SELECTED TEXT:', text);

    if (text && text.split(' ').length === 1) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      
      setSelectedWord(text);
      setPopupPosition({
        x: rect.left + window.scrollX,
        y: rect.bottom + window.scrollY
      });
      setShowPopup(true);
      fetchDefinition(text);
    }
  }, []);

  // DICTIONARY API
  const fetchDefinition = async (word) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`);
      const data = await response.json();

      if (data && data[0]) {
        const wordData = data[0];
        const firstMeaning = wordData.meanings[0];
        const firstDefinition = firstMeaning.definitions[0];
        setDefinition(firstDefinition.definition);
      } else {
        setDefinition(`No definition found for "${word}"`);
      }
    } catch (error) {
      setDefinition(`Error fetching definition for "${word}"`);
    }
    setLoading(false);
  };

  // PDF UĞURLA YÜKLƏNDİ
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPdfError('');
    console.log('✅ PDF LOADED! Pages:', numPages);
  }

  // PDF ERROR
  function onDocumentLoadError(error) {
    console.error('❌ PDF ERROR:', error);
    setPdfError('PDF failed to load. Please try refreshing the page.');
  }

  // POP-UP BAĞLA
  const closePopup = () => {
    setShowPopup(false);
    setSelectedWord('');
    setDefinition('');
    window.getSelection().removeAllRanges();
  };

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0F0F0F 0%, #1A1A1A 100%)',
      color: 'white',
      fontFamily: '"SF Pro Display", -apple-system, sans-serif',
      padding: '20px'
    }}>

      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
        padding: '20px',
        background: 'rgba(255,107,53,0.1)',
        borderRadius: '12px'
      }}>
        <div>
          <h1 style={{ color: '#FF6B35', margin: 0 }}>{book.title}</h1>
          <p style={{ color: '#888', margin: '5px 0 0 0', fontSize: '14px' }}>
            Level: {book.level} • 📖 <strong>SELECT ANY WORD IN PDF!</strong>
          </p>
          {pdfError && (
            <p style={{ color: 'red', margin: '5px 0 0 0', fontSize: '12px' }}>
              {pdfError}
            </p>
          )}
        </div>

        <button
          onClick={() => navigate('/english/books')}
          style={{
            background: 'transparent',
            color: '#FF6B35',
            border: '2px solid #FF6B35',
            padding: '10px 20px',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          ← Books
        </button>
      </div>

      {/* PDF Controls */}
      <div style={{
        background: 'rgba(255,107,53,0.1)',
        borderRadius: '12px',
        padding: '15px',
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button
            onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
            disabled={pageNumber <= 1}
            style={{
              background: pageNumber <= 1 ? '#333' : '#FF6B35',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '6px',
              cursor: pageNumber <= 1 ? 'not-allowed' : 'pointer'
            }}
          >
            ← Previous
          </button>

          <span style={{ color: '#FF6B35', fontWeight: '600' }}>
            Page {pageNumber} of {numPages || '...'}
          </span>

          <button
            onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages || prev))}
            disabled={pageNumber >= numPages}
            style={{
              background: pageNumber >= numPages ? '#333' : '#FF6B35',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '6px',
              cursor: pageNumber >= numPages ? 'not-allowed' : 'pointer'
            }}
          >
            Next →
          </button>
        </div>

        <div style={{ color: '#FF6B35', fontSize: '14px', fontWeight: '600' }}>
          🎯 CLICK AND SELECT WORDS!
        </div>
      </div>

      {/* PDF Viewer */}
      <div 
        style={{
          background: 'white',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '20px',
          minHeight: '800px',
          display: 'flex',
          justifyContent: 'center',
          overflow: 'auto'
        }}
        onMouseUp={handleTextSelection}
      >
        <Document
          file={getPdfUrl()}  // TAM URL İSTİFADƏ ET
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading={
            <div style={{ 
              color: '#FF6B35', 
              fontSize: '18px', 
              textAlign: 'center',
              padding: '50px'
            }}>
              Loading PDF...
              <p style={{ fontSize: '14px', color: '#888', marginTop: '10px' }}>
                {getPdfUrl()}
              </p>
            </div>
          }
          error={
            <div style={{ 
              color: 'red', 
              fontSize: '18px', 
              textAlign: 'center',
              padding: '50px'
            }}>
              <h3>PDF Loading Failed</h3>
              <p>URL: {getPdfUrl()}</p>
              <button
                onClick={() => window.location.reload()}
                style={{
                  background: '#FF6B35',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  marginTop: '15px'
                }}
              >
                Try Again
              </button>
            </div>
          }
        >
          <Page 
            pageNumber={pageNumber} 
            width={800}
            loading={
              <div style={{ 
                color: '#FF6B35', 
                textAlign: 'center',
                padding: '50px'
              }}>
                Loading page...
              </div>
            }
          />
        </Document>
      </div>

      {/* Pop-up Definition */}
      {showPopup && (
        <div style={{
          position: 'fixed',
          left: `${popupPosition.x}px`,
          top: `${popupPosition.y}px`,
          background: 'linear-gradient(135deg, #1A1A1A 0%, #222 100%)',
          border: '2px solid #FF6B35',
          borderRadius: '12px',
          padding: '20px',
          color: 'white',
          width: '300px',
          maxWidth: '90vw',
          boxShadow: '0 20px 50px rgba(0,0,0,0.9)',
          zIndex: 10000,
          transform: 'translateX(-50%)'
        }}>
          <button
            onClick={closePopup}
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
              justifyContent: 'center'
            }}
          >
            ×
          </button>

          <h3 style={{
            color: '#FF6B35',
            margin: '0 0 10px 0',
            fontSize: '20px',
            fontWeight: '700'
          }}>
            {selectedWord}
          </h3>

          <div style={{
            fontSize: '14px',
            lineHeight: '1.5',
            color: '#CCCCCC'
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
        </div>
      )}

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
