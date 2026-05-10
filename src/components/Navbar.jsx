import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/listings', label: 'Find Housing' },
  { to: '/roommates', label: 'Roommates' },
  { to: '/guide', label: 'Housing Guide' },
  { to: '/chat', label: 'AI Assistant' },
]

export default function Navbar() {
  const location = useLocation()

  return (
    /* 1. Navbar Container: White background with the Sky Blue bottom border */
    <nav className="bg-white/90 backdrop-blur-md border-b-4 border-slate-300 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* 2. Brand Logo: Using Chicago Victory Red */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-[#ff0000] rounded-xl flex items-center justify-center shadow-lg shadow-red-200 group-hover:rotate-12 transition-transform">
              <div className="logo-circle">CHI</div>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl text-slate-900 tracking-tighter leading-none">Budget Bridge</span>
              <span className="text-[8px] font-bold text-sky-500 uppercase tracking-[0.2em]">FInd your apartment</span>
            </div>
          </Link>

          {/* 3. Navigation Links */}
          <div className="flex gap-2">
            {links.map(link => {
              const isActive = location.pathname === link.to
              
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? 'text-sky-600 bg-sky-50'
                      : 'text-slate-500 hover:text-sky-500 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                  
                  {/* 4. Active "Star" Indicator: A small red dot that appears under the active link */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#ff0000] rounded-full shadow-[0_0_8px_rgba(255,0,0,0.6)]" />
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}