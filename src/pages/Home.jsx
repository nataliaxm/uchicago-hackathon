import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CITIES = [
  'Chicago, IL', 'New York, NY', 'Houston, TX', 'Los Angeles, CA',
  'Miami, FL', 'Atlanta, GA', 'Dallas, TX', 'Minneapolis, MN', 'San Jose, CA',
]

const FEATURES = [
  { icon: '🏠', title: 'Filtered Listings', desc: 'Apartments matched to your budget and transit needs' },
  { icon: '🤝', title: 'Roommate Matching', desc: 'Find compatible roommates from your community' },
  { icon: '🤖', title: 'AI Housing Guide', desc: 'Ask about leases, tenant rights, and neighborhoods' },
]

const ROOMMATE_OPTIONS = [
  { value: 'solo', label: 'Living Alone', emoji: '👤' },
  { value: 'open', label: 'Open to Roommates', emoji: '👥' },
  { value: 'need_roommates', label: 'Need Roommates', emoji: '🤝' },
]

export default function Home() {
  const navigate = useNavigate()
  const [budget, setBudget] = useState(1200)
  const [transport, setTransport] = useState('bus')
  const [roommatePreference, setRoommatePreference] = useState('open')

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`/listings?budget=${budget}&transport=${transport}&roommate=${roommatePreference}`)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-200 text-sm font-medium tracking-widest uppercase mb-3">
            Housing for Newcomers
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Find Your Home<br />in America
          </h1>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
            Affordable housing matched to your budget, transportation, and community preferences.
          </p>

          <form
            onSubmit={handleSearch}
            className="bg-white rounded-2xl p-6 text-left shadow-2xl max-w-2xl mx-auto"
          >
            <h2 className="text-slate-800 font-semibold text-lg mb-5">Find your apartment</h2>

            <div className="space-y-5">
              {/* Budget */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Monthly Budget
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min={300}
                    max={3000}
                    step={50}
                    value={budget}
                    onChange={e => setBudget(Number(e.target.value))}
                    className="flex-1 accent-blue-600"
                  />
                  <span className="text-blue-700 font-bold text-lg w-28 text-right">
                    ${budget.toLocaleString()}/mo
                  </span>
                </div>
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>$300</span>
                  <span>$3,000</span>
                </div>
              </div>

              {/* Transport */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  How do you get around?
                </label>
                <select
                  value={transport}
                  onChange={e => setTransport(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="walking">Walking / On foot</option>
                  <option value="bus">Public bus</option>
                  <option value="train">Subway / Train</option>
                  <option value="car">Car</option>
                  <option value="bike">Bicycle</option>
                </select>
              </div>

              {/* Roommate preference */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Roommate preference
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {ROOMMATE_OPTIONS.map(opt => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setRoommatePreference(opt.value)}
                      className={`flex flex-col items-center gap-1 p-3 rounded-lg border-2 text-xs font-medium transition-colors ${
                        roommatePreference === opt.value
                          ? 'border-blue-600 bg-blue-50 text-blue-700'
                          : 'border-slate-200 text-slate-600 hover:border-blue-300'
                      }`}
                    >
                      <span className="text-2xl">{opt.emoji}</span>
                      <span className="text-center">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors text-base"
            >
              Find Apartments →
            </button>
          </form>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 text-center mb-10">
            Everything you need to find your home
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {FEATURES.map(f => (
              <div key={f.title} className="text-center">
                <div className="text-5xl mb-4">{f.icon}</div>
                <h3 className="font-semibold text-slate-800 mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-12 px-4 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl font-semibold text-slate-700 mb-6">Listings in</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {CITIES.map(city => (
              <span
                key={city}
                className="bg-white border border-slate-200 text-slate-600 px-4 py-1.5 rounded-full text-sm shadow-sm"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
