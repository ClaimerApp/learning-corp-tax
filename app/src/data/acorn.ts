// Acorn Studio Ltd — the single worked company the whole course follows.
// Figures for the year ended 31 March 2026 (Weeks 1-4). Numbers are
// deliberately round for teaching, taken from the tutorial source.

export type Family =
  | 'asset'
  | 'liability'
  | 'equity'
  | 'income'
  | 'expense'

export interface TBLine {
  code: string
  name: string
  family: Family
  /** Positive = debit balance, negative = credit balance (in £). */
  debit?: number
  credit?: number
  note?: string
}

export const company = {
  name: 'Acorn Studio Ltd',
  director: 'Sarah Brown',
  trade: 'Freelance web design & branding',
  incorporated: '1 April 2024',
  office: '14 Bramble Lane, Bristol BS1 4AB',
  crn: '14123456',
  utr: '1234567890',
  ard: '31 March',
  bank: 'Starling Business',
  period: '1 April 2025 – 31 March 2026',
} as const

// The master trial balance at 31 March 2026 — every figure in Weeks 2-4
// descends from this table. Debits and credits each total £77,795.
export const trialBalance: TBLine[] = [
  { code: '090', name: 'Bank — Starling Business', family: 'asset', debit: 18420 },
  { code: '610', name: 'Trade debtors', family: 'asset', debit: 4800 },
  { code: '620', name: 'Prepayments', family: 'asset', debit: 240, note: 'Adobe annual sub paid in advance' },
  { code: '710', name: 'Fixed assets — cost', family: 'asset', debit: 1900, note: 'MacBook £1,500 + desk £400' },
  { code: '715', name: 'Accumulated depreciation', family: 'asset', credit: 633, note: 'Contra-asset' },
  { code: '800', name: 'Trade creditors', family: 'liability', credit: 1150 },
  { code: '825', name: 'Accruals', family: 'liability', credit: 900, note: 'Accountancy fee, invoice not yet in' },
  { code: '950', name: 'Share capital', family: 'equity', credit: 100, note: '100 ordinary £1 shares' },
  { code: '960', name: 'Retained earnings (b/f)', family: 'equity', credit: 212 },
  { code: '970', name: 'Dividends declared', family: 'equity', debit: 25000, note: 'NOT an expense — equity' },
  { code: '200', name: 'Turnover (design fees)', family: 'income', credit: 74800 },
  { code: '310', name: 'Cost of sales (subcontractor)', family: 'expense', debit: 6000 },
  { code: '469', name: 'Office rent', family: 'expense', debit: 3600 },
  { code: '485', name: 'Software subscriptions', family: 'expense', debit: 1440 },
  { code: '489', name: 'Phone & internet', family: 'expense', debit: 960 },
  { code: '493', name: 'Travel', family: 'expense', debit: 520 },
  { code: '494', name: 'Business entertainment', family: 'expense', debit: 380, note: 'Disallowable for tax' },
  { code: '495', name: 'Accountancy fees', family: 'expense', debit: 900 },
  { code: '496', name: 'Bank charges', family: 'expense', debit: 120 },
  { code: '497', name: 'Use of home (flat rate)', family: 'expense', debit: 312 },
  { code: '477', name: "Director's salary", family: 'expense', debit: 12570 },
  { code: '498', name: 'Depreciation', family: 'expense', debit: 633, note: 'Add back for tax' },
]

export const keyFigures = {
  turnover: 74800,
  profitBeforeTax: 47365,
  depreciation: 633,
  entertaining: 380,
  aia: 1900,
  taxableProfit: 46478,
  corporationTax: 8831,
  dividends: 25000,
  retainedEarningsClose: 13746,
} as const

// The five account families, with their teaching colour + DEAD CLIC side.
export const families: Record<
  Family,
  { label: string; up: 'debit' | 'credit'; blurb: string; tone: string }
> = {
  asset: {
    label: 'Assets',
    up: 'debit',
    blurb: 'Things the company owns or is owed.',
    tone: 'sage',
  },
  liability: {
    label: 'Liabilities',
    up: 'credit',
    blurb: 'Things the company owes to someone else.',
    tone: 'salmon',
  },
  equity: {
    label: 'Equity',
    up: 'credit',
    blurb: "The owner's stake — what's left after debts.",
    tone: 'gold',
  },
  income: {
    label: 'Income',
    up: 'credit',
    blurb: 'What the company earns from its work.',
    tone: 'sage',
  },
  expense: {
    label: 'Expenses',
    up: 'debit',
    blurb: 'The costs of running the company.',
    tone: 'salmon',
  },
}

export function sumColumn(lines: TBLine[], col: 'debit' | 'credit'): number {
  return lines.reduce((t, l) => t + (l[col] ?? 0), 0)
}
