import { Routes, Route } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import ChoosePage from './pages/ChoosePage'
import EnglishPage from './pages/EnglishPage'
import StudentBooksPage from './pages/english/StudentBooksPage'
import BookReaderPage from './pages/english/BookReaderPage'

export default function App() {
  return (
    <div style={{ 
      margin: 0, 
      padding: 0, 
      width: '100%', 
      minHeight: '100vh', 
      background: '#000'
    }}>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/choose" element={<ChoosePage />} />
        <Route path="/english" element={<EnglishPage />} />
        <Route path="/english/books" element={<StudentBooksPage />} />
        <Route path="/english/books/:bookId" element={<BookReaderPage />} />
        
        <Route path="/ict" element={
          <div style={{ 
            margin: 0, 
            padding: 0, 
            minHeight: '100vh', 
            background: '#000', 
            color: 'white', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            flexDirection: 'column',
            width: '100%'
          }}>
            <h1 style={{ fontSize: '70px', color: '#FF6B35' }}>ICT Module</h1>
            <p style={{ fontSize: '30px', color: '#aaa' }}>Coming soon</p>
          </div>
        } />
      </Routes>
    </div>
  )
}
