const gbp0 = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
  maximumFractionDigits: 0,
})

const gbp2 = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

const num0 = new Intl.NumberFormat('en-GB', { maximumFractionDigits: 0 })

/** £8,831 */
export const money = (n: number) => gbp0.format(n)
/** £8,830.82 */
export const money2 = (n: number) => gbp2.format(n)
/** 8,831 (no symbol — for ledger columns) */
export const ledger = (n: number) => (n === 0 ? '—' : num0.format(n))
