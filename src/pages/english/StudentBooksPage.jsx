import { useNavigate } from 'react-router-dom';
import { englishBooks } from './data/booksData';

export default function StudentBooksPage() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0F0F0F 0%, #1A1A1A 100%)',
      color: 'white',
      padding: '40px',
      fontFamily: '"SF Pro Display", -apple-system, sans-serif'
    }}>
      
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '50px',
        flexWrap: 'wrap',
        gap: '20px'
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
            Student Books
          </h1>
          <p style={{ fontSize: '18px', color: '#888', margin: '10px 0 0 0' }}>
            Choose a book to start learning with interactive dictionary
          </p>
        </div>
        
        <button onClick={() => navigate('/english')} style={{
          background: '#222',
          color: '#FF6B35',
          border: '2px solid #333',
          padding: '12px 24px',
          borderRadius: '12px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 600
        }}>
          ← Back to English
        </button>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '25px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {englishBooks.map(book => (
          <div
            key={book.id}
            onClick={() => navigate(`/english/books/${book.id}`)}
            style={{
              background: 'linear-gradient(135deg, #1A1A1A 0%, #222 100%)',
              border: '1px solid #333',
              borderRadius: '20px',
              padding: '30px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-8px)';
              e.target.style.boxShadow = '0 20px 40px rgba(255,107,53,0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '8px',
              height: '100%',
              background: book.coverColor
            }}></div>

            <div style={{ paddingLeft: '15px' }}>
              <h3 style={{
                fontSize: '22px',
                color: '#FF6B35',
                marginBottom: '10px',
                fontWeight: 700
              }}>
                {book.title}
              </h3>
              
              <div style={{
                display: 'inline-block',
                background: 'rgba(255,107,53,0.1)',
                color: '#FF6B35',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 600,
                marginBottom: '15px'
              }}>
                {book.level}
              </div>

              <p style={{
                color: '#CCCCCC',
                fontSize: '14px',
                lineHeight: '1.5',
                marginBottom: '20px'
              }}>
                {book.description}
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px',
                color: '#888',
                borderTop: '1px solid #333',
                paddingTop: '15px'
              }}>
                <div>
                  <div style={{ fontWeight: 600 }}>{book.pages} pages</div>
                  <div>Content</div>
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>{book.vocabulary}+ words</div>
                  <div>Vocabulary</div>
                </div>
              </div>

              <button style={{
                background: 'linear-gradient(45deg, #FF6B35, #FF8B35)',
                color: 'white',
                border: 'none',
                padding: '12px 20px',
                borderRadius: '10px',
                cursor: 'pointer',
                width: '100%',
                marginTop: '20px',
                fontWeight: 600,
                fontSize: '14px',
                transition: 'all 0.3s ease'
              }}>
                Open Book 📖
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '60px',
        textAlign: 'center',
        color: '#555',
        fontSize: '14px'
      }}>
        <p>Click on the book to open it with interactive dictionary features</p>
        <p style={{ marginTop: '10px', fontSize: '12px' }}>
          • Word definitions • Pronunciation • Examples • Save vocabulary
        </p>
      </div>
    </div>
  );
}
