import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import Navbar from './components/Navbar.jsx'
import HomePage from './HomePage.jsx'
import CreatePage from './routes/CreatePage.jsx'
import GalleryPage from './routes/GalleryPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  </StrictMode>,
)
