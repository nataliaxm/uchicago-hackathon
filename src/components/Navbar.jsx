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
    /* 1. Navbar Container: Changed bg-white to bg-slate-50 (light grey) and border to slate-300 */
    <nav className="bg-slate-50/95 backdrop-blur-md border-b-2 border-slate-300 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* 2. Brand Logo: Red box remains the star attraction */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-[#ff0000] rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 group-hover:rotate-12 transition-transform">
              <span className="text-xl">🌉</span>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl text-slate-900 tracking-tighter leading-none">Budget Bridge</span>
              {/* Changed text-sky-500 to text-slate-500 for the grey theme */}
              <span className="text-[8px] font-bold text-slate-500 uppercase tracking-[0.2em]">Find your apartment</span>
            </div>
          </Link>

          {/* 3. Navigation Links: Swapped Sky Blue for Slate Grey */}
          <div className="flex gap-1">
            {links.map(link => {
              const isActive = location.pathname === link.to
              
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? 'text-slate-900 bg-white shadow-sm ring-1 ring-slate-200' /* Active: White pop on grey bg */
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50' 
                  }`}
                >
                  {link.label}
                  
                  {/* 4. Active Indicator: Still Victory Red to match the logo */}
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