// Plain-English glossary. Keyed by slug so any bold term in the course can
// link/hover to its definition. Definitions adapted from Glossary.md.

export interface GlossaryEntry {
  slug: string
  term: string
  short: string // one-liner for hover tooltips
  long: string // fuller definition for the glossary page
  letter: string
}

const raw: Omit<GlossaryEntry, 'letter'>[] = [
  {
    slug: 'accounting-period',
    term: 'Accounting period',
    short: 'The stretch of time your books cover — usually 12 months.',
    long: "The stretch of time your company's books cover. For a normal company this is twelve months, ending on the accounting reference date. Acorn's accounting period for Weeks 1-4 is 1 April 2025 to 31 March 2026.",
  },
  {
    slug: 'ard',
    term: 'Accounting reference date (ARD)',
    short: 'The day your financial year ends.',
    long: "The day your company's financial year ends, set by Companies House at incorporation (usually the last day of the month you incorporated in). Acorn's ARD is 31 March.",
  },
  {
    slug: 'accruals',
    term: 'Accruals',
    short: "Costs incurred but not yet invoiced — booked at year-end.",
    long: "Costs your company has incurred in the period but hasn't yet received an invoice or paid for. You post them at year-end so the P&L shows the right cost for the period. Acorn accrues its £900 accountancy fee at 31 March 2026.",
  },
  {
    slug: 'add-back',
    term: 'Add-back',
    short: 'A P&L cost that tax disallows, added back to profit.',
    long: "A cost that's in the P&L but isn't allowed for tax, so you add it back to accounting profit when working out taxable profit. Depreciation and business entertaining are the classics.",
  },
  {
    slug: 'aged-receivables',
    term: 'Aged receivables / payables',
    short: 'Reports of who owes you (and whom you owe), by age.',
    long: 'Reports showing how old your unpaid customer invoices (receivables) and supplier bills (payables) are, split into 30/60/90+ day buckets. Useful for spotting bad debts and cashflow problems.',
  },
  {
    slug: 'aia',
    term: 'Annual Investment Allowance (AIA)',
    short: '100% tax relief on most equipment, in the year you buy it.',
    long: 'A capital allowance that lets you deduct the full cost of most qualifying plant and machinery from taxable profit in the year of purchase. Currently £1,000,000 a year and permanent. Acorn uses AIA on its £1,900 MacBook and desk.',
  },
  {
    slug: 'associated-companies',
    term: 'Associated companies',
    short: 'Companies under common control — they share the tax bands.',
    long: 'Companies under common control. Matters because the £50,000 and £250,000 corporation-tax thresholds are divided by the number of associated companies plus one. Owning two Ltds makes both share the thresholds.',
  },
  {
    slug: 'balance-sheet',
    term: 'Balance sheet',
    short: 'A snapshot of what you own, owe and are worth.',
    long: 'A snapshot at one moment of what the company owns (assets), owes (liabilities), and the residual belonging to the shareholder (equity). Always balances: Assets = Liabilities + Equity. In FRS 105 it is called the statement of financial position.',
  },
  {
    slug: 'bank-reconciliation',
    term: 'Bank reconciliation',
    short: 'Proving your book balance matches the actual bank.',
    long: 'Matching every line on your bank statement to the matching line in your accounting software, proving the bank balance in your books equals the bank’s. The single most important year-end check.',
  },
  {
    slug: 'capital-allowances',
    term: 'Capital allowances',
    short: "Tax's substitute for depreciation on fixed assets.",
    long: "The tax system's substitute for depreciation. You can't deduct depreciation when working out taxable profit, but you can deduct capital allowances on qualifying fixed-asset purchases — AIA, full expensing, and writing-down allowances.",
  },
  {
    slug: 'cato',
    term: 'CATO',
    short: "HMRC's free joint-filing service — closed 31 March 2026.",
    long: "Company Accounts and Tax Online: HMRC's free joint-filing service for tiny companies. It closed on 31 March 2026. From 1 April 2026 you must use commercial software for the CT600 and iXBRL accounts.",
  },
  {
    slug: 'chart-of-accounts',
    term: 'Chart of accounts',
    short: 'The list of every account in your ledger.',
    long: 'The list of every account in your general ledger, organised into families (income, cost of sales, expenses, assets, liabilities, equity). Xero, QuickBooks and FreeAgent ship a default chart you can adjust.',
  },
  {
    slug: 'companies-house',
    term: 'Companies House',
    short: 'The UK registrar of companies (separate from HMRC).',
    long: 'The UK registrar of companies. Every Ltd files annual accounts and a confirmation statement with Companies House. A separate body from HMRC.',
  },
  {
    slug: 'confirmation-statement',
    term: 'Confirmation statement',
    short: 'Annual check that Companies House’s records are correct.',
    long: 'A short annual filing confirming that Companies House’s records (directors, shareholders, registered office, PSC, SIC codes) are still correct. Filed within 14 days of each 12-month review period. Costs £34 online.',
  },
  {
    slug: 'corporation-tax',
    term: 'Corporation tax',
    short: 'The tax a Ltd pays on its taxable profits.',
    long: 'The tax a UK limited company pays on taxable profits: 19% small profits rate up to £50,000, 25% main rate above £250,000, with marginal relief between.',
  },
  {
    slug: 'ct600',
    term: 'Corporation Tax Return (CT600)',
    short: 'The return you file with HMRC showing tax due.',
    long: "The official return filed with HMRC showing taxable profits and the corporation tax due. Due 12 months after the period end. Acorn's CT600 for the year ended 31 March 2026 is due by 31 March 2027.",
  },
  {
    slug: 'ctap',
    term: 'CTAP',
    short: 'The period the CT600 covers.',
    long: 'Corporation Tax Accounting Period — the period the CT600 covers, normally identical to the accounting period in the books. A period longer than 12 months splits into two CTAPs.',
  },
  {
    slug: 'depreciation',
    term: 'Depreciation',
    short: "Spreading an asset's cost over its useful life (accounting only).",
    long: 'The accounting way of spreading the cost of a fixed asset over its useful life. It is a P&L cost, but is not allowed for tax — capital allowances replace it.',
  },
  {
    slug: 'dla',
    term: "Director's loan account (DLA)",
    short: 'Tracks money owed between director and company.',
    long: 'A ledger account tracking money owed between the director and the company. If the director takes out more than they are owed, the DLA is overdrawn and the company has lent the director money.',
  },
  {
    slug: 'disallowable',
    term: 'Disallowable',
    short: "A P&L cost tax won't let you deduct.",
    long: "A cost in your P&L that isn't allowed as a deduction for corporation tax. Common examples: business entertainment, fines and penalties, depreciation. You add these back when computing taxable profit.",
  },
  {
    slug: 'dividend',
    term: 'Dividend',
    short: 'A distribution of post-tax profit to shareholders.',
    long: 'A distribution of profit from a company to its shareholders. Must be paid out of distributable reserves (retained profits after tax). Not an expense; never in the P&L. Sarah takes £25,000 in the year ended 31 March 2026.',
  },
  {
    slug: 'double-entry',
    term: 'Double entry',
    short: 'Every transaction has an equal debit and credit.',
    long: 'The fundamental rule of bookkeeping: every transaction has at least two sides, a debit and an equal credit. Pay £100 for software: software expense debit £100, bank credit £100.',
  },
  {
    slug: 'eris',
    term: 'ERIS',
    short: 'Enhanced R&D support for loss-making R&D-intensive SMEs.',
    long: 'Enhanced R&D Intensive Support: a more generous R&D regime for loss-making SMEs whose R&D is at least 30% of total spend. Gives an 86% additional deduction and a 14.5% payable credit. Acorn does not qualify.',
  },
  {
    slug: 'filleted-accounts',
    term: 'Filleted accounts',
    short: 'The cut-down accounts you may file at Companies House.',
    long: 'The shortened version of small/micro accounts you can file with Companies House — typically the balance sheet only, skipping the P&L. Shareholders and HMRC still get the full set.',
  },
  {
    slug: 'frs-102-1a',
    term: 'FRS 102 Section 1A',
    short: 'The small-company reporting standard (a step up from FRS 105).',
    long: 'The small-company regime standard for companies above the micro thresholds. From 6 April 2025 the small thresholds are turnover £15m, balance sheet £7.5m, employees 50 (meet any two).',
  },
  {
    slug: 'frs-105',
    term: 'FRS 105',
    short: 'The simplest UK reporting standard — for micro-entities.',
    long: 'The micro-entity reporting standard, the simplest UK regime. From 6 April 2025: turnover £1m, balance sheet £500k, employees 10 (meet any two). Acorn uses FRS 105.',
  },
  {
    slug: 'full-expensing',
    term: 'Full expensing',
    short: '100% first-year relief on new main-pool plant & machinery.',
    long: 'A 100% first-year allowance on new and unused main-pool plant and machinery. Permanent, companies only, no annual cap. Useful if you ever exceed the £1m AIA limit.',
  },
  {
    slug: 'fy2025',
    term: 'FY2025',
    short: 'Tax financial year: 1 April 2025 to 31 March 2026.',
    long: 'Financial Year 2025 runs 1 April 2025 to 31 March 2026. UK corporation-tax financial years are named after the calendar year they start in. FY2026 runs 1 April 2026 to 31 March 2027.',
  },
  {
    slug: 'general-ledger',
    term: 'General ledger',
    short: 'The complete record of every transaction, by account.',
    long: 'The complete record of every accounting transaction the company has ever posted, organised by account. Everything in the P&L, balance sheet and trial balance comes from here.',
  },
  {
    slug: 'government-gateway',
    term: 'Government Gateway',
    short: 'The HMRC / gov.uk login system.',
    long: 'The HMRC and gov.uk login system. You need a Gateway account (with the right HMRC services added) to file the CT600, the VAT return, and to set up PAYE.',
  },
  {
    slug: 'hmrc',
    term: 'HMRC',
    short: "His Majesty's Revenue and Customs — the UK tax authority.",
    long: "His Majesty's Revenue and Customs, the UK tax authority. Receives your CT600, your VAT return, and your PAYE submissions.",
  },
  {
    slug: 'ixbrl',
    term: 'iXBRL',
    short: 'Accounts tagged so HMRC computers can read them.',
    long: 'Inline eXtensible Business Reporting Language: a part-HTML, part-XML format that tags the numbers in your accounts and computation so HMRC’s computers can read them. Filing software does this for you automatically.',
  },
  {
    slug: 'limited-company',
    term: 'Limited company',
    short: 'A company whose owners’ liability is limited to their shares.',
    long: "A company whose shareholders' liability is limited to what they paid (or agreed to pay) for their shares. Most UK Ltds are private companies limited by shares. A separate legal person from its owner.",
  },
  {
    slug: 'main-rate',
    term: 'Main rate',
    short: 'The 25% corporation-tax rate above £250,000.',
    long: 'The headline corporation-tax rate of 25%, paid on taxable profits above £250,000.',
  },
  {
    slug: 'mtd',
    term: 'Making Tax Digital (MTD)',
    short: 'HMRC’s digital record-keeping programme.',
    long: "HMRC's programme for digital records and quarterly submissions. MTD for Corporation Tax is confirmed NOT going ahead. MTD for ITSA applies to sole traders/landlords from April 2026 but not to limited companies. MTD for VAT applies if VAT-registered.",
  },
  {
    slug: 'marginal-relief',
    term: 'Marginal relief',
    short: 'Smooths the jump from 19% to 25% between £50k and £250k.',
    long: 'The mechanism smoothing the transition between the 19% small-profits rate and 25% main rate, for profits between £50,001 and £250,000. Uses the fraction 3/200; the effective rate on profit in the band is 26.5%.',
  },
  {
    slug: 'micro-entity',
    term: 'Micro-entity',
    short: 'A company small enough for the FRS 105 regime.',
    long: 'A company small enough to qualify for FRS 105. From 6 April 2025: turnover £1m, balance sheet £500k, 10 or fewer employees (meet any two). Acorn qualifies comfortably.',
  },
  {
    slug: 'nic',
    term: 'NIC',
    short: 'National Insurance Contributions — a payroll tax.',
    long: "National Insurance Contributions, a separate payroll tax paid by employees, employers and the self-employed. Acorn pays no employer NIC in Weeks 1-4 because Sarah's £12,570 salary is below the secondary threshold.",
  },
  {
    slug: 'nominal-account',
    term: 'Nominal account',
    short: 'Any single account in the general ledger.',
    long: 'An old-school term for any single account in the general ledger, e.g. "Travel" or "Bank". Each has a number (nominal code) in most software.',
  },
  {
    slug: 'paye',
    term: 'PAYE',
    short: 'Pay As You Earn — collects tax & NIC from salaries.',
    long: "The system for collecting income tax and NIC from employees' salaries. A Ltd paying even a single director's salary must register for PAYE and file submissions every payday.",
  },
  {
    slug: 'profit-and-loss',
    term: 'Profit and loss (P&L)',
    short: 'Income minus costs over a period = profit.',
    long: "The statement showing income minus costs over the period, giving profit (or loss). Also called the income statement. Acorn's P&L for the year shows £74,800 turnover and £47,365 profit before tax.",
  },
  {
    slug: 'prepayments',
    term: 'Prepayments',
    short: 'Paying now for a future period — held on the balance sheet.',
    long: "The opposite of accruals. You've paid in this period for something relating to the next, so at year-end you move the future portion onto the balance sheet. Acorn prepays £240 of an annual software sub.",
  },
  {
    slug: 'rnd',
    term: 'R&D',
    short: 'Tax relief for genuine science/technology advances.',
    long: 'A regime giving extra relief for genuine scientific or technological advance. From April 2024 most companies use the merged scheme: a 20% above-the-line credit (RDEC-style). Loss-making intensive SMEs may use ERIS instead.',
  },
  {
    slug: 'rdec',
    term: 'RDEC',
    short: 'The above-the-line R&D credit — 20% from April 2024.',
    long: 'Research and Development Expenditure Credit, the above-the-line R&D credit. From 1 April 2024 the rate is 20% under the merged scheme.',
  },
  {
    slug: 'retained-earnings',
    term: 'Retained earnings',
    short: 'Accumulated profit not yet paid out as dividends.',
    long: 'All the profit a company has ever made, less all dividends ever paid. The part of equity that grows year by year. Sometimes labelled "profit and loss account" in the balance sheet.',
  },
  {
    slug: 's455',
    term: 's.455',
    short: 'Penal 33.75% tax on an overdrawn director’s loan.',
    long: "Section 455 CTA 2010: a tax of 33.75% (35.75% from 6 April 2026) on any overdrawn director's loan still outstanding 9 months and 1 day after the period end. Reclaimable when the loan is repaid.",
  },
  {
    slug: 'small-profits-rate',
    term: 'Small profits rate',
    short: 'The 19% corporation-tax rate up to £50,000.',
    long: 'The lower corporation-tax rate of 19%, charged on taxable profits up to £50,000.',
  },
  {
    slug: 'sole-director',
    term: 'Sole director',
    short: 'The only director of the company.',
    long: 'A director who is the only director of the company. Common in micro Ltds. Sarah is the sole director and sole shareholder of Acorn.',
  },
  {
    slug: 'statutory-accounts',
    term: 'Statutory accounts',
    short: 'The formal year-end accounts required by law.',
    long: 'The formal year-end accounts a company must produce under the Companies Act 2006, file with Companies House and submit with its CT600. Acorn uses the FRS 105 micro-entity format.',
  },
  {
    slug: 'trial-balance',
    term: 'Trial balance (TB)',
    short: 'Every account and its balance, debits = credits.',
    long: 'A list of every account in the general ledger and its balance at a point in time, in debit and credit columns. If the books are right, the columns are equal. The bridge from bookkeeping to accounts and tax.',
  },
  {
    slug: 'true-and-fair',
    term: 'True and fair view',
    short: 'The legal standard accounts must meet.',
    long: 'The legal standard for accounts: taken as a whole they give a reasonable reader a fair sense of what the company owns, owes and how it traded. Not every transaction need be perfect.',
  },
  {
    slug: 'utr',
    term: 'UTR',
    short: 'Your 10-digit Unique Taxpayer Reference.',
    long: 'Unique Taxpayer Reference: a 10-digit number HMRC issues to your company. Needed to file the CT600 and pay corporation tax. Companies and individuals each have their own.',
  },
  {
    slug: 'vat',
    term: 'VAT',
    short: 'Consumption tax; register above £90,000 turnover.',
    long: 'Value Added Tax, charged on most goods and services at 20%. You must register if taxable turnover crosses £90,000 in any rolling 12-month period. Acorn registers part-way through Week 5.',
  },
  {
    slug: 'wda',
    term: 'WDA',
    short: 'Writing-down allowance on the unused asset pool.',
    long: 'Writing-Down Allowance: the annual capital allowance on the unused part of your asset pool. Main pool 18% reducing balance; special rate pool 6%. Zero-emission cars get 100% first-year.',
  },
  {
    slug: 'webfiling',
    term: 'Companies House WebFiling',
    short: 'The free online portal for accounts & confirmation statements.',
    long: 'The free online portal for filing accounts and confirmation statements with Companies House. Remains free at least until 1 April 2027; a software-only mandate has been delayed.',
  },
]

export const glossary: GlossaryEntry[] = raw
  .map((e) => ({ ...e, letter: e.term.replace(/[^A-Za-z]/, '').charAt(0).toUpperCase() }))
  .sort((a, b) => a.term.localeCompare(b.term))

export const glossaryBySlug: Record<string, GlossaryEntry> = Object.fromEntries(
  glossary.map((e) => [e.slug, e]),
)
