const TRANSPORT_LABELS = {
  walking: 'Walk',
  bus: 'Bus',
  train: 'Train',
  car: 'Car',
  bike: 'Bike',
}

export default function ApartmentCard({ apartment }) {
  const {
    name, city, state, rent, bedrooms, bathrooms, sqft,
    amenities, transport, description, image, available,
    petFriendly, utilitiesIncluded,
  } = apartment

  const bedroomLabel = bedrooms === 0 ? 'Studio' : `${bedrooms} BD`

  return (
    /* 1. Main Container: Using a soft sky-blue shadow instead of gray */
    <div className="group bg-white rounded-2xl shadow-[0_8px_30px_rgb(173,216,230,0.2)] border border-sky-100 overflow-hidden hover:shadow-[0_8px_30px_rgb(173,216,230,0.4)] transition-all duration-300 flex flex-col">
      
      <div className="relative overflow-hidden">
        {/* Image Zoom Effect */}
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
        />
        
        {/* 2. Price Tag: Chicago Sky Blue background */}
        <div className="absolute top-3 right-3 bg-sky-500 backdrop-blur-md px-3 py-1 rounded-lg text-sm font-bold text-white shadow-lg">
          ${rent.toLocaleString()}/mo
        </div>

        {/* 3. Availability: Chicago "Star" Red */}
        {available === 'Now' && (
          <div className="absolute top-3 left-3 bg-[#ff0000] text-white rounded-md px-2 py-0.5 text-xs font-bold uppercase tracking-wider shadow-sm">
            Available Now
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        {/* Title & Location */}
        <h3 className="font-bold text-slate-800 text-lg leading-tight group-hover:text-sky-600 transition-colors">
          {name}
        </h3>
        <p className="text-sky-500 font-medium text-xs uppercase tracking-widest mt-1">
          {city}, {state}
        </p>

        {/* Specs with Sky Blue dividers */}
        <div className="flex gap-3 mt-3 text-sm font-semibold text-slate-500">
          <span>{bedroomLabel}</span>
          <span className="text-sky-200">|</span>
          <span>{bathrooms} BA</span>
          <span className="text-sky-200">|</span>
          <span>{sqft} sqft</span>
        </div>

        <p className="text-slate-500 text-sm mt-3 line-clamp-2 flex-1 leading-relaxed">
          {description}
        </p>

        {/* 4. Feature Tags: Soft Red and Blue tints */}
        <div className="mt-4 flex flex-wrap gap-2">
          {utilitiesIncluded && (
            <span className="text-[10px] uppercase font-bold bg-sky-50 text-sky-600 px-2 py-1 rounded border border-sky-100">
              Free Utilities
            </span>
          )}
          {petFriendly && (
            <span className="text-[10px] uppercase font-bold bg-red-50 text-[#ff0000] px-2 py-1 rounded border border-red-100">
              Pet Friendly
            </span>
          )}
        </div>

        {/* 5. Transit Section */}
        <div className="mt-4 bg-slate-50 p-2 rounded-xl">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-1 ml-1">Transit Score</p>
          <div className="flex flex-wrap gap-1">
            {transport.map(t => (
              <span key={t} className="text-xs bg-white text-sky-700 font-bold px-2 py-0.5 rounded-lg shadow-sm border border-sky-50">
                {TRANSPORT_LABELS[t] || t}
              </span>
            ))}
          </div>
        </div>

        {/* 6. Action Button: Victory Red with Sky Blue shadow */}
        <button className="mt-5 w-full bg-[#ff0000] hover:bg-red-700 text-white text-sm font-bold py-3 rounded-xl shadow-lg shadow-red-100 transition-all active:scale-95">
          View Details
        </button>
      </div>
    </div>
  )
}