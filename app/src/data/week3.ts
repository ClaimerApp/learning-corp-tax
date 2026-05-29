// ---------------------------------------------------------------------------
// Week 3 — From accounting profit to taxable profit.
// Canonical figures for Acorn Studio Ltd, year ended 31 March 2026.
// Data and the pure tax-rate maths live here so the interactives stay dumb.
// ---------------------------------------------------------------------------

/** A line in the live corporation-tax computation (Interactive 1). */
export interface CompLine {
  id: string
  /** Toggle label shown on the checkbox card. */
  label: string
  /** One-line explanation under the label. */
  note: string
  /** Signed effect on running profit: + for add-backs, - for allowances. */
  amount: number
  /** Section the line belongs to in the stacked computation. */
  kind: 'addback' | 'allowance'
}

/** Starting profit before tax, per Acorn's accounts. */
export const pbt = 47365

/** The small profits rate that applies to Acorn's TTP. */
export const smallProfitsRate = 0.19

/** Toggleable computation lines for Acorn. All three are correct adjustments. */
export const comp: CompLine[] = [
  {
    id: 'depreciation',
    label: 'Add back depreciation £633',
    note: 'Tax never allows accounting depreciation - capital allowances replace it.',
    amount: 633,
    kind: 'addback',
  },
  {
    id: 'entertaining',
    label: 'Add back client entertaining £380',
    note: 'Hospitality to anyone other than employees is disallowable (CTA 2009 s.1298).',
    amount: 380,
    kind: 'addback',
  },
  {
    id: 'aia',
    label: 'Claim AIA capital allowance (£1,900)',
    note: 'Annual Investment Allowance gives 100% relief on the £1,900 of plant in year one.',
    amount: 1900,
    kind: 'allowance',
  },
]

/** The figures Acorn actually filed, for the "matches" confirmation. */
export const acornFiled = { ttp: 46478, ct: 8831 }

// --- Rate bands ------------------------------------------------------------

export interface RateBand {
  band: string
  range: string
  rate: string
}

export const rateBands: RateBand[] = [
  { band: 'Small profits', range: 'Up to £50,000', rate: '19%' },
  { band: 'Marginal relief', range: '£50,001 to £250,000', rate: 'Sliding (effective marginal 26.5%)' },
  { band: 'Main rate', range: 'Over £250,000', rate: '25%' },
]

// --- Disallowables summary -------------------------------------------------

export interface Disallowable {
  item: string
  amount: number
}

export const disallowables: Disallowable[] = [
  { item: 'Depreciation', amount: 633 },
  { item: 'Client entertaining', amount: 380 },
  { item: 'Fines and penalties', amount: 0 },
  { item: 'Capital costs in P&L', amount: 0 },
  { item: 'Private use proportion', amount: 0 },
  { item: 'Capital legal fees', amount: 0 },
  { item: 'Gifts to customers', amount: 0 },
]

// --- Associated companies examples -----------------------------------------

export interface AssocRow {
  companies: string
  lower: number
  upper: number
}

export const assocExamples: AssocRow[] = [
  { companies: 'One company', lower: 50000, upper: 250000 },
  { companies: 'Two associated', lower: 25000, upper: 125000 },
  { companies: 'Three associated', lower: 16667, upper: 83333 },
]

// --- CT600 box mapping preview ---------------------------------------------

export interface CT600Row {
  line: string
  value: string
  box: string
}

export const ct600Boxes: CT600Row[] = [
  { line: 'Turnover', value: '£74,800', box: 'Box 145' },
  { line: 'Trading profit per accounts', value: '£47,365', box: 'Box 155' },
  { line: 'Adjusted trading profit', value: '£46,478', box: 'Box 165' },
  { line: 'Profits chargeable to CT', value: '£46,478', box: 'Box 305' },
  { line: 'Corporation tax', value: '£8,831', box: 'Box 430' },
  { line: 'Self-assessment of CT payable', value: '£8,831', box: 'Box 525' },
]

// --- Pure tax maths for Interactive 2 --------------------------------------

const LOWER = 50000
const UPPER = 250000
const MAIN = 0.25
const SMALL = 0.19
/** Marginal relief fraction, 3/200. */
const F = 3 / 200

/**
 * Corporation tax payable on a given TTP across all three regimes.
 * Assumes augmented profits equal TTP (no exempt distributions).
 */
export function ctPayable(ttp: number): number {
  if (ttp <= 0) return 0
  if (ttp <= LOWER) return ttp * SMALL
  if (ttp >= UPPER) return ttp * MAIN
  const marginalRelief = F * (UPPER - ttp)
  return ttp * MAIN - marginalRelief
}

/** Effective corporation-tax rate as a percentage (e.g. 24 for 24%). */
export function effectiveRate(ttp: number): number {
  if (ttp <= 0) return 0
  return (ctPayable(ttp) / ttp) * 100
}

/** Which band a TTP falls into. */
export function bandFor(ttp: number): 'small' | 'marginal' | 'main' {
  if (ttp <= LOWER) return 'small'
  if (ttp >= UPPER) return 'main'
  return 'marginal'
}

export const bandLimits = { lower: LOWER, upper: UPPER }
