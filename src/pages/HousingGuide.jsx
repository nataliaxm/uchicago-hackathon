import { useState } from 'react'
import { Link } from 'react-router-dom'

const SECTIONS = [
  {
    id: 'process',
    title: 'How Renting Works in the US',
    intro: 'Renting in the US follows a standard process. Knowing what to expect makes it much less overwhelming.',
    items: [
      {
        heading: '1. Search for listings',
        body: 'Browse listings online (Zillow, Apartments.com, Craigslist) or through local community boards. Landlords often list 30–60 days before the unit is available.',
      },
      {
        heading: '2. Schedule a viewing',
        body: 'Always visit in person or via video call before signing anything. A landlord who refuses to show the unit is a red flag.',
      },
      {
        heading: '3. Submit a rental application',
        body: 'You will fill out a form with your name, income, employment, and rental history. The landlord will run a background and credit check.',
      },
      {
        heading: '4. Pay move-in costs',
        body: 'If approved, you will typically pay the first month\'s rent, last month\'s rent, and a security deposit — all at once before getting your keys.',
      },
      {
        heading: '5. Sign the lease',
        body: 'Read every line before signing. The lease is a legal contract. If you do not understand something, ask or use our AI assistant to explain it.',
      },
    ],
  },
  {
    id: 'documents',
    title: 'Documents You Will Need',
    intro: 'Landlords use these to verify your identity and ability to pay. Many newcomers worry about not having all of them — there are alternatives.',
    items: [
      {
        heading: 'Government-issued ID',
        body: 'A passport is universally accepted. A driver\'s license or state ID also works. Your home country passport is valid.',
      },
      {
        heading: 'Proof of income',
        body: 'Recent pay stubs (last 2–3), an employment offer letter, or bank statements. Self-employed individuals can use bank statements or a letter from an accountant.',
      },
      {
        heading: 'Social Security Number (SSN)',
        body: 'Required for credit checks, but not all landlords require it. If you do not have one, an ITIN (Individual Taxpayer Identification Number) is sometimes accepted. You can also offer a larger security deposit or prepay several months\' rent.',
      },
      {
        heading: 'Rental history or references',
        body: 'Contact info for a previous landlord, or a personal/employer reference if you have no US rental history. A letter of recommendation from an employer or community organization helps.',
      },
      {
        heading: 'No credit score? Options exist.',
        body: 'Offer 2–3 months\' rent upfront, bring a US-based co-signer or guarantor, show strong bank savings, or look for landlords who advertise "no credit check required."',
      },
    ],
  },
  {
    id: 'costs',
    title: 'Understanding Costs',
    intro: 'The monthly rent is only part of what you will pay. Budget for these additional costs so you are not caught off guard.',
    items: [
      {
        heading: 'Security deposit',
        body: 'Usually 1–2 months\' rent, held by the landlord and returned when you move out — minus any damage beyond normal wear and tear. Laws vary by state on how quickly landlords must return it.',
      },
      {
        heading: 'Utilities',
        body: 'Electricity, gas, water, and internet are usually paid separately unless the listing says "utilities included." Budget an extra $100–$250/month depending on climate and apartment size.',
      },
      {
        heading: 'Renter\'s insurance',
        body: 'Many landlords require it. It protects your belongings and covers liability. Typically costs $10–$20/month — well worth it.',
      },
      {
        heading: 'Application fees',
        body: 'Landlords often charge $25–$75 per applicant to cover background and credit checks. This is usually non-refundable.',
      },
      {
        heading: 'The 30% rule',
        body: 'A common US guideline: spend no more than 30% of your gross monthly income on rent. Landlords often require your income to be 2.5–3x the monthly rent.',
      },
    ],
  },
  {
    id: 'lease',
    title: 'Understanding Your Lease',
    intro: 'A lease is a binding legal agreement. These are the key things to look for before you sign.',
    items: [
      {
        heading: 'Lease term',
        body: 'Most leases are 12 months. Month-to-month leases offer more flexibility but usually cost more. Breaking a lease early often means paying 1–2 months\' rent as a penalty.',
      },
      {
        heading: 'Rent increase terms',
        body: 'Some leases lock in your rent for the full term. Others allow increases with 30–60 days\' notice. Check what yours says.',
      },
      {
        heading: 'Guest and subletting policies',
        body: 'Some leases restrict long-term guests or subletting (renting to someone else). Violating this can get you evicted.',
      },
      {
        heading: 'Maintenance responsibilities',
        body: 'The lease should say who is responsible for what repairs. In the US, landlords are legally required to maintain habitable conditions — working heat, plumbing, and no pest infestations.',
      },
      {
        heading: 'Notice to vacate',
        body: 'Usually 30–60 days written notice is required before you move out at the end of a lease, or the lease auto-renews.',
      },
    ],
  },
  {
    id: 'rights',
    title: 'Your Rights as a Tenant',
    intro: 'US law protects renters regardless of immigration status. You have rights even without a green card or citizenship.',
    items: [
      {
        heading: 'Fair Housing Act',
        body: 'Landlords cannot legally reject you because of race, national origin, religion, sex, disability, or family status. If this happens, you can file a complaint with the US Department of Housing and Urban Development (HUD).',
      },
      {
        heading: 'Right to a habitable home',
        body: 'Your landlord must keep the unit safe and livable: working heat, no mold, functioning plumbing. If they refuse to fix serious issues, you may be able to withhold rent or break the lease — laws vary by state.',
      },
      {
        heading: 'Protection from illegal eviction',
        body: 'A landlord cannot change your locks, remove your belongings, or shut off utilities to force you out. They must go through a formal court eviction process, which takes time and gives you the chance to respond.',
      },
      {
        heading: 'Privacy rights',
        body: 'In most states, landlords must give 24–48 hours\' notice before entering your unit except in emergencies.',
      },
      {
        heading: 'Immigration status and housing',
        body: 'Your immigration status cannot be used against you in a housing complaint. Landlords who threaten to report tenants to immigration authorities as a form of retaliation are violating the law.',
      },
    ],
  },
  {
    id: 'assistance',
    title: 'Housing Assistance Programs',
    intro: 'If you are on a tight budget, government and nonprofit programs may help cover costs.',
    items: [
      {
        heading: 'Section 8 / Housing Choice Voucher',
        body: 'A federal program that subsidizes rent for low-income households. Eligibility depends on income, family size, and immigration status (lawful permanent residents and certain visa holders qualify). Waitlists can be long — apply as early as possible.',
      },
      {
        heading: 'Local housing authorities',
        body: 'Every city and county has a public housing authority. They manage affordable housing units and vouchers. Search "[your city] housing authority" to find yours.',
      },
      {
        heading: 'Refugee resettlement agencies',
        body: 'Organizations like the IRC (International Rescue Committee), Catholic Charities, and local refugee offices help newly arrived refugees find initial housing and navigate the process.',
      },
      {
        heading: 'Nonprofit rental assistance',
        body: 'Many cities have nonprofits that provide one-time rental assistance or emergency funds. Community Action Agencies and local immigrant services organizations are good starting points.',
      },
    ],
  },
  {
    id: 'scams',
    title: 'Common Rental Scams to Avoid',
    intro: 'Newcomers are frequently targeted by rental scams. If something feels wrong, trust your instincts.',
    items: [
      {
        heading: 'Rent is far below market rate',
        body: 'If a 2-bedroom in Chicago is listed for $400/month, it is almost certainly a scam. Compare to similar listings in the area.',
      },
      {
        heading: 'Landlord asks you to wire money or pay in cash',
        body: 'Never send money via wire transfer, Zelle, Cash App, or Western Union to someone you have not met and whose property you have not visited. Use checks or money orders with a receipt.',
      },
      {
        heading: 'You cannot view the apartment',
        body: 'Scammers often claim to be overseas or unavailable for showings. Insist on an in-person or live video tour before paying anything.',
      },
      {
        heading: 'Pressure to sign or pay immediately',
        body: 'Legitimate landlords give you time to review a lease. If you are told the unit will be gone unless you pay a deposit right now, walk away.',
      },
      {
        heading: 'The listing appears on multiple sites with different contact info',
        body: 'Scammers copy real listings and post them under fake contact info. Reverse image search the photos and verify the address independently.',
      },
    ],
  },
]

function Section({ section }) {
  const [expanded, setExpanded] = useState(null)

  return (
    <div id={section.id} className="scroll-mt-20">
      <h2 className="text-xl font-bold text-slate-800 mb-2">{section.title}</h2>
      <p className="text-slate-500 text-sm mb-4">{section.intro}</p>
      <div className="space-y-2">
        {section.items.map((item, i) => (
          <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="w-full flex items-center justify-between px-4 py-3 text-left bg-white hover:bg-slate-50 transition-colors"
            >
              <span className="font-medium text-slate-700 text-sm">{item.heading}</span>
              <span className="text-slate-400 text-sm ml-4 flex-shrink-0">
                {expanded === i ? '−' : '+'}
              </span>
            </button>
            {expanded === i && (
              <div className="px-4 pb-4 pt-1 bg-white border-t border-slate-100">
                <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function HousingGuide() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">US Housing Guide</h1>
        <p className="text-slate-500 text-base">
          A plain-language guide to renting in the United States — written for newcomers and immigrants.
        </p>
      </div>

      {/* Jump-to nav */}
      <div className="mb-10 p-4 bg-white border border-slate-200 rounded-xl">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">Jump to</p>
        <div className="flex flex-wrap gap-2">
          {SECTIONS.map(s => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="text-xs bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-700 border border-slate-200 hover:border-blue-200 px-3 py-1.5 rounded-full transition-colors"
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-10">
        {SECTIONS.map(section => (
          <Section key={section.id} section={section} />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
        <h3 className="text-slate-800 font-semibold mb-2">Still have questions?</h3>
        <p className="text-slate-500 text-sm mb-4">
          Our AI assistant can answer specific questions about your situation — leases, tenant rights, neighborhoods, and more.
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
