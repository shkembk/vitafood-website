import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CertificationsPage from './pages/CertificationsPage'

function App() {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/certifications" element={<CertificationsPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App
