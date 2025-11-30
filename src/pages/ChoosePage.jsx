import { useNavigate } from 'react-router-dom'

export default function ChoosePage() {
  const navigate = useNavigate()

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #000000 0%, #111111 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      padding: '40px',
      fontFamily: '"SF Pro Display", -apple-system, sans-serif'
    }}>
      
      {/* Main Title */}
      <h2 style={{
        fontSize: '52px', 
        marginBottom: '80px', 
        color: '#FF6B35', 
        fontWeight: 900,
        textAlign: 'center',
        background: 'linear-gradient(90deg, #FF6B35 0%, #FF8B35 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        Choose Your Learning Path
      </h2>

      {/* Buttons Container */}
      <div style={{
        display: 'flex', 
        gap: '60px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        
        {/* English Button */}
        <button 
          onClick={() => navigate('/english')} 
          style={{
            background: 'linear-gradient(45deg, #FF6B35, #FF8B35)',
            color: 'white',
            fontSize: '32px',
            fontWeight: 700,
            padding: '50px 100px',
            border: 'none',
            borderRadius: '24px',
            cursor: 'pointer',
            boxShadow: '0 25px 50px rgba(255,107,53,0.4)',
            transition: 'all 0.3s ease',
            minWidth: '280px'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-5px)'
            e.target.style.boxShadow = '0 35px 60px rgba(255,107,53,0.6)'
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = '0 25px 50px rgba(255,107,53,0.4)'
          }}
        >
          📚 English
        </button>

        {/* ICT Button */}
        <button 
          onClick={() => navigate('/ict')} 
          style={{
            background: 'transparent',
            color: '#FF6B35',
            fontSize: '32px',
            fontWeight: 700,
            padding: '50px 100px',
            border: '3px solid #FF6B35',
            borderRadius: '24px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            minWidth: '280px'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-5px)'
            e.target.style.background = 'rgba(255,107,53,0.1)'
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)'
            e.target.style.background = 'transparent'
          }}
        >
          💻 ICT
        </button>
      </div>

      {/* Back Button */}
      <button 
        onClick={() => navigate('/')} 
        style={{
          marginTop: '80px',
          background: 'transparent',
          color: '#888',
          border: 'none',
          fontSize: '20px',
          cursor: 'pointer',
          padding: '15px 30px',
          borderRadius: '10px',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(255,255,255,0.1)'
          e.target.style.color = '#FF6B35'
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'transparent'
          e.target.style.color = '#888'
        }}
      >
        ← Back to Dashboard
      </button>

      {/* Footer Info */}
      <div style={{
        marginTop: '60px',
        textAlign: 'center',
        color: '#555',
        fontSize: '16px'
      }}>
        <p>Select a subject to start your learning journey</p>
        <p style={{ fontSize: '14px', marginTop: '10px' }}>
          Both modules include interactive exercises, progress tracking, and personalized content
        </p>
      </div>
    </div>
  )
}
