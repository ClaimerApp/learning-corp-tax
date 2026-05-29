// ---------------------------------------------------------------------------
// Week 5 — a messier second year for Acorn Studio Ltd, year ended 31 March 2027.
// The Xero health-check issues, the s.455 maths, the R&D test, and the cleaned
// figures all live here so the interactives and page stay declarative.
// ---------------------------------------------------------------------------

export type Severity = 'recode' | 'reclassify' | 'journal' | 'reconcile'

export interface JournalLine {
  account: string
  debit?: number
  credit?: number
}

/** One finding from the Xero file health check (Interactive 1). */
export interface Issue {
  id: string
  title: string
  /** The symptom you spot in the books. */
  symptom: string
  /** Why it matters. */
  why: string
  /** How to fix it. */
  fix: string
  severity: Severity
  /** The correction journal, where the fix is a journal. */
  journal?: JournalLine[]
}

export const issues: Issue[] = [
  {
    id: 'bank-mismatch',
    title: "Bank balance doesn't match Xero",
    symptom: 'Starling shows £30,852; Xero shows £31,372. £520 out.',
    why: 'A £520 phantom is potentially overstated income that distorts profit and tax.',
    fix: 'Duplicate Stripe payouts (£680) offset by £160 of missing refunds. Unreconcile the duplicates, match them to the original invoices, post the refunds.',
    severity: 'reconcile',
  },
  {
    id: 'suspense',
    title: 'Suspense account not cleared',
    symptom: 'Account 850 Suspense holds a £540 balance.',
    why: 'Suspense is a holding pen. Anything left there is parked and forgotten.',
    fix: 'It is a misposted UX training course. Recode to Training (470) - allowable for the trade.',
    severity: 'recode',
  },
  {
    id: 'personal',
    title: 'Personal spending in the P&L',
    symptom: '£312 of supermarket, kids toys, Boots and Pret coded to expenses.',
    why: 'Personal costs are not deductible. They overstate expense and understate tax.',
    fix: "Recode each to the Director's Loan Account (835), to be repaid or cleared by a dividend.",
    severity: 'recode',
  },
  {
    id: 'drawings-wages',
    title: 'Drawings miscoded as wages',
    symptom: '£3,500 of summer lump sums coded to Wages, with no PAYE filed.',
    why: 'With no RTI filing they are not salary. They are drawings against the DLA.',
    fix: 'Recode the three transactions from Wages to the DLA.',
    severity: 'recode',
  },
  {
    id: 'dividends-pl',
    title: 'Dividends posted to the P&L',
    symptom: "£42,000 of dividends sitting in a P&L 'Drawings' line.",
    why: 'Dividends are distributions of post-tax profit, not an expense. £42,000 badly understates the tax.',
    fix: 'Reclassify all four dividends out of the P&L and into equity.',
    severity: 'journal',
    journal: [
      { account: 'Dividends (equity)', debit: 42000 },
      { account: 'Drawings (P&L)', credit: 42000 },
    ],
  },
  {
    id: 'vat-control',
    title: 'VAT control not zero after filing',
    symptom: 'The VAT control account shows £2,100 after Q3 was filed.',
    why: "Some Q4 sales were coded 'No VAT', so VAT was neither charged nor collected.",
    fix: "Recode each to '20% VAT on Income'. Xero picks it up next return. Year-end VAT payable: £2,100.",
    severity: 'recode',
  },
  {
    id: 'pension',
    title: 'Employer vs employee pension confused',
    symptom: '£440/month all coded to Pension Costs.',
    why: 'Only the employer portion is a company expense; the £40/month employee part is a liability movement.',
    fix: 'Reduce the P&L pension cost by £480 (£40 x 12). The £4,800 employer contribution stays.',
    severity: 'reclassify',
  },
  {
    id: 'phone',
    title: 'Phone bill claimed in full',
    symptom: '£480 of a personal-contract phone claimed 100%.',
    why: 'On a personal contract, only the business proportion is allowable.',
    fix: 'Restrict to 75% business: £360 allowed, £120 recoded to the DLA.',
    severity: 'recode',
  },
  {
    id: 'mileage',
    title: 'Fuel receipts instead of mileage',
    symptom: '£180 of fuel claimed for client trips.',
    why: 'For a personal car, HMRC prefers mileage at 45p/mile; fuel can be a benefit-in-kind.',
    fix: 'Reverse the £180 fuel to the DLA, then claim 1,400 miles x 45p = £630. Net P&L effect +£450.',
    severity: 'reclassify',
  },
  {
    id: 'fixed-asset',
    title: 'Fixed asset expensed',
    symptom: "Tom's £2,200 MacBook coded to Computer Equipment in the P&L.",
    why: 'Multi-year assets belong on the balance sheet, not in expenses.',
    fix: 'Capitalise it, then add it to the Fixed Assets module (cost £2,200, 1 July 2026, 3-year life).',
    severity: 'journal',
    journal: [
      { account: 'Fixed assets (710)', debit: 2200 },
      { account: 'Computer equipment (471)', credit: 2200 },
    ],
  },
  {
    id: 'depreciation',
    title: 'Depreciation not run',
    symptom: 'The Fixed Assets module was last run to 31 March 2026.',
    why: 'Depreciation does not post automatically in Xero. The module must be run.',
    fix: 'Run depreciation to 31 March 2027. Charge for the year: £1,267 (original assets plus Tom’s MacBook).',
    severity: 'journal',
  },
  {
    id: 'accrual-prepay',
    title: 'Accrual and prepayment missing',
    symptom: 'Accountancy bill (£1,100) not yet in; Adobe (£320) paid for next year.',
    why: 'Standard year-end adjustments. Without them, costs sit in the wrong year.',
    fix: 'Post auto-reversing journals: accrue the £1,100 fee, prepay the £320 of software.',
    severity: 'journal',
    journal: [
      { account: 'Accountancy fees (P&L)', debit: 1100 },
      { account: 'Accruals (BS)', credit: 1100 },
      { account: 'Prepayments (BS)', debit: 320 },
      { account: 'Software subscriptions (P&L)', credit: 320 },
    ],
  },
  {
    id: 'stripe-dupes',
    title: 'Stripe duplicates inflate sales',
    symptom: '£680 of duplicated Stripe sales, £160 of refunds missing.',
    why: 'Duplicated income overstates sales and profit, and so the tax.',
    fix: 'Unreconcile the duplicates, match them to invoices, post the refunds. Net effect: -£520 sales.',
    severity: 'reconcile',
  },
]

// --- s.455 on the overdrawn director's loan --------------------------------

/** s.455 charge on an overdrawn DLA. rate is a decimal, e.g. 0.3575. */
export function s455(balance: number, rate: number): number {
  if (balance <= 0) return 0
  return balance * rate
}

/** s.455 rates by when the loan was made. */
export const s455Rates = {
  current: { rate: 0.3575, label: '35.75% (loans on or after 6 April 2026)' },
  prior: { rate: 0.3375, label: '33.75% (loans before 6 April 2026)' },
}

export const dlaBalance = 4200
/** Loans above this become beneficial loans, with a possible BIK on the director. */
export const beneficialLoanThreshold = 10000
export const s455RepayBy = '1 January 2028'

// --- The three R&D gates (Interactive 3) -----------------------------------

export interface RnDGate {
  id: string
  question: string
  /** The honest answer for Acorn's Figma plugin. */
  acornAnswer: boolean
  detail: string
}

export const rndGates: RnDGate[] = [
  {
    id: 'advance',
    question: 'Is there an advance in science or technology?',
    acornAnswer: false,
    detail:
      'Automating a few manual clicks through a documented plugin API is not a technical advance.',
  },
  {
    id: 'uncertainty',
    question: 'Does it resolve scientific or technological uncertainty?',
    acornAnswer: false,
    detail:
      'A competent professional could have built it from the existing documentation. No genuine uncertainty.',
  },
  {
    id: 'professionals',
    question: 'Was the work done by competent professionals doing R&D?',
    acornAnswer: false,
    detail:
      'Sarah is a designer building an internal tool, not pushing the state of the art.',
  },
]

// --- Year-2 figures for the styled statements ------------------------------

export interface StatementRow {
  l: string
  v: number
  bold?: boolean
  rule?: boolean
  gap?: boolean
  indent?: boolean
}

export const year2Computation: StatementRow[] = [
  { l: 'Profit before tax (per accounts)', v: 66116 },
  { l: 'Add: depreciation', v: 1267, indent: true },
  { l: 'Add: client entertaining', v: 620, indent: true },
  { l: 'Subtotal', v: 68003, rule: true },
  { l: 'Less: AIA on Tom’s MacBook', v: -2200, indent: true },
  { l: 'Taxable total profits (TTP)', v: 65803, bold: true, rule: true },
  { l: 'Tax at 25% main rate', v: 16451 },
  { l: 'Less: marginal relief', v: -2763, indent: true },
  { l: 'Corporation tax on trading profit', v: 13688, bold: true, rule: true },
  { l: 'Plus: s.455 on the director’s loan', v: 1502, indent: true },
  { l: 'Total corporation tax for the year', v: 15190, bold: true, rule: true },
]

export const year2BalanceSheet: StatementRow[] = [
  { l: 'Fixed assets', v: 2200 },
  { l: 'Current assets', v: 41572 },
  { l: 'Creditors: amounts falling due within one year', v: -21000 },
  { l: 'Net current assets', v: 20572, rule: true },
  { l: 'Total assets less current liabilities', v: 22772, bold: true },
  { l: 'Called up share capital', v: 100, gap: true },
  { l: 'Profit and loss account', v: 22672 },
  { l: "Shareholders' funds", v: 22772, bold: true, rule: true },
]

// --- CT600A (loans to participators) ---------------------------------------

export interface CT600ARow {
  box: string
  label: string
  value: string
}

export const ct600A: CT600ARow[] = [
  { box: 'A1', label: 'Loans made in the period to participators', value: '4,200' },
  { box: 'A2', label: 'Loans repaid during the period', value: '0' },
  { box: 'A4', label: 'Balance outstanding 9 months and 1 day after period end', value: '4,200' },
  { box: 'A5', label: 's.455 tax due at 35.75%', value: '1,502' },
]

export const year2Headline = {
  turnover: 124000,
  pbt: 66116,
  ttp: 65803,
  tradingCt: 13688,
  s455: 1502,
  totalCt: 15190,
  profitAfterTax: 50926,
  dividends: 42000,
  retainedEarningsClose: 22672,
  netAssets: 22772,
  tbTotal: 160746,
}
