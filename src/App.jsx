import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Listings from './pages/Listings'
import RoommateMatch from './pages/RoommateMatch'
import Chat from './pages/Chat'
import HousingGuide from './pages/HousingGuide'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/roommates" element={<RoommateMatch />} />
          <Route path="/guide" element={<HousingGuide />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
