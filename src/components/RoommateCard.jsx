const TRANSPORT_LABELS = {
  walking: 'Walks',
  bus: 'Takes Bus',
  train: 'Takes Train',
  car: 'Has Car',
  bike: 'Bikes',
}

export default function RoommateCard({ roommate, compatibilityScore }) {
  const { name, age, origin, city, state, budget, languages, occupation, schedule, lifestyle, bio, avatar, transport, moveInDate } = roommate

  // CHICAGO THEME: Red for high match (like the stars), Sky Blue for medium
  const scoreStyles =
    compatibilityScore >= 80 ? 'text-[#ff0000] bg-red-50 border-red-100 shadow-sm shadow-red-100'
    : compatibilityScore >= 60 ? 'text-sky-600 bg-sky-50 border-sky-100'
    : 'text-slate-500 bg-slate-50 border-slate-200'

  return (
    /* 1. Container: Soft Sky Blue glow and rounded-2xl for a friendlier feel */
    <div className="group bg-white rounded-2xl shadow-[0_8px_30px_rgb(173,216,230,0.15)] border border-slate-100 p-6 hover:shadow-[0_8px_30px_rgb(173,216,230,0.3)] transition-all duration-300 flex flex-col">
      
      <div className="flex items-start gap-4">
        {/* 2. Avatar: Added a Sky Blue ring to match the flag stripes */}
        <div className="relative">
          <img 
            src={avatar} 
            alt={name} 
            className="w-16 h-16 rounded-full object-cover ring-4 ring-sky-50 border-2 border-white shadow-sm flex-shrink-0" 
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full shadow-sm" title="Online now" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-bold text-slate-900 text-lg tracking-tight truncate">
              {name}, {age}
            </h3>
            {compatibilityScore !== undefined && (
              <span className={`text-[10px] uppercase font-black px-2.5 py-1 rounded-lg border tracking-wider transition-transform group-hover:scale-105 ${scoreStyles}`}>
                {compatibilityScore}% Match
              </span>
            )}
          </div>
          <p className="text-xs font-bold text-sky-500 uppercase tracking-widest">From {origin}</p>
          <p className="text-sm text-slate-500 font-medium">{occupation}</p>
        </div>
      </div>

      {/* Bio: Modern line-height for readability */}
      <p className="text-sm text-slate-600 mt-4 line-clamp-2 flex-1 leading-relaxed italic italic-quote">
        "{bio}"
      </p>

      {/* 3. Info Grid: Cleaned up with Sky Blue icons/accents */}
      <div className="mt-4 grid grid-cols-2 gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
        {[
          { label: 'Budget',   value: `$${budget}/mo`, color: 'text-sky-600' },
          { label: 'Move in',  value: moveInDate, color: 'text-slate-700' },
          { label: 'Schedule', value: schedule, color: 'text-slate-700' },
          { label: 'Transport',value: TRANSPORT_LABELS[transport] || transport, color: 'text-slate-700' },
        ].map(({ label, value, color }) => (
          <div key={label} className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-tighter">{label}</span>
            <span className={`${color} font-bold text-xs`}>{value}</span>
          </div>
        ))}
      </div>

      {/* 4. Tags: Chicago Sky Blue and Slate Neutrals */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {languages.map(lang => (
          <span key={lang} className="text-[10px] font-bold bg-sky-100 text-sky-700 px-2 py-0.5 rounded-md">
            {lang}
          </span>
        ))}
        {lifestyle.slice(0, 3).map(l => (
          <span key={l} className="text-[10px] font-bold bg-white text-slate-500 px-2 py-0.5 rounded-md border border-slate-200">
            {l}
          </span>
        ))}
      </div>

      {/* 5. Connect Button: Victory Red with a nice hover transition */}
      <button className="mt-5 w-full bg-[#ff0000] hover:bg-red-700 text-white text-sm font-black py-3 rounded-xl shadow-lg shadow-red-100 transition-all active:scale-95 uppercase tracking-widest">
        Connect
      </button>
    </div>
  )
}