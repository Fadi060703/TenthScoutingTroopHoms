import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Law from './pages/Law'
import Promise from './pages/ScoutPromise'

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/law" element={<Law />} />
            <Route path="/promise" element={<Promise />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}