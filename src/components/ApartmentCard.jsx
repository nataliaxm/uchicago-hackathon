const TRANSPORT_ICONS = {
  walking: '🚶',
  bus: '🚌',
  train: '🚆',
  car: '🚗',
  bike: '🚲',
}

export default function ApartmentCard({ apartment }) {
  const {
    name, city, state, rent, bedrooms, bathrooms, sqft,
    amenities, transport, description, image, available,
    petFriendly, utilitiesIncluded,
  } = apartment

  const bedroomLabel = bedrooms === 0 ? 'Studio' : `${bedrooms} BD`

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 text-sm font-semibold text-blue-700 shadow">
          ${rent.toLocaleString()}/mo
        </div>
        {available === 'Now' && (
          <div className="absolute top-3 left-3 bg-green-500 text-white rounded-full px-2 py-0.5 text-xs font-medium">
            Available Now
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-slate-800 text-lg leading-tight">{name}</h3>
        <p className="text-slate-500 text-sm">{city}, {state}</p>

        <div className="flex gap-3 mt-2 text-sm text-slate-600">
          <span>{bedroomLabel}</span>
          <span>·</span>
          <span>{bathrooms} BA</span>
          <span>·</span>
          <span>{sqft} sqft</span>
        </div>

        <p className="text-slate-600 text-sm mt-2 line-clamp-2 flex-1">{description}</p>

        <div className="mt-3 flex flex-wrap gap-1">
          {utilitiesIncluded && (
            <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full border border-green-200">
              Utilities Included
            </span>
          )}
          {petFriendly && (
            <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full border border-amber-200">
              Pet Friendly
            </span>
          )}
          {available !== 'Now' && (
            <span className="text-xs bg-slate-50 text-slate-600 px-2 py-0.5 rounded-full border border-slate-200">
              Available {available}
            </span>
          )}
        </div>

        <div className="mt-3">
          <p className="text-xs text-slate-400 mb-1">Transit nearby</p>
          <div className="flex gap-1.5">
            {transport.map(t => (
              <span key={t} title={t} className="text-lg">{TRANSPORT_ICONS[t]}</span>
            ))}
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-slate-100">
          <div className="flex flex-wrap gap-1">
            {amenities.slice(0, 3).map(a => (
              <span key={a} className="text-xs bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-200">
                {a}
              </span>
            ))}
          </div>
        </div>

        <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-lg transition-colors">
          View Details
        </button>
      </div>
    </div>
  )
}
