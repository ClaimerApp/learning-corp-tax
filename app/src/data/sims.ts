import type { SimAccount, SimJournal } from '../components/interactive/TrialBalanceSimulator'

// ---------------------------------------------------------------------------
// Week 1 — a from-scratch sandbox. Post everyday transactions and watch the
// trial balance build itself, always with debits equal to credits.
// ---------------------------------------------------------------------------

export const week1Opening: SimAccount[] = []

export const week1Journals: SimJournal[] = [
  {
    id: 'shares',
    label: 'Sarah subscribes £100 of shares',
    narrative: 'Dr Bank £100 · Cr Share capital £100',
    postings: [
      { code: '090', name: 'Bank', family: 'asset', debit: 100 },
      { code: '950', name: 'Share capital', family: 'equity', credit: 100 },
    ],
  },
  {
    id: 'invoice-paid',
    label: 'Client pays a £1,200 invoice',
    narrative: 'Dr Bank £1,200 · Cr Sales £1,200',
    postings: [
      { code: '090', name: 'Bank', family: 'asset', debit: 1200 },
      { code: '200', name: 'Sales', family: 'income', credit: 1200 },
    ],
  },
  {
    id: 'rent',
    label: 'Pay £300 rent by direct debit',
    narrative: 'Dr Rent £300 · Cr Bank £300',
    postings: [
      { code: '469', name: 'Rent', family: 'expense', debit: 300 },
      { code: '090', name: 'Bank', family: 'asset', credit: 300 },
    ],
  },
  {
    id: 'subcontractor',
    label: 'Subcontractor invoices £500 (not yet paid)',
    narrative: 'Dr Cost of sales £500 · Cr Trade creditors £500 — no cash moves',
    postings: [
      { code: '310', name: 'Cost of sales', family: 'expense', debit: 500 },
      { code: '800', name: 'Trade creditors', family: 'liability', credit: 500 },
    ],
  },
  {
    id: 'laptop',
    label: 'Buy a £1,500 laptop',
    narrative: 'Dr Fixed assets £1,500 · Cr Bank £1,500 — an asset swap',
    postings: [
      { code: '710', name: 'Fixed assets', family: 'asset', debit: 1500 },
      { code: '090', name: 'Bank', family: 'asset', credit: 1500 },
    ],
  },
]

// ---------------------------------------------------------------------------
// Week 2 — Acorn's trial balance BEFORE the year-end adjustments. Toggle the
// four adjustments and watch the profit settle to £47,365 (before tax) and
// £38,534 (after tax), with net assets landing on £13,846.
// ---------------------------------------------------------------------------

export const week2Opening: SimAccount[] = [
  { code: '090', name: 'Bank — Starling', family: 'asset', opening: 18420 },
  { code: '610', name: 'Trade debtors', family: 'asset', opening: 4800 },
  { code: '710', name: 'Fixed assets — cost', family: 'asset', opening: 1900 },
  { code: '800', name: 'Trade creditors', family: 'liability', opening: -1150 },
  { code: '950', name: 'Share capital', family: 'equity', opening: -100 },
  { code: '960', name: 'Retained earnings (b/f)', family: 'equity', opening: -212 },
  { code: '970', name: 'Dividends declared', family: 'equity', opening: 25000 },
  { code: '200', name: 'Turnover', family: 'income', opening: -74800 },
  { code: '310', name: 'Cost of sales', family: 'expense', opening: 6000 },
  { code: '469', name: 'Office rent', family: 'expense', opening: 3600 },
  { code: '485', name: 'Software subscriptions', family: 'expense', opening: 1680 },
  { code: '489', name: 'Phone & internet', family: 'expense', opening: 960 },
  { code: '493', name: 'Travel', family: 'expense', opening: 520 },
  { code: '494', name: 'Business entertainment', family: 'expense', opening: 380 },
  { code: '495', name: 'Accountancy fees', family: 'expense', opening: 0 },
  { code: '496', name: 'Bank charges', family: 'expense', opening: 120 },
  { code: '497', name: 'Use of home', family: 'expense', opening: 312 },
  { code: '477', name: "Director's salary", family: 'expense', opening: 12570 },
]

export const week2Journals: SimJournal[] = [
  {
    id: 'accrual',
    label: 'Accrue the £900 accountancy fee',
    narrative: 'Work done this year, invoice arrives in May. Dr Accountancy £900 · Cr Accruals £900',
    postings: [
      { code: '495', name: 'Accountancy fees', family: 'expense', debit: 900 },
      { code: '825', name: 'Accruals', family: 'liability', credit: 900 },
    ],
  },
  {
    id: 'prepayment',
    label: 'Prepay £240 of next year’s software',
    narrative: 'Annual sub paid at year-end belongs to next year. Dr Prepayments £240 · Cr Software £240',
    postings: [
      { code: '620', name: 'Prepayments', family: 'asset', debit: 240 },
      { code: '485', name: 'Software subscriptions', family: 'expense', credit: 240 },
    ],
  },
  {
    id: 'depreciation',
    label: 'Charge £633 depreciation',
    narrative: 'Spread the £1,900 laptop & desk over 3 years. Dr Depreciation £633 · Cr Accum. depreciation £633',
    postings: [
      { code: '498', name: 'Depreciation', family: 'expense', debit: 633 },
      { code: '715', name: 'Accumulated depreciation', family: 'asset', credit: 633 },
    ],
  },
  {
    id: 'ct',
    label: 'Provide for £8,831 corporation tax',
    narrative: 'Tax belongs in the year the profit was made. Dr Corporation tax £8,831 · Cr CT payable £8,831',
    postings: [
      { code: '500', name: 'Corporation tax', family: 'expense', debit: 8831 },
      { code: '830', name: 'Corporation tax payable', family: 'liability', credit: 8831 },
    ],
  },
]
