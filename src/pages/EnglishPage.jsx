import { useNavigate } from 'react-router-dom'

export default function EnglishPage() {
  const navigate = useNavigate()

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0F0F0F 0%, #1A1A1A 100%)',
      color: 'white',
      padding: '40px',
      fontFamily: '"SF Pro Display", -apple-system, sans-serif'
    }}>
      
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '50px'
      }}>
        <div>
          <h1 style={{
            fontSize: '42px',
            fontWeight: 900,
            margin: 0,
            background: 'linear-gradient(90deg, #FFFFFF 0%, #FF6B35 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            English Learning
          </h1>
          <p style={{ fontSize: '18px', color: '#888', margin: '10px 0 0 0' }}>
            Improve your English skills with interactive materials
          </p>
        </div>
        
        <button onClick={() => navigate('/')} style={{
          background: '#222',
          color: '#FF6B35',
          border: '2px solid #333',
          padding: '12px 24px',
          borderRadius: '12px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 600
        }}>
          ← Back to Dashboard
        </button>
      </div>

      {/* Navigation Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '25px',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        
        {/* Student Books Card */}
        <div 
          onClick={() => navigate('/english/books')} // Eyni qalsın, amma route düzələcək
          style={{
            background: 'linear-gradient(135deg, #1A1A1A 0%, #222 100%)',
            border: '1px solid #333',
            borderRadius: '20px',
            padding: '40px 30px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textAlign: 'center'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-5px)'
            e.target.style.boxShadow = '0 20px 40px rgba(255,107,53,0.2)'
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = 'none'
          }}
        >
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>📚</div>
          <h3 style={{ fontSize: '24px', color: '#FF6B35', marginBottom: '15px' }}>
            Student Books
          </h3>
          <p style={{ color: '#888', lineHeight: '1.5' }}>
            Access all course books and materials in PDF format with interactive dictionary
          </p>
        </div>

        {/* Vocabulary Card */}
        <div style={{
          background: 'linear-gradient(135deg, #1A1A1A 0%, #222 100%)',
          border: '1px solid #333',
          borderRadius: '20px',
          padding: '40px 30px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          textAlign: 'center',
          opacity: 0.6
        }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>📖</div>
          <h3 style={{ fontSize: '24px', color: '#FF6B35', marginBottom: '15px' }}>
            Vocabulary Practice
          </h3>
          <p style={{ color: '#888', lineHeight: '1.5' }}>
            Coming Soon - Interactive flashcards and quizzes
          </p>
        </div>

        {/* Grammar Card */}
        <div style={{
          background: 'linear-gradient(135deg, #1A1A1A 0%, #222 100%)',
          border: '1px solid #333',
          borderRadius: '20px',
          padding: '40px 30px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          textAlign: 'center',
          opacity: 0.6
        }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>✍️</div>
          <h3 style={{ fontSize: '24px', color: '#FF6B35', marginBottom: '15px' }}>
            Grammar Lessons
          </h3>
          <p style={{ color: '#888', lineHeight: '1.5' }}>
            Coming Soon - Grammar rules and exercises
          </p>
        </div>
      </div>
    </div>
  )
}
