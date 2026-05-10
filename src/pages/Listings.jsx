import { useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { apartments } from '../data/apartments'
import ApartmentCard from '../components/ApartmentCard'

const TRANSPORT_LABELS = {
  walking: 'walkable',
  bus: 'bus access',
  train: 'train access',
  car: 'parking available',
  bike: 'bike-friendly',
}

export default function Listings() {
  const [searchParams] = useSearchParams()
  const budget = Number(searchParams.get('budget') || 3000)
  const transport = searchParams.get('transport') || ''
  const roommatePreference = searchParams.get('roommate') || 'open'

  const filtered = useMemo(() => {
    return apartments.filter(apt => {
      if (apt.rent > budget) return false
      if (transport && !apt.transport.includes(transport)) return false
      if (roommatePreference === 'solo' && apt.bedrooms > 1) return false
      if (roommatePreference === 'need_roommates' && apt.bedrooms < 2) return false
      return true
    })
  }, [budget, transport, roommatePreference])

  const roommateLabel =
    roommatePreference === 'solo' ? 'Living alone'
    : roommatePreference === 'need_roommates' ? 'Seeking roommates'
    : 'Open to roommates'

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Apartment Listings</h1>
          <p className="text-slate-500 text-sm mt-1">
            {filtered.length} result{filtered.length !== 1 ? 's' : ''} · up to ${budget.toLocaleString()}/mo
            {transport && ` · ${TRANSPORT_LABELS[transport] || transport}`}
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Link
            to={`/roommates?budget=${budget}&transport=${transport}`}
            className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Find Roommates
          </Link>
          <Link
            to="/"
            className="border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Edit Search
          </Link>
        </div>
      </div>

      {/* Active filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full">
          Budget: ${budget.toLocaleString()}/mo
        </span>
        {transport && (
          <span className="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full capitalize">
            Transport: {transport}
          </span>
        )}
        <span className="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full">
          {roommateLabel}
        </span>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-5xl mb-4">🔍</div>
          <h2 className="text-xl font-semibold text-slate-700 mb-2">No apartments found</h2>
          <p className="text-slate-500 mb-4">
            Try increasing your budget or changing your transport preference.
          </p>
          <Link to="/" className="text-blue-600 hover:underline text-sm">← Back to search</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(apt => (
            <ApartmentCard key={apt.id} apartment={apt} />
          ))}
        </div>
      )}

      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
        <h3 className="text-slate-800 font-semibold mb-2">Have questions about renting in the US?</h3>
        <p className="text-slate-500 text-sm mb-4">
          Our AI assistant can explain leases, tenant rights, and what to look for.
        </p>
        <Link
          to="/chat"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2 rounded-lg transition-colors"
        >
          Chat with AI Assistant
        </Link>
      </div>
    </div>
  )
}
