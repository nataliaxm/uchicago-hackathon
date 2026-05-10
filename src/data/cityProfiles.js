export const ETHNICITIES = [
  { value: 'Latino / Hispanic',           label: 'Latino / Hispanic' },
  { value: 'East Asian',                  label: 'East Asian (Chinese, Korean, Vietnamese...)' },
  { value: 'South Asian',                 label: 'South Asian (Indian, Pakistani, Bangladeshi...)' },
  { value: 'Middle Eastern / North African', label: 'Middle Eastern / North African' },
  { value: 'East African',                label: 'East African (Ethiopian, Somali, Eritrean...)' },
  { value: 'West/Central African',        label: 'West / Central African (Nigerian, Ghanaian...)' },
  { value: 'Caribbean',                   label: 'Caribbean (Jamaican, Haitian, Dominican...)' },
  { value: 'Southeast Asian',             label: 'Southeast Asian (Filipino, Hmong, Thai...)' },
  { value: 'Eastern European',            label: 'Eastern European (Polish, Ukrainian, Romanian...)' },
]

export const INDUSTRIES = [
  { value: 'Healthcare & Nursing',        label: 'Healthcare & Nursing' },
  { value: 'Technology & Software',       label: 'Technology & Software' },
  { value: 'Construction & Trades',       label: 'Construction & Skilled Trades' },
  { value: 'Food Service & Restaurant',   label: 'Food Service & Restaurant' },
  { value: 'Education & Teaching',        label: 'Education & Teaching' },
  { value: 'Transportation & Logistics',  label: 'Transportation & Logistics' },
  { value: 'Manufacturing & Warehouse',   label: 'Manufacturing & Warehouse' },
  { value: 'Retail & Sales',              label: 'Retail & Sales' },
  { value: 'Finance & Accounting',        label: 'Finance & Accounting' },
  { value: 'Hospitality & Tourism',       label: 'Hospitality & Tourism' },
  { value: 'Domestic & Childcare',        label: 'Domestic Work & Childcare' },
]

export const CITY_LABELS = {
  Chicago:       'Chicago, IL',
  Houston:       'Houston, TX',
  Dallas:        'Dallas, TX',
  Atlanta:       'Atlanta, GA',
  'New York':    'New York, NY',
  'Los Angeles': 'Los Angeles, CA',
  Minneapolis:   'Minneapolis, MN',
  'San Jose':    'San Jose, CA',
  Miami:         'Miami, FL',
}

const CITY_PROFILES = {
  Chicago: {
    community: {
      'Latino / Hispanic':           'Pilsen and Little Village — one of the largest Mexican communities in the US, plus strong Puerto Rican and Guatemalan neighborhoods.',
      'East Asian':                  'Historic Chinatown on the South Side and a growing Korean community on the North Side.',
      'South Asian':                 '"Little India" on Devon Avenue with grocery stores, restaurants, mosques, and temples serving Indian and Pakistani communities.',
      'Eastern European':            'Ukrainian Village and long-established Polish communities on the northwest side.',
      'East African':                'Uptown neighborhood has a growing Ethiopian and Eritrean community.',
      'Caribbean':                   'South Shore and Bronzeville neighborhoods have Caribbean communities.',
      'West/Central African':        'South Side and south suburbs have growing Nigerian and Ghanaian communities.',
    },
    industry: {
      'Healthcare & Nursing':        'Northwestern Memorial, Rush, Advocate, and Cook County Health are always hiring. Strong nursing demand across the metro.',
      'Finance & Accounting':        'Home to CME Group, Northern Trust, Morningstar, and major insurance firms.',
      'Transportation & Logistics':  "Nation's largest rail hub and O'Hare Airport create constant, year-round demand.",
      'Manufacturing & Warehouse':   'Strong manufacturing base plus Amazon, FedEx, and UPS logistics hubs in the suburbs.',
      'Food Service & Restaurant':   'World-class restaurant scene with demand across every neighborhood.',
      'Construction & Trades':       'Active development citywide and in the northwest suburbs.',
      'Education & Teaching':        'Chicago Public Schools is the third-largest district in the country.',
    },
  },
  Houston: {
    community: {
      'Latino / Hispanic':           'East End and Gulfton — one of the largest Latino populations of any US city, with strong Mexican and Central American communities.',
      'Southeast Asian':             '"Little Saigon" in Midtown/Southwest Houston — the largest Vietnamese community outside California.',
      'South Asian':                 'Hillcroft corridor is a thriving hub of Indian, Pakistani, and Bangladeshi businesses and families.',
      'East African':                'Southwest Houston has a well-established Somali and Ethiopian community.',
      'West/Central African':        'Fort Bend County has a large and growing Nigerian and Ghanaian community.',
      'Middle Eastern / North African': 'Large Arab and Iranian communities in southwest Houston.',
    },
    industry: {
      'Healthcare & Nursing':        'Texas Medical Center — the largest medical complex in the world. Constantly hiring across all healthcare roles.',
      'Construction & Trades':       'Hurricane recovery and continuous population growth drive massive construction demand.',
      'Transportation & Logistics':  'Port of Houston is among the busiest in the US. Large warehousing sector.',
      'Manufacturing & Warehouse':   'Energy sector and petrochemical plants provide steady employment.',
      'Food Service & Restaurant':   'One of the most diverse food cities in the US — high demand across all levels.',
      'Retail & Sales':              'Large consumer market driven by population growth and no state income tax.',
    },
  },
  Dallas: {
    community: {
      'Latino / Hispanic':           'Oak Cliff and Irving have large Mexican and Central American communities.',
      'South Asian':                 'Richardson and Plano suburbs are home to a major Indian and Pakistani community.',
      'West/Central African':        'DeSoto and Carrollton have growing Nigerian and Ghanaian communities.',
      'East Asian':                  'Richardson, Carrollton, and Garland have sizable Vietnamese and Chinese communities.',
    },
    industry: {
      'Technology & Software':       'Fast-growing tech sector — AT&T, Texas Instruments, and a strong startup scene in Uptown.',
      'Finance & Accounting':        'Major banking and insurance hub with many corporate headquarters.',
      'Construction & Trades':       'One of the fastest-growing metros in the US — among the highest construction demand nationwide.',
      'Retail & Sales':              'Large retail industry with many corporate retail HQs.',
      'Transportation & Logistics':  'FedEx regional hub and major trucking corridors.',
      'Healthcare & Nursing':        'UT Southwestern Medical Center and a large, expanding hospital network.',
    },
  },
  Atlanta: {
    community: {
      'West/Central African':        'One of the largest Nigerian, Ghanaian, and Cameroonian communities in the US.',
      'East African':                'Clarkston — known as "the most diverse square mile in America" — with an established Ethiopian and Somali community.',
      'Latino / Hispanic':           'Buford Highway corridor in Chamblee — large Mexican, Guatemalan, and Colombian communities.',
      'Caribbean':                   'South DeKalb has a growing Jamaican and Haitian community.',
    },
    industry: {
      'Transportation & Logistics':  "World's busiest airport (Hartsfield-Jackson). UPS and Delta HQs. Massive logistics sector.",
      'Healthcare & Nursing':        'Emory University Hospital, Grady Health System, and a large regional hospital network.',
      'Technology & Software':       'Fast-growing tech hub — Microsoft, Google, and Mailchimp have major Atlanta offices.',
      'Construction & Trades':       'Rapid development throughout metro Atlanta — high demand across all trades.',
      'Food Service & Restaurant':   'Booming restaurant scene with steady workforce demand.',
      'Hospitality & Tourism':       'Major convention city with a large hospitality workforce.',
    },
  },
  'New York': {
    community: {
      'Latino / Hispanic':           'Jackson Heights (Queens) and the South Bronx — enormous Dominican, Puerto Rican, Mexican, and Ecuadorian communities.',
      'East Asian':                  'Flushing (Queens) — one of the largest Chinese and Korean communities outside Asia. Plus Manhattan Chinatown.',
      'South Asian':                 'Jackson Heights — "Little India." One of the most concentrated South Asian communities in the US.',
      'Caribbean':                   'Crown Heights and Flatbush (Brooklyn) — large Jamaican, Trinidadian, and Haitian communities.',
      'West/Central African':        'The Bronx and Harlem have established Senegalese, Nigerian, and West African communities.',
      'Middle Eastern / North African': 'Bay Ridge (Brooklyn) has a large Arab and Yemeni community.',
      'Eastern European':            'Brighton Beach (Brooklyn) — "Little Odessa" — large Russian and Ukrainian community.',
      'Southeast Asian':             'Queens has Filipino and Bangladeshi communities across several neighborhoods.',
    },
    industry: {
      'Healthcare & Nursing':        'NYC Health + Hospitals is the largest public health system in the US. Permanent high demand.',
      'Finance & Accounting':        'Wall Street — the global center of finance. Unmatched opportunities at every level.',
      'Technology & Software':       'Second-largest US tech hub. Huge demand across all tech roles.',
      'Food Service & Restaurant':   'Tens of thousands of restaurants — permanent, year-round demand.',
      'Construction & Trades':       'Constant construction across all five boroughs.',
      'Education & Teaching':        'NYC DOE is the largest school district in the country.',
      'Hospitality & Tourism':       '60+ million visitors per year — a massive hospitality workforce.',
      'Domestic & Childcare':        'Very high demand for home health aides, nannies, and domestic workers.',
    },
  },
  'Los Angeles': {
    community: {
      'Latino / Hispanic':           'East LA — the historic center of the largest Mexican-American community in the US.',
      'East Asian':                  'Koreatown, Chinatown, Little Tokyo, Alhambra, and Monterey Park.',
      'Southeast Asian':             'Little Saigon in Westminster (30 min from LA) and a Filipino community in Carson.',
      'Middle Eastern / North African': '"Tehrangeles" in Westwood — one of the largest Iranian communities outside Iran.',
      'West/Central African':        'Inglewood and Leimert Park have growing African communities.',
    },
    industry: {
      'Healthcare & Nursing':        'Cedars-Sinai, Kaiser, and a vast network of hospitals and clinics across the metro.',
      'Technology & Software':       '"Silicon Beach" in Santa Monica, Culver City, and Playa Vista.',
      'Food Service & Restaurant':   'One of the best food cities in the world — permanent high demand.',
      'Hospitality & Tourism':       'Hollywood, theme parks, and beaches drive a massive hospitality workforce.',
      'Construction & Trades':       'High demand in a land-constrained, continuously growing market.',
      'Transportation & Logistics':  'Port of LA/Long Beach — the busiest port in the Western Hemisphere.',
    },
  },
  Minneapolis: {
    community: {
      'East African':                'Cedar-Riverside — the largest Somali community in the US. Also a large Ethiopian community in the area.',
      'Southeast Asian':             'St. Paul has one of the largest Hmong communities in the United States.',
      'West/Central African':        'Growing Ethiopian, Liberian, and Nigerian communities.',
      'Latino / Hispanic':           'West Side of St. Paul has an established Mexican and Puerto Rican community.',
    },
    industry: {
      'Healthcare & Nursing':        'Mayo Clinic nearby; Allina Health and M Health Fairview systems are always hiring.',
      'Manufacturing & Warehouse':   'Strong manufacturing sector, including medical devices (largest per capita in the US).',
      'Transportation & Logistics':  'Major distribution hub for the upper Midwest. Large Amazon operations.',
      'Finance & Accounting':        'US Bank, Target, and several large corporate headquarters.',
      'Retail & Sales':              "Target HQ. Healthy statewide retail market.",
    },
  },
  'San Jose': {
    community: {
      'East Asian':                  'Large Chinese, Korean, and Japanese communities throughout the city.',
      'Southeast Asian':             '"Little Saigon" in East San Jose — one of the largest Vietnamese communities in the US.',
      'South Asian':                 'Large Indian community, especially in nearby Fremont, Sunnyvale, and Santa Clara.',
      'Latino / Hispanic':           'East San Jose has a large Mexican and Central American community.',
    },
    industry: {
      'Technology & Software':       'The heart of Silicon Valley — Apple, Google, Meta, Nvidia, and thousands of startups.',
      'Manufacturing & Warehouse':   'Tech hardware manufacturing and large logistics operations.',
      'Healthcare & Nursing':        'Valley Medical Center and Kaiser serve a large and growing population.',
      'Construction & Trades':       'Extremely high demand driven by a severe, ongoing housing shortage.',
    },
  },
  Miami: {
    community: {
      'Latino / Hispanic':           'Little Havana — the largest Cuban community outside Cuba. Also large Venezuelan, Colombian, and Nicaraguan communities.',
      'Caribbean':                   'Little Haiti has a large Haitian community. Jamaican community in Miami Gardens.',
    },
    industry: {
      'Hospitality & Tourism':       'Major tourist destination — beaches, cruise industry, Art Basel. Very high workforce demand.',
      'Healthcare & Nursing':        'Jackson Health System and a large regional hospital network.',
      'Finance & Accounting':        'International banking hub with many Latin American corporate offices.',
      'Transportation & Logistics':  'PortMiami — major cargo hub. Miami International Airport.',
      'Construction & Trades':       'One of the fastest-growing metros in the country — constant demand.',
      'Food Service & Restaurant':   'World-class dining with a large and permanent restaurant workforce.',
    },
  },
}

const DEFAULT_RECOMMENDATIONS = [
  { city: 'Houston',    communityNote: null, industryNote: 'Fastest-growing US job market with no state income tax. Lower cost of living than other major cities.' },
  { city: 'Dallas',     communityNote: null, industryNote: 'High demand for workers across all skill levels. Strong growth in tech, construction, and services.' },
  { city: 'Atlanta',    communityNote: null, industryNote: 'Major corporate and logistics hub. More affordable than coastal cities with a rapidly growing economy.' },
  { city: 'Chicago',    communityNote: null, industryNote: 'Diverse economy from manufacturing to finance. Large, long-established immigrant communities.' },
  { city: 'Minneapolis',communityNote: null, industryNote: 'Among the highest employment rates in the US. Known for welcoming newcomer communities.' },
]

export function getRecommendations(ethnicity, industry) {
  if (!ethnicity && !industry) return DEFAULT_RECOMMENDATIONS

  const results = Object.entries(CITY_PROFILES)
    .map(([city, profile]) => {
      const communityNote = ethnicity ? (profile.community[ethnicity] ?? null) : null
      const industryNote  = industry  ? (profile.industry[industry]  ?? null) : null
      const score = (communityNote ? 2 : 0) + (industryNote ? 2 : 0)
      return { city, communityNote, industryNote, score }
    })
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)

  return results.length > 0 ? results : DEFAULT_RECOMMENDATIONS
}
