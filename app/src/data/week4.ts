// ---------------------------------------------------------------------------
// Week 4 — Filing the CT600 and the accounts.
// Canonical figures for Acorn Studio Ltd, year ended 31 March 2026.
// Pure data only; the interactives stay dumb and read from here.
// ---------------------------------------------------------------------------

// --- The CT600 box by box --------------------------------------------------

export interface CT600Box {
  /** Box number, as shown on the form. */
  box: number
  /** What the box captures. */
  label: string
  /** What Acorn enters, formatted for display. */
  display: string
}

/** The fifteen-or-so meaningful boxes Acorn completes, grouped by section. */
export interface CT600Group {
  section: string
  boxes: CT600Box[]
}

export const ct600Boxes: CT600Group[] = [
  {
    section: 'Company information',
    boxes: [
      { box: 1, label: 'Company name', display: 'Acorn Studio Ltd' },
      { box: 2, label: 'Company registration number', display: '14123456' },
      { box: 3, label: 'Tax reference (UTR)', display: '1234567890' },
      { box: 4, label: 'Type of company', display: '0' },
      { box: 30, label: 'Accounting period start', display: '01/04/2025' },
      { box: 35, label: 'Accounting period end', display: '31/03/2026' },
    ],
  },
  {
    section: 'About this return',
    boxes: [
      { box: 40, label: 'Type of return', display: '1' },
      { box: 80, label: 'Accounts attached', display: 'Tick' },
      { box: 85, label: 'Computation attached', display: 'Tick' },
      { box: 95, label: 'Only return for the period', display: 'Tick' },
    ],
  },
  {
    section: 'Turnover and income',
    boxes: [
      { box: 145, label: 'Total turnover from trade', display: '74,800' },
      { box: 155, label: 'Trading and professional profits (per accounts)', display: '47,365' },
      { box: 165, label: 'Net trading profits (after CAs and disallowables)', display: '46,478' },
      { box: 170, label: 'Bank or other interest received', display: '0' },
    ],
  },
  {
    section: 'Profits chargeable',
    boxes: [
      { box: 235, label: 'Total profits before deductions and reliefs', display: '46,478' },
      { box: 305, label: 'Profits chargeable to corporation tax', display: '46,478' },
    ],
  },
  {
    section: 'Tax calculation',
    boxes: [
      { box: 315, label: 'Number of days in this period', display: '365' },
      { box: 330, label: 'Profits in FY2025', display: '46,478' },
      { box: 335, label: 'Financial year', display: '2025' },
      { box: 345, label: 'Tax rate FY2025', display: '19%' },
      { box: 380, label: 'Corporation tax (FY2025)', display: '8,831' },
      { box: 410, label: 'Marginal relief', display: '0' },
      { box: 430, label: 'Corporation tax for the period', display: '8,831' },
      { box: 440, label: 'Net corporation tax', display: '8,831' },
    ],
  },
  {
    section: 'Tax payable',
    boxes: [
      { box: 510, label: 'Total liability before instalments', display: '8,831' },
      { box: 525, label: 'Self-assessment of tax payable', display: '8,831' },
    ],
  },
  {
    section: 'Declaration',
    boxes: [
      { box: 975, label: "Director's name", display: 'Sarah Brown' },
      { box: 980, label: 'Date of declaration', display: 'Date filed' },
      { box: 985, label: "Director's role", display: 'Director' },
    ],
  },
]

// --- Interactive 1: match the figure to the box ----------------------------

export interface MatchPair {
  id: string
  /** Source figure label shown on the draggable chip. */
  figure: string
  /** The figure's value, formatted with £. */
  value: string
  /** Correct CT600 box number. */
  box: number
  /** Short label for the target box. */
  boxLabel: string
}

export const matchPairs: MatchPair[] = [
  { id: 'turnover', figure: 'Turnover', value: '£74,800', box: 145, boxLabel: 'Total turnover from trade' },
  { id: 'tradingProfit', figure: 'Trading profit per accounts', value: '£47,365', box: 155, boxLabel: 'Trading profits (per accounts)' },
  { id: 'adjustedProfit', figure: 'Adjusted trading profit', value: '£46,478', box: 165, boxLabel: 'Net trading profits' },
  { id: 'pcct', figure: 'Profits chargeable to CT', value: '£46,478', box: 305, boxLabel: 'Profits chargeable to CT' },
  { id: 'ct', figure: 'Corporation tax', value: '£8,831', box: 430, boxLabel: 'Corporation tax for the period' },
  { id: 'selfAssessment', figure: 'Self-assessment of tax payable', value: '£8,831', box: 525, boxLabel: 'Self-assessment of tax payable' },
]

// --- The four filing obligations -------------------------------------------

export interface Obligation {
  obligation: string
  to: string
  format: string
  deadline: string
}

export const obligations: Obligation[] = [
  {
    obligation: 'Pay corporation tax',
    to: 'HMRC',
    format: 'Bank transfer or direct debit',
    deadline: '1 January 2027',
  },
  {
    obligation: 'File the CT600 tax return',
    to: 'HMRC',
    format: 'Commercial software (iXBRL)',
    deadline: '31 March 2027',
  },
  {
    obligation: 'File accounts',
    to: 'Companies House',
    format: 'WebFiling or software (iXBRL)',
    deadline: '31 December 2026',
  },
  {
    obligation: 'File the confirmation statement',
    to: 'Companies House',
    format: 'WebFiling',
    deadline: 'Review-period anniversary',
  },
]

// --- Interactive 2: the deadline runway ------------------------------------

export interface TimelineMarker {
  id: string
  /** Date label, DD Month YYYY. */
  date: string
  /** Position along the runway, 0 (period end) to 1 (CT600 due). */
  t: number
  obligation: string
  who: string
  /** Highlight the pay-first marker. */
  emphasise?: boolean
}

export const timeline: TimelineMarker[] = [
  {
    id: 'period-end',
    date: '31 March 2026',
    t: 0,
    obligation: 'Accounting period ends',
    who: 'Acorn Studio Ltd',
  },
  {
    id: 'accounts',
    date: '31 December 2026',
    t: 0.75,
    obligation: 'File accounts',
    who: 'Companies House',
  },
  {
    id: 'pay',
    date: '1 January 2027',
    t: 0.77,
    obligation: 'Pay corporation tax (£8,831)',
    who: 'HMRC — this falls due first',
    emphasise: true,
  },
  {
    id: 'return',
    date: '31 March 2027',
    t: 1,
    obligation: 'File the CT600',
    who: 'HMRC',
  },
]

// --- Budget filing software ------------------------------------------------

export interface SoftwareOption {
  name: string
  price: string
  files: string
  verdict: string
}

export const softwareOptions: SoftwareOption[] = [
  {
    name: 'TinyTax',
    price: 'from ~£20/year',
    files: 'CT600 + iXBRL accounts + computation',
    verdict: 'Cheapest. Built for self-filers.',
  },
  {
    name: 'Easy Digital Filing',
    price: '~£40-£100',
    files: 'CT600 + iXBRL accounts + computation',
    verdict: 'Popular post-CATO choice for non-accountants.',
  },
  {
    name: 'Taxpipe',
    price: '~£59 per filing',
    files: 'CT600 + iXBRL accounts + computation',
    verdict: 'Pay-as-you-file, no subscription.',
  },
  {
    name: 'FreeAgent',
    price: '£14.50-£33/mo (free with Mettle/NatWest/RBS)',
    files: 'Bookkeeping + built-in CT600',
    verdict: 'Integrated if already using it for the books.',
  },
  {
    name: 'TaxCalc',
    price: '~£100-£300/year',
    files: 'CT600 + iXBRL accounts + computation',
    verdict: 'Established, more accountant-oriented.',
  },
  {
    name: 'Andica',
    price: '~£100-£200/year',
    files: 'CT600 + iXBRL accounts (add-on)',
    verdict: 'Established UK vendor, slightly dated UI.',
  },
]

// --- Supplementary pages ---------------------------------------------------

export interface SuppPage {
  page: string
  topic: string
  acorn: string
}

export const suppPages: SuppPage[] = [
  { page: 'CT600A', topic: 'Loans to participators (director’s loan)', acorn: 'Only if DLA overdrawn' },
  { page: 'CT600C', topic: 'Group and consortium relief', acorn: 'No' },
  { page: 'CT600E', topic: 'Charities and CASCs', acorn: 'No' },
  { page: 'CT600L', topic: 'R&D and creative industry credits', acorn: 'Only if claiming R&D' },
  { page: 'CT600M', topic: 'Freeports and Investment Zones', acorn: 'No' },
  { page: 'CT600N', topic: 'Residential Property Developer Tax', acorn: 'No' },
]

// --- Penalties -------------------------------------------------------------

export interface PenaltyRow {
  late: string
  penalty: string
}

/** HMRC CT600 late-filing penalties, doubled from 1 April 2026. */
export const htmlPenalties: PenaltyRow[] = [
  { late: '1 day', penalty: '£200' },
  { late: '3 months', penalty: 'A further £200 (£400 flat total)' },
  { late: '6 months', penalty: '+10% of unpaid tax' },
  { late: '12 months', penalty: '+another 10% of unpaid tax' },
  { late: 'Third consecutive late return', penalty: '£1,000 / £2,000 flat steps' },
]

/** Companies House late-filing penalties (private company). */
export const chPenalties: PenaltyRow[] = [
  { late: 'Up to 1 month', penalty: '£150' },
  { late: '1 to 3 months', penalty: '£375' },
  { late: '3 to 6 months', penalty: '£750' },
  { late: 'More than 6 months', penalty: '£1,500' },
]

// --- Payment methods -------------------------------------------------------

export interface PaymentMethod {
  method: string
  timing: string
}

export const paymentMethods: PaymentMethod[] = [
  { method: 'Faster Payments (online/telephone banking)', timing: 'Same or next day' },
  { method: 'CHAPS', timing: 'Same day' },
  { method: 'BACS', timing: '3 working days' },
  { method: 'Direct Debit', timing: 'Set up via HMRC account' },
  { method: 'Debit card', timing: 'Via HMRC portal' },
  { method: 'Cheque', timing: 'Slow; not recommended' },
]

// --- The end-to-end filing workflow ----------------------------------------

export const workflow: string[] = [
  'Sign up for the software and create the company record (name, CRN, UTR, period, FRS 105).',
  'Build the FRS 105 accounts in the guided builder.',
  'Build the tax computation; the software calculates TTP and the CT charge.',
  'Fill the CT600; the software pre-populates the boxes from accounts and computation.',
  'Review the rendered iXBRL preview - dates, name, figures.',
  'Connect your Government Gateway credentials.',
  'Submit; save HMRC’s acknowledgement (with IRmark) as proof of filing.',
  'Optionally file the filleted accounts to Companies House in the same workflow.',
]
