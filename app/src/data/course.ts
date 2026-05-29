export interface WeekMeta {
  n: number
  slug: string
  kicker: string
  title: string
  blurb: string
  minutes: number
  available: boolean
  objectives: string[]
  /** Section id each objective scrolls to, parallel to `objectives`. */
  objectiveAnchors?: string[]
}

export const weeks: WeekMeta[] = [
  {
    n: 1,
    slug: 'week-01',
    kicker: 'Books & the trial balance',
    title: 'The source code of every number',
    blurb:
      'Debits, credits and the five families of accounts. Read a real trial balance line by line, and learn the ten mistakes that quietly cost money at tax time.',
    minutes: 90,
    available: true,
    objectives: [
      'The five families every account belongs to, and how to spot one',
      'What debits and credits actually are — with the DEAD CLIC mnemonic',
      'The accounting equation, and why it always balances',
      'Cash basis vs accruals, and why a Ltd must use accruals',
      'The four reports you live in: P&L, Balance Sheet, Trial Balance, General Ledger',
      "How to read Acorn Studio's trial balance at 31 March 2026",
      'The ten common bookkeeping mistakes, and how to catch each one',
    ],
    objectiveAnchors: [
      'families',
      'debits-credits',
      'equation',
      'cash-vs-accruals',
      'trial-balance',
      'trial-balance',
      'mistakes',
    ],
  },
  {
    n: 2,
    slug: 'week-02',
    kicker: 'Micro-entity accounts',
    title: 'From trial balance to statutory accounts',
    blurb:
      'The four company size classes, what FRS 105 accounts look like, and the seven year-end adjustments that turn a trial balance into a set of accounts you can file.',
    minutes: 90,
    available: true,
    objectives: [
      'Why every Ltd must prepare and file statutory accounts',
      'The four size classes and which one a tiny Ltd lands in',
      'What FRS 105 is, and how it differs from FRS 102 Section 1A',
      'What a micro-entity balance sheet and P&L actually look like',
      'The seven year-end adjustments, step by step',
      'What goes to Companies House vs HMRC',
      'How to sign off and approve the accounts properly',
    ],
    objectiveAnchors: [
      'why',
      'sizes',
      'frs105',
      'statements',
      'adjustments',
      'what-goes-where',
      'sign-off',
    ],
  },
  {
    n: 3,
    slug: 'week-03',
    kicker: 'Tax adjustments',
    title: 'From accounting profit to taxable profit',
    blurb:
      'Disallowables, depreciation vs capital allowances, and marginal relief. Build Acorn’s full corporation-tax computation with a live calculator.',
    minutes: 90,
    available: true,
    objectives: [
      'Why accounting profit is never the same as taxable profit',
      'The standard layout of a UK corporation tax computation',
      'Which expenses are disallowable, and how to add them back',
      'Depreciation vs capital allowances: how AIA and full expensing work',
      'The 19% small profits rate, the 25% main rate, and marginal relief between',
      'How associated companies and short periods divide the thresholds',
      'How the computation maps box by box to the CT600',
    ],
    objectiveAnchors: [
      'insight',
      'build',
      'disallowables',
      'capital-allowances',
      'rates',
      'associated',
      'ct600-map',
    ],
  },
  {
    n: 4,
    slug: 'week-04',
    kicker: 'The CT600 & filing',
    title: 'Filing it all with HMRC',
    blurb:
      'The CT600 box by box, iXBRL, the Government Gateway, budget software and deadlines. Drag your trial balance onto the right CT600 boxes.',
    minutes: 90,
    available: true,
    objectives: [
      'Exactly which filings a small Ltd makes, the deadlines, and where',
      'What the CT600 looks like box by box for a tiny company',
      'What iXBRL is, what gets tagged, and why HMRC requires it',
      'Setting up the Government Gateway and enrolling for Corporation Tax',
      'Which budget filing software to use, and the end-to-end workflow',
      'How to pay the corporation tax and file accounts at Companies House',
      'The late-filing penalty regime as it stands from 1 April 2026',
    ],
    objectiveAnchors: [
      'filings',
      'ct600',
      'ixbrl',
      'gateway',
      'software',
      'paying',
      'penalties',
    ],
  },
  {
    n: 5,
    slug: 'week-05',
    kicker: 'A messier year',
    title: 'VAT, payroll, the DLA, dividends & R&D',
    blurb:
      'A second year with real-world complications: VAT registration, an employee, an overdrawn director’s loan and s.455, dividends, and the R&D question.',
    minutes: 120,
    available: true,
    objectives: [
      'How to run a Xero file health check before preparing accounts',
      'How VAT registration, payroll and pensions show up in the books',
      'Spotting and fixing the most common DIY bookkeeping mistakes',
      "Handling an overdrawn director's loan and the s.455 charge",
      'Applying marginal relief on real-world profits',
      'The merged R&D scheme test, and how to rule it out cleanly',
      'How the CT600 and CT600A look for a typical second year',
    ],
    objectiveAnchors: [
      'health-check',
      'vat',
      'key-fixes',
      's455',
      'computation',
      'rnd',
      'ct600a',
    ],
  },
]

export const weekBySlug: Record<string, WeekMeta> = Object.fromEntries(
  weeks.map((w) => [w.slug, w]),
)
