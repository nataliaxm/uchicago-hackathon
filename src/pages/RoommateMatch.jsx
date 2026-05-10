import { useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { roommates } from '../data/roommates'
import RoommateCard from '../components/RoommateCard'

function computeScore(roommate, budget, transport) {
  let score = 50

  const budgetDiff = Math.abs(roommate.budget - budget) / Math.max(budget, 1)
  if (budgetDiff <= 0.15) score += 30
  else if (budgetDiff <= 0.35) score += 15

  if (transport && roommate.transport === transport) score += 20

  return Math.min(100, score)
}

export default function RoommateMatch() {
  const [searchParams] = useSearchParams()
  const budget = Number(searchParams.get('budget') || 1000)
  const transport = searchParams.get('transport') || ''

  const scored = useMemo(() => {
    return roommates
      .map(r => ({ ...r, score: computeScore(r, budget, transport) }))
      .sort((a, b) => b.score - a.score)
  }, [budget, transport])

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Roommate Matches</h1>
          <p className="text-slate-500 text-sm mt-1">
            {scored.length} potential roommates · sorted by compatibility
          </p>
        </div>
        <Link
          to={`/listings?budget=${budget}&transport=${transport}`}
          className="border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          ← Back to Listings
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {scored.map(roommate => (
          <RoommateCard
            key={roommate.id}
            roommate={roommate}
            compatibilityScore={roommate.score}
          />
        ))}
      </div>

      <div className="mt-12 bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
        <h3 className="text-slate-800 font-semibold mb-2">Not sure what to look for in a roommate?</h3>
        <p className="text-slate-500 text-sm mb-4">
          Ask our AI assistant about roommate agreements, red flags, and co-living tips.
        </p>
        <Link
          to="/chat"
          className="inline-block bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium px-6 py-2 rounded-lg transition-colors"
        >
          Get Advice from AI
        </Link>
      </div>
    </div>
  )
}
