import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ETHNICITIES, INDUSTRIES, CITY_LABELS, getRecommendations } from '../data/cityProfiles'

const CITIES = [
  { value: 'Chicago',     label: 'Chicago, IL',     jobs: 'Logistics · Finance · Healthcare' },
  { value: 'Houston',     label: 'Houston, TX',     jobs: 'Energy · Healthcare · No income tax' },
  { value: 'Dallas',      label: 'Dallas, TX',      jobs: 'Tech · Finance · Business services' },
  { value: 'Atlanta',     label: 'Atlanta, GA',     jobs: 'Logistics hub · Corporate HQs' },
  { value: 'New York',    label: 'New York, NY',    jobs: 'Finance · Tech · Media' },
  { value: 'Los Angeles', label: 'Los Angeles, CA', jobs: 'Entertainment · Tech · Healthcare' },
  { value: 'Minneapolis', label: 'Minneapolis, MN', jobs: 'Healthcare · Finance · Manufacturing' },
  { value: 'San Jose',    label: 'San Jose, CA',    jobs: 'Silicon Valley · Tech' },
  { value: 'Miami',       label: 'Miami, FL',       jobs: 'International trade · Healthcare' },
]

const TIMELINE_OPTIONS = [
  { value: 'within_3mo', label: 'Within 3 months' },
  { value: '3_to_6mo',   label: '3 to 6 months' },
  { value: '6mo_plus',   label: '6+ months out' },
]

const ROOMMATE_OPTIONS = [
  { value: 'solo',           label: 'Living alone' },
  { value: 'open',           label: 'Open to roommates' },
  { value: 'need_roommates', label: 'Need roommates' },
]

const FEATURES = [
  { title: 'Filtered Listings', desc: 'Apartments matched to your budget and transit needs' },
  { title: 'Roommate Matching', desc: 'Find compatible roommates from your community' },
  { title: 'AI Housing Guide',  desc: 'Ask about leases, tenant rights, and neighborhoods' },
]

export default function Home() {
  const navigate = useNavigate()
  const [inUS, setInUS] = useState(true)
  const [moveTimeline, setMoveTimeline] = useState('within_3mo')
  const [ethnicity, setEthnicity] = useState('')
  const [industry, setIndustry] = useState('')
  const [city, setCity] = useState('')
  const [showRecs, setShowRecs] = useState(false)
  const [budget, setBudget] = useState(1200)
  const [transport, setTransport] = useState('bus')
  const [roommatePreference, setRoommatePreference] = useState('open')

  const handleSearch = (e) => {
    e.preventDefault()
    const params = new URLSearchParams({ budget, transport, roommate: roommatePreference })
    if (city) params.set('city', city)
    navigate(`/listings?${params}`)
  }

  const selectRecommended = (cityValue) => {
    setCity(cityValue)
    setShowRecs(false)
  }

  const recommendations = getRecommendations(ethnicity, industry)
  const selectedCityData = CITIES.find(c => c.value === city)
  const isPersonalized = !!(ethnicity || industry)

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#009BDA] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-100 text-sm font-bold tracking-widest uppercase mb-3">
            Housing for Newcomers
          </p>
          <h1 
            className="text-5xl sm:text-7xl font-extrabold mb-4 leading-tight drop-shadow-lg"
            style={{ fontFamily: "'Playfair Display', serif" }}
            >
            Find Your Home<br />in America
          </h1>
          <p className="text-blue-50 text-lg mb-10 max-w-xl mx-auto opacity-90">
            Affordable housing matched to your budget, transportation, and community preferences.
          </p>

          <form
            onSubmit={handleSearch}
            className="bg-white rounded-2xl p-6 text-left shadow-2xl max-w-2xl mx-auto space-y-6"
          >
            {/* Immigration status */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Are you currently living in the US?
              </label>
              <div className="flex gap-2">
                {[
                  { val: true,  label: "Yes, I'm already here" },
                  { val: false, label: "No, I'm planning to move" },
                ].map(({ val, label }) => (
                  <button
                    key={String(val)}
                    type="button"
                    onClick={() => setInUS(val)}
                    className={`flex-1 py-2.5 rounded-lg border-2 text-sm font-medium transition-colors ${
                      inUS === val
                        ? 'border-blue-600 bg-blue-50 text-blue-700'
                        : 'border-slate-200 text-slate-600 hover:border-blue-300'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Fields that only show when not yet in the US */}
            {!inUS && (
              <>
                {/* Move timeline */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    When are you thinking of moving?
                  </label>
                  <div className="flex gap-2">
                    {TIMELINE_OPTIONS.map(opt => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setMoveTimeline(opt.value)}
                        className={`flex-1 py-2 rounded-lg border-2 text-xs font-medium transition-colors ${
                          moveTimeline === opt.value
                            ? 'border-blue-600 bg-blue-50 text-blue-700'
                            : 'border-slate-200 text-slate-600 hover:border-blue-300'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Cultural background */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    What is your cultural background?
                    <span className="ml-1 text-slate-400 font-normal">(optional)</span>
                  </label>
                  <p className="text-xs text-slate-400 mb-2">
                    Helps us find cities where your community is established.
                  </p>
                  <select
                    value={ethnicity}
                    onChange={e => setEthnicity(e.target.value)}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select background (optional)</option>
                    {ETHNICITIES.map(e => (
                      <option key={e.value} value={e.value}>{e.label}</option>
                    ))}
                  </select>
                </div>

                {/* Industry */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    What industry do you work in?
                    <span className="ml-1 text-slate-400 font-normal">(optional)</span>
                  </label>
                  <p className="text-xs text-slate-400 mb-2">
                    Helps us recommend cities where openings in your field are more available.
                  </p>
                  <select
                    value={industry}
                    onChange={e => setIndustry(e.target.value)}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select industry (optional)</option>
                    {INDUSTRIES.map(i => (
                      <option key={i.value} value={i.value}>{i.label}</option>
                    ))}
                  </select>
                </div>
              </>
            )}

            {/* City picker */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Which city are you considering?
              </label>
              <div className="flex flex-wrap gap-2 mb-2">
                {CITIES.map(c => (
                  <button
                    key={c.value}
                    type="button"
                    onClick={() => { setCity(c.value); setShowRecs(false) }}
                    className={`px-3 py-1.5 rounded-lg border-2 text-xs font-medium transition-colors ${
                      city === c.value
                        ? 'border-blue-600 bg-blue-50 text-blue-700'
                        : 'border-slate-200 text-slate-600 hover:border-blue-300'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => { setShowRecs(!showRecs); setCity('') }}
                  className={`px-3 py-1.5 rounded-lg border-2 text-xs font-medium transition-colors ${
                    showRecs
                      ? 'border-amber-500 bg-amber-50 text-amber-700'
                      : 'border-dashed border-slate-300 text-slate-500 hover:border-amber-400 hover:text-amber-600'
                  }`}
                >
                  Not sure — help me decide
                </button>
              </div>

              {/* Recommendation panel */}
              {showRecs && (
                <div className="mt-2 rounded-xl border border-amber-200 bg-amber-50 p-4 space-y-2">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-semibold text-amber-800 uppercase tracking-wide">
                      {isPersonalized ? 'Recommended for you' : 'Top cities for immigrant job seekers'}
                    </p>
                    {isPersonalized && (
                      <span className="text-xs bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full">
                        Based on your profile
                      </span>
                    )}
                  </div>
                  {recommendations.map(rec => (
                    <button
                      key={rec.city}
                      type="button"
                      onClick={() => selectRecommended(rec.city)}
                      className="w-full text-left p-3 rounded-lg bg-white border border-amber-200 hover:border-amber-400 hover:shadow-sm transition-all"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <p className="font-semibold text-slate-800 text-sm">
                          {CITY_LABELS[rec.city] || rec.city}
                        </p>
                        <div className="flex gap-1 flex-shrink-0">
                          {rec.communityNote && (
                            <span className="text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded">
                              Community
                            </span>
                          )}
                          {rec.industryNote && (
                            <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded">
                              Jobs
                            </span>
                          )}
                        </div>
                      </div>
                      {rec.communityNote && (
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          <span className="font-medium text-blue-600">Community: </span>
                          {rec.communityNote}
                        </p>
                      )}
                      {rec.industryNote && (
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          <span className="font-medium text-green-600">Jobs: </span>
                          {rec.industryNote}
                        </p>
                      )}
                    </button>
                  ))}
                  {isPersonalized && (
                    <p className="text-xs text-amber-700 pt-1">
                      Results prioritize cities matching your background and industry. Used only to personalize results — not stored.
                    </p>
                  )}
                </div>
              )}

              {selectedCityData && !showRecs && (
                <p className="text-xs text-slate-500 mt-1.5">
                  Top industries: {selectedCityData.jobs}
                </p>
              )}
            </div>

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
                    className={`py-2.5 rounded-lg border-2 text-xs font-medium transition-colors ${
                      roommatePreference === opt.value
                        ? 'border-blue-600 bg-blue-50 text-blue-700'
                        : 'border-slate-200 text-slate-600 hover:border-blue-300'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#009BDA] hover:bg-[#007ba8] text-white font-semibold py-3 rounded-xl transition-colors text-base"
            >
              Find Apartments
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
            {FEATURES.map((f, i) => (
              <div key={f.title} className="border-l-4 border-blue-600 pl-5">
                <p className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-1">0{i + 1}</p>
                <h3 className="font-semibold text-slate-800 mb-1">{f.title}</h3>
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
            {CITIES.map(c => (
              <span
                key={c.value}
                className="bg-white border border-slate-200 text-slate-600 px-4 py-1.5 rounded-full text-sm shadow-sm"
              >
                {c.label}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
