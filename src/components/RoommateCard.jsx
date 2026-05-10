const TRANSPORT_LABELS = {
  walking: 'Walks',
  bus: 'Takes Bus',
  train: 'Takes Train',
  car: 'Has Car',
  bike: 'Bikes',
}

export default function RoommateCard({ roommate, compatibilityScore }) {
  const { name, age, origin, city, state, budget, languages, occupation, schedule, lifestyle, bio, avatar, transport, moveInDate } = roommate

  const scoreColor =
    compatibilityScore >= 80 ? 'text-green-600 bg-green-50 border-green-200'
    : compatibilityScore >= 60 ? 'text-amber-600 bg-amber-50 border-amber-200'
    : 'text-slate-500 bg-slate-50 border-slate-200'

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:shadow-md transition-shadow flex flex-col">
      <div className="flex items-start gap-4">
        <img src={avatar} alt={name} className="w-14 h-14 rounded-full object-cover border-2 border-slate-200 flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-semibold text-slate-800 truncate">{name}, {age}</h3>
            {compatibilityScore !== undefined && (
              <span className={`text-xs font-semibold px-2 py-1 rounded-full border flex-shrink-0 ${scoreColor}`}>
                {compatibilityScore}% match
              </span>
            )}
          </div>
          <p className="text-sm text-slate-500">From {origin} · {city}, {state}</p>
          <p className="text-sm text-slate-600">{occupation}</p>
        </div>
      </div>

      <p className="text-sm text-slate-600 mt-3 line-clamp-2 flex-1">{bio}</p>

      <div className="mt-3 grid grid-cols-2 gap-y-1 text-xs text-slate-600">
        <div className="flex items-center gap-1">
          <span>💰</span>
          <span>Budget: ${budget}/mo</span>
        </div>
        <div className="flex items-center gap-1">
          <span>🕐</span>
          <span>{schedule}</span>
        </div>
        <div className="flex items-center gap-1">
          <span>🚌</span>
          <span>{TRANSPORT_LABELS[transport] || transport}</span>
        </div>
        <div className="flex items-center gap-1">
          <span>📅</span>
          <span>Move in: {moveInDate}</span>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-1">
        {languages.map(lang => (
          <span key={lang} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200">
            {lang}
          </span>
        ))}
      </div>

      <div className="mt-2 flex flex-wrap gap-1">
        {lifestyle.map(l => (
          <span key={l} className="text-xs bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-200">
            {l}
          </span>
        ))}
      </div>

      <button className="mt-4 w-full border border-blue-600 text-blue-600 hover:bg-blue-50 text-sm font-medium py-2 rounded-lg transition-colors">
        Connect
      </button>
    </div>
  )
}
