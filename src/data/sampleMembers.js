// ─────────────────────────────────────────────────────────────────────────────
// Link Business Alliance — Sample Member Data
// All records are fictional demo/preview data only.
// isSample: true marks all records as demo data.
// ─────────────────────────────────────────────────────────────────────────────

// Membership rank for sorting (lower = higher placement)
export const MEMBERSHIP_RANK = {
  'Exclusive Category Partner': 1,
  'Category Member': 2,
  'Visibility Member': 3,
  'Community Member': 4,
};

export const PLACEMENT_ORDER = [
  'Exclusive Category Partner',
  'Category Member',
  'Visibility Member',
  'Community Member',
];

export const CATEGORY_ORDER = [
  'Accounting',
  'Bookkeeping',
  'Finance',
  'Insurance',
  'Legal / Compliance',
  'Payroll',
  'Marketing / Branding',
  'Printing / Branding',
  'Web Services',
  'Technology Services',
  'Business Consulting',
  'Operations Support',
  'Cleaning Services',
  'Construction / Trades',
  'Logistics',
  'Real Estate',
  'Staffing / Recruiting',
  'Property Services',
  'Health / Wellness',
  'Commercial Services',
  'General Business',
  'Other Professional Services',
];

export const SERVICE_TYPES = [
  'All Service Types',
  'Finance / Accounting',
  'Legal / Compliance',
  'Marketing / Branding',
  'Technology',
  'Business Operations',
  'Construction / Trades',
  'Home / Property Services',
  'Health / Wellness',
  'Logistics / Transportation',
  'Staffing / Recruiting',
  'Professional Services',
  'Events / Hospitality',
  'Other',
];

/**
 * Sort members by: membershipRank → category → businessName
 */
export function sortMembers(memberList) {
  return [...memberList].sort((a, b) => {
    const rankA = MEMBERSHIP_RANK[a.membershipLevel] ?? 99;
    const rankB = MEMBERSHIP_RANK[b.membershipLevel] ?? 99;
    if (rankA !== rankB) return rankA - rankB;
    const catA = CATEGORY_ORDER.indexOf(a.category);
    const catB = CATEGORY_ORDER.indexOf(b.category);
    const catCmp = (catA === -1 ? 999 : catA) - (catB === -1 ? 999 : catB);
    if (catCmp !== 0) return catCmp;
    return a.businessName.localeCompare(b.businessName);
  });
}

/**
 * Group sorted members by membershipLevel → category
 * Returns: { [level]: { [category]: member[] } }
 */
export function groupMembersByLevelAndCategory(memberList) {
  const sorted = sortMembers(memberList);
  const result = {};
  PLACEMENT_ORDER.forEach(lvl => {
    const byLevel = sorted.filter(m => m.membershipLevel === lvl);
    if (!byLevel.length) return;
    const cats = {};
    CATEGORY_ORDER.forEach(cat => {
      const byCat = byLevel.filter(m => m.category === cat);
      if (byCat.length) cats[cat] = byCat;
    });
    // Catch categories not in CATEGORY_ORDER
    byLevel.forEach(m => {
      if (!cats[m.category]) {
        cats[m.category] = byLevel.filter(x => x.category === m.category);
      }
    });
    if (Object.keys(cats).length) result[lvl] = cats;
  });
  return result;
}

export const sampleMembers = [
  // ─── EXCLUSIVE CATEGORY PARTNERS ───────────────────────────────────────────
  {
    id: 'sm-001',
    businessName: 'Apex Ledger Group',
    ownerName: 'James Rowan',
    membershipLevel: 'Exclusive Category Partner',
    membershipRank: 1,
    category: 'Accounting',
    chapter: 'The Link Houston',
    city: 'Houston',
    serviceArea: 'Greater Houston Region',
    serviceType: 'Finance / Accounting',
    shortDescription: 'Full-service accounting firm specializing in small business tax preparation, bookkeeping, financial reporting, and CFO advisory services for owner-operated businesses.',
    whoTheyHelp: 'Small business owners, service providers, and solo operators who need reliable accounting, clean books, and tax strategy.',
    bestIntroduction: 'Business owners looking for a long-term accounting partner who understands small business operations.',
    phone: '(example) 281-555-0110',
    email: 'info@apexledgergroup.com',
    website: 'apexledgergroup.com',
    isSample: true,
    featured: true,
    tags: ['accounting', 'tax', 'bookkeeping', 'cfo', 'small business'],
  },
  {
    id: 'sm-002',
    businessName: 'BrightPath Commercial Cleaning',
    ownerName: 'Maria Santos',
    membershipLevel: 'Exclusive Category Partner',
    membershipRank: 1,
    category: 'Cleaning Services',
    chapter: 'The Link Gulf Coast',
    city: 'Houston',
    serviceArea: 'Gulf Coast Region',
    serviceType: 'Home / Property Services',
    shortDescription: 'Commercial cleaning services for offices, retail locations, medical facilities, and multi-tenant properties. Regular contracts and one-time deep cleans available.',
    whoTheyHelp: 'Property managers, office tenants, retail owners, and facility managers who need dependable commercial cleaning on a schedule.',
    bestIntroduction: 'Property managers, office managers, or business owners with a physical location.',
    phone: '(example) 713-555-0142',
    email: 'info@brightpathcleaning.com',
    website: 'brightpathcleaning.com',
    isSample: true,
    featured: true,
    tags: ['cleaning', 'commercial', 'janitorial', 'office', 'property'],
  },
  {
    id: 'sm-003',
    businessName: 'Cornerstone Web Studio',
    ownerName: 'Derek Hall',
    membershipLevel: 'Exclusive Category Partner',
    membershipRank: 1,
    category: 'Web Services',
    chapter: 'The Link Houston',
    city: 'The Woodlands',
    serviceArea: 'Greater Houston / Montgomery County',
    serviceType: 'Technology',
    shortDescription: 'Web design, development, and digital presence services for small businesses. Specializes in service-based business websites, local SEO, and online profile builds.',
    whoTheyHelp: 'Small business owners who need a professional online presence, a redesigned website, or local search visibility.',
    bestIntroduction: 'Service businesses, trades, and professional service providers who need to be found online.',
    phone: '(example) 281-555-0187',
    email: 'hello@cornerstonewebstudio.com',
    website: 'cornerstonewebstudio.com',
    isSample: true,
    featured: false,
    tags: ['web design', 'seo', 'website', 'digital presence', 'technology'],
  },

  // ─── CATEGORY MEMBERS ───────────────────────────────────────────────────────
  {
    id: 'sm-004',
    businessName: 'Bayview Insurance Advisors',
    ownerName: 'Sandra Kim',
    membershipLevel: 'Category Member',
    membershipRank: 2,
    category: 'Insurance',
    chapter: 'The Link Montgomery County',
    city: 'Conroe',
    serviceArea: 'Montgomery County / Greater Houston',
    serviceType: 'Finance / Accounting',
    shortDescription: 'Commercial and personal insurance advisory services for small business owners. Coverage includes general liability, BOP, workers comp, and professional liability.',
    whoTheyHelp: 'Business owners who need insurance guidance, coverage reviews, or are setting up a new business.',
    bestIntroduction: 'Any business owner looking for insurance coverage, a second opinion on current policy, or first-time business insurance setup.',
    phone: '(example) 936-555-0133',
    email: 'info@bayviewinsurance.com',
    website: 'bayviewinsurance.com',
    isSample: true,
    featured: false,
    tags: ['insurance', 'liability', 'workers comp', 'business insurance'],
  },
  {
    id: 'sm-005',
    businessName: 'ClearPath Business Consulting',
    ownerName: 'Anthony Reeves',
    membershipLevel: 'Category Member',
    membershipRank: 2,
    category: 'Business Consulting',
    chapter: 'The Link The Woodlands',
    city: 'The Woodlands',
    serviceArea: 'Greater Houston / North Houston Suburbs',
    serviceType: 'Business Operations',
    shortDescription: 'Business consulting for small to mid-size businesses. Focus areas: operational efficiency, growth planning, process documentation, and owner-level advisory.',
    whoTheyHelp: 'Business owners who feel stuck, disorganized, or ready to grow but unsure where to focus.',
    bestIntroduction: 'Owner-operators who want to build systems, improve operations, or plan for growth.',
    phone: '(example) 281-555-0155',
    email: 'anthony@clearpath-consulting.com',
    website: 'clearpath-consulting.com',
    isSample: true,
    featured: false,
    tags: ['consulting', 'operations', 'growth', 'business strategy', 'systems'],
  },
  {
    id: 'sm-006',
    businessName: 'Gulf Coast Payroll Services',
    ownerName: 'Denise Carter',
    membershipLevel: 'Category Member',
    membershipRank: 2,
    category: 'Payroll',
    chapter: 'The Link Houston',
    city: 'Houston',
    serviceArea: 'Greater Houston Region',
    serviceType: 'Finance / Accounting',
    shortDescription: 'Payroll processing, compliance, and HR administration for small businesses. Handles direct deposit, tax filings, W-2s, and new hire paperwork.',
    whoTheyHelp: 'Business owners with 1–25 employees who want accurate payroll without managing it themselves.',
    bestIntroduction: 'Any business owner who has or is hiring employees and needs payroll handled correctly.',
    phone: '(example) 713-555-0198',
    email: 'info@gulfcoastpayroll.com',
    website: 'gulfcoastpayroll.com',
    isSample: true,
    featured: false,
    tags: ['payroll', 'hr', 'compliance', 'employees', 'w2'],
  },

  // ─── VISIBILITY MEMBERS ─────────────────────────────────────────────────────
  {
    id: 'sm-007',
    businessName: 'ABC Print & Branding',
    ownerName: 'Kevin Torres',
    membershipLevel: 'Visibility Member',
    membershipRank: 3,
    category: 'Printing / Branding',
    chapter: 'The Link Magnolia',
    city: 'Magnolia',
    serviceArea: 'Magnolia / Northwest Houston',
    serviceType: 'Marketing / Branding',
    shortDescription: 'Print services, branded materials, and signage for local businesses. Business cards, banners, branded merch, vehicle magnets, and more.',
    whoTheyHelp: 'Local businesses that need print collateral, event signage, branded materials, or a brand refresh on printed items.',
    bestIntroduction: 'Businesses opening a new location, attending events, or rebranding and needing updated print materials.',
    phone: '(example) 281-555-0171',
    email: 'info@abcprintbranding.com',
    website: 'abcprintbranding.com',
    isSample: true,
    featured: false,
    tags: ['printing', 'branding', 'signage', 'marketing', 'business cards'],
  },
  {
    id: 'sm-008',
    businessName: 'Better Choice Staffing',
    ownerName: 'Lisa Nguyen',
    membershipLevel: 'Visibility Member',
    membershipRank: 3,
    category: 'Staffing / Recruiting',
    chapter: 'The Link Houston',
    city: 'Houston',
    serviceArea: 'Greater Houston Region',
    serviceType: 'Staffing / Recruiting',
    shortDescription: 'Staffing and recruiting services for small and mid-size businesses. Specializes in administrative, customer service, light industrial, and entry-level professional placements.',
    whoTheyHelp: 'Business owners who need to hire but do not have time to recruit, screen, and onboard candidates.',
    bestIntroduction: 'Business owners who are hiring or planning to hire in the next 60–90 days.',
    phone: '(example) 713-555-0119',
    email: 'info@betterchoicestaffing.com',
    website: 'betterchoicestaffing.com',
    isSample: true,
    featured: false,
    tags: ['staffing', 'recruiting', 'hiring', 'employees', 'hr'],
  },
  {
    id: 'sm-009',
    businessName: 'Lone Star Property Services',
    ownerName: 'Brian Walsh',
    membershipLevel: 'Visibility Member',
    membershipRank: 3,
    category: 'Property Services',
    chapter: 'The Link Gulf Coast',
    city: 'Houston',
    serviceArea: 'Gulf Coast / Southeast Houston',
    serviceType: 'Home / Property Services',
    shortDescription: 'Property maintenance and repair services for landlords, property managers, and commercial tenants. Handyman work, light renovation, landscaping coordination.',
    whoTheyHelp: 'Property owners, real estate investors, and commercial tenants who need reliable property maintenance.',
    bestIntroduction: 'Real estate investors, landlords, and property managers with multiple locations or recurring maintenance needs.',
    phone: '(example) 713-555-0164',
    email: 'info@lonestarpropertyservices.com',
    website: 'lonestarpropertyservices.com',
    isSample: true,
    featured: false,
    tags: ['property', 'maintenance', 'handyman', 'real estate', 'landlord'],
  },

  // ─── COMMUNITY MEMBERS ──────────────────────────────────────────────────────
  {
    id: 'sm-010',
    businessName: 'Blue Oak Services',
    ownerName: 'Marcus Bell',
    membershipLevel: 'Community Member',
    membershipRank: 4,
    category: 'General Business',
    chapter: 'The Link Houston',
    city: 'Houston',
    serviceArea: 'Greater Houston',
    serviceType: 'Professional Services',
    shortDescription: 'General business support services for small business owners. Errand services, business coordination, and administrative support for busy owner-operators.',
    whoTheyHelp: 'Small business owners who need extra hands for administrative, coordination, or operational tasks.',
    bestIntroduction: 'Solo operators and small business owners who need flexible support without a full-time hire.',
    phone: '(example) 713-555-0177',
    email: 'info@blueoakservices.com',
    website: 'blueoakservices.com',
    isSample: true,
    featured: false,
    tags: ['admin', 'support', 'virtual assistant', 'coordination', 'operations'],
  },
  {
    id: 'sm-011',
    businessName: 'Main Street Vendors Co.',
    ownerName: 'Patricia Moore',
    membershipLevel: 'Community Member',
    membershipRank: 4,
    category: 'General Business',
    chapter: 'The Link Montgomery County',
    city: 'Conroe',
    serviceArea: 'Montgomery County',
    serviceType: 'Professional Services',
    shortDescription: 'Local vendor services for events, markets, and pop-up opportunities. Connects local vendors with events and helps small businesses participate in community commerce.',
    whoTheyHelp: 'Local vendors, artisans, and small businesses looking for event and market opportunities.',
    bestIntroduction: 'Event organizers, market coordinators, or business owners interested in local vendor opportunities.',
    phone: '(example) 936-555-0149',
    email: 'info@mainstreetvendors.com',
    website: 'mainstreetvendors.com',
    isSample: true,
    featured: false,
    tags: ['vendor', 'events', 'markets', 'local', 'community'],
  },
  {
    id: 'sm-012',
    businessName: 'Northline Support Group',
    ownerName: 'David Chen',
    membershipLevel: 'Community Member',
    membershipRank: 4,
    category: 'General Business',
    chapter: 'The Link The Woodlands',
    city: 'The Woodlands',
    serviceArea: 'North Houston / The Woodlands',
    serviceType: 'Business Operations',
    shortDescription: 'General business support including virtual assistant services, scheduling coordination, and back-office support for small business owners.',
    whoTheyHelp: 'Entrepreneurs and solo operators who need part-time administrative or operations support.',
    bestIntroduction: 'Busy owner-operators who need consistent back-office help without a full-time employee.',
    phone: '(example) 281-555-0183',
    email: 'info@northlinesupport.com',
    website: 'northlinesupport.com',
    isSample: true,
    featured: false,
    tags: ['virtual assistant', 'scheduling', 'admin', 'back office', 'support'],
  },
];

// ─── Derived filter lists ──────────────────────────────────────────────────
export const ALL_CHAPTERS = ['All Chapters', ...Array.from(new Set(sampleMembers.map(m => m.chapter)))];
export const ALL_CITIES = ['All Cities', ...Array.from(new Set(sampleMembers.map(m => m.city))).sort()];
export const ALL_LEVELS = ['All Levels', ...PLACEMENT_ORDER];
export const ALL_CATEGORIES = ['All Categories', ...CATEGORY_ORDER.filter(c => sampleMembers.some(m => m.category === c))];