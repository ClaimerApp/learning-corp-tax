# Shared Brief for Writers — UK Corporation Tax Tutorial

**Audience:** Complete beginners. No prior accounting or tax background. Tutorial is being written 28 May 2026 and is intended to become an interactive web-based tutorial.

**Tone:** Warm, plain English, explain jargon the first time you use it. Concrete worked numbers, not just principles. Encourage the reader; assume they're capable but new.

**Format:** Markdown. Use proper headings (##, ###). Use tables where they earn it. Code-block any sample journals or computations for clarity. Bold key terms on first introduction. Each week file should aim for ~3,000–5,000 words of substantive material.

**At the END of each week file include:**
- A "Common errors to watch for" section
- A "Mini quiz" of 5 questions (with answers in a collapsible details block or at file end)
- A "What's in your Xero" sidebar: tell the reader exactly where to click and what to look for in Xero for that week's topic
- A "What you'll know by the end of this week" learning-objectives box at the very top
- A short "Next week preview" footer

---

## The Worked Company — Use this consistently across ALL weeks

Use the same fictional company across Weeks 1–4. Week 5 keeps the same company but adds complexity (extra year, growth, an employee, VAT registration, R&D claim, director's loan issue).

### Company: **Acorn Studio Ltd**

- **Trade:** Freelance web design and branding for small UK businesses.
- **Director and sole shareholder:** Sarah Brown.
- **Incorporation date:** 1 April 2024.
- **Registered office:** 14 Bramble Lane, Bristol BS1 4AB.
- **Companies House registration:** 14123456 (fictional).
- **UTR (Unique Taxpayer Reference):** 1234567890 (fictional).
- **Accounting reference date:** 31 March (so first full year = 1 April 2024 – 31 March 2025; year covered by Weeks 1–4 = **1 April 2025 – 31 March 2026**).
- **Bookkeeping:** Xero, with bank feed from Starling Business.
- **VAT registered:** No in Weeks 1–4 (turnover below threshold). Yes in Week 5 (turnover crosses the £90,000 threshold mid-year).
- **Payroll:** Director-only salary of £12,570/year in Weeks 1–4. Adds one part-time employee in Week 5.
- **Pension:** Director makes nominal employer contributions to NEST in Week 5.

### Standard figures for the Acorn Studio Ltd year ended 31 March 2026 (Weeks 1–4)

Use these consistently. Round numbers are intentional for teaching.

| Item | Amount |
|---|---|
| Turnover (sales) | £74,800 |
| Cost of sales (subcontractor designer) | £6,000 |
| Office rent (co-working space) | £3,600 |
| Software subscriptions (Adobe, Figma, etc.) | £1,440 |
| Phone & internet | £960 |
| Travel (UK trains, taxis) | £520 |
| Business entertainment (lunches with clients) | £380 |
| Staff entertainment (Christmas dinner, just Sarah + a friend) | £0 |
| Accountancy fees (paid to small local firm) | £900 |
| Bank charges | £120 |
| Use-of-home flat rate | £312 |
| Director's salary (gross) | £12,570 |
| Employer's NIC on salary | £0 (under secondary threshold for 2025/26) |
| Depreciation (laptop + desk over 3 years) | £633 |
| **Profit before tax (per accounts)** | **£47,365** |
| Dividends declared in year | £25,000 |
| Bank balance at year-end | £18,420 |
| Trade debtors at year-end | £4,800 |
| Trade creditors at year-end | £1,150 |
| Accruals at year-end (accountancy fee) | £900 |
| Prepayments at year-end (software annual sub) | £240 |

### Fixed assets purchased on 1 April 2025
- MacBook Pro: £1,500
- Standing desk + chair: £400
- **Total: £1,900** (all qualify for Annual Investment Allowance)

### Adjustments needed (preview — covered in detail in Week 3)
- Add back depreciation: +£633
- Add back business entertaining: +£380
- Less capital allowances (AIA on £1,900): −£1,900
- **Taxable profit:** £47,365 + £633 + £380 − £1,900 = **£46,478**
- Corporation tax at 19% (small profits rate): **£8,830.82** → round to **£8,831**

### Filing dates for the year
- **Accounting period:** 1 April 2025 to 31 March 2026
- **Corporation tax due:** 1 January 2027
- **CT600 due to HMRC:** 31 March 2027
- **Accounts due to Companies House:** 31 December 2026
- **Confirmation statement:** within 14 days of the company's "review period" anniversary

---

## Week 5 — added complexity (uses same Acorn Studio Ltd, year ended 31 March 2027)

- Turnover grows to £124,000; VAT-registered from 1 October 2026.
- Sarah hires Tom as a part-time designer from 1 July 2026. Tom's salary: £22,000 (pro-rata 9 months = £16,500 in the period).
- Employer NIC kicks in on Tom's salary.
- Sarah takes £42,000 in dividends.
- An overdrawn director's loan of £4,200 builds up during the year through personal card spending — triggers a CT600A and a discussion of s.455.
- Sarah pays £400/month into NEST as employer pension contributions (£4,800 for the year).
- A new MacBook Pro for Tom: £2,200 (qualifies for AIA / full expensing).
- Acorn Studio Ltd spends £8,000 on developing a custom Figma plugin for an internal workflow — Sarah wonders whether it's R&D (it isn't, but we use the question to teach the merged-scheme rules and rule it out properly).
- Office rent rises; new pro-rata co-working space contract.

---

## Critical UK tax facts to use consistently (verified May 2026)

### Corporation Tax rates and thresholds (FY2025 and FY2026 — unchanged)
- **Small profits rate:** 19% on taxable profits up to **£50,000**.
- **Main rate:** 25% on taxable profits over **£250,000**.
- **Marginal relief** between £50,001 and £250,000 — fraction **3/200**.
- Effective marginal rate in the band: **26.5%**.
- Thresholds **divided by (number of associated companies + 1)** and **time-apportioned** for periods shorter than 12 months.
- HMRC's marginal relief calculator: https://www.tax.service.gov.uk/marginal-relief-calculator

### Key deadlines (for a normal small company that doesn't pay by quarterly instalments)
- **Pay corporation tax:** 9 months and 1 day after end of the accounting period.
- **File CT600:** 12 months after end of the accounting period.
- **File statutory accounts with Companies House:** 9 months after the accounting reference date (private company; 21 months for the first set if newly incorporated).
- **File statutory accounts with HMRC:** with the CT600 (12 months).
- **Confirmation statement:** within 14 days of the end of each 12-month "review period".

### Important upcoming changes
- **HMRC CATO (free joint filing) service closes 31 March 2026.** From 1 April 2026, companies must use commercial software to file the CT600 and iXBRL accounts/computation with HMRC.
- **Companies House WebFiling for accounts** remains free until at least 1 April 2027 (the originally planned software-only mandate has been delayed; timing under review as of Jan 2026).
- **Making Tax Digital for Corporation Tax has been confirmed NOT going ahead** (HMRC Transformation Roadmap, July 2025). MTD for ITSA still applies to sole traders/landlords from April 2026 but does **not** apply to limited companies.

### Capital allowances (FY2025/26)
- **Annual Investment Allowance (AIA):** £1,000,000 permanent.
- **Full Expensing (100% FYA on new and unused main-pool plant & machinery):** permanent, companies only, unlimited.
- **50% FYA on special rate expenditure:** permanent, companies only.
- **WDA main pool:** 18% reducing balance; **special rate pool:** 6% reducing balance.
- Cars: no AIA / no full expensing. WDA only (rate by CO2 emissions). 100% FYA for zero-emission cars.

### Micro-entity (FRS 105) thresholds — from 6 April 2025 (meet 2 of 3)
- Turnover ≤ **£1m**
- Balance sheet total ≤ **£500k**
- Employees ≤ **10**

### Small company (FRS 102 Section 1A) thresholds — from 6 April 2025 (meet 2 of 3)
- Turnover ≤ **£15m**
- Balance sheet total ≤ **£7.5m**
- Employees ≤ **50**

### Companies House late-filing penalties (private company)
- Up to 1 month: £150
- 1–3 months: £375
- 3–6 months: £750
- Over 6 months: £1,500
- Doubles if late two years in a row.

### CT600 late-filing penalties (from 1 April 2026 — doubled)
- 1 day late: £200
- 3 months late: a further £200 (total £400)
- 6 months late: + 10% of unpaid tax (HMRC estimate)
- 12 months late: + another 10% of unpaid tax

### Other tax facts
- **Directors' loan account (s.455 tax):** charged at **33.75%** on any overdrawn DLA balance at the period end that isn't repaid within 9 months and 1 day. Reclaimable when the loan is repaid. (Rate rises to 35.75% from 6 April 2026.)
- **Dividend tax rates (2025/26):** 8.75% ordinary, 33.75% upper, 39.35% additional. Dividend allowance: £500. (From 6 April 2026: 10.75% / 35.75% / 39.35%.)
- **Business entertainment:** not deductible for corporation tax (CTA 2009 s.1298).
- **R&D — Merged scheme** (periods beginning on or after 1 April 2024): 20% above-the-line credit (RDEC-style). Loss-making R&D-intensive SMEs (R&D ≥ 30% of total expenditure) get Enhanced R&D Intensive Support (ERIS): 86% additional deduction, 14.5% payable credit on surrendered loss.
- **VAT registration threshold (from 1 April 2024):** £90,000 of taxable turnover on a rolling 12-month basis.

### Filing software realistic for a tiny DIY Ltd
- **TinyTax** — from ~£20/year. Self-filer focus.
- **Easy Digital Filing** — pay-per-submission and subscription options.
- **Taxpipe** — ~£59 per filing one-off.
- **FreeAgent** — if already using for bookkeeping; built-in CT600 + micro accounts filing for simple cases.
- **TaxCalc / Andica / BTC** — established, more accountant-flavoured.

### Trial balance → CT600 boxes (simplest mapping)
- Sales / turnover → **Box 145**
- Trading profit (tax-adjusted) → **Box 165**
- Total taxable profits → **Box 235** (and **Box 305** if no further reliefs)
- CT charge → **Box 430**
- Marginal relief → **Box 435** (if applicable)
- Net CT payable → **Box 525**

### CT600 supplementary pages a tiny Ltd is most likely to encounter
- **CT600A** — Loans to participators (director's loan overdrawn at year-end)
- **CT600L** — R&D claims

(Most tiny Ltds need neither.)

---

## Glossary terms to define on first use (link to glossary file)

Common, Sole Director, Limited Company, FY2025, Statutory Accounts, Trial Balance, Profit and Loss, Balance Sheet, General Ledger, Nominal Account, Chart of Accounts, Bank Reconciliation, Aged Receivables/Payables, Accruals, Prepayments, Depreciation, Capital Allowances, AIA, Full Expensing, WDA, Disallowable, Add-back, Marginal Relief, Small Profits Rate, Main Rate, Associated Companies, Accounting Period, CTAP, Corporation Tax Return (CT600), iXBRL, FRS 105, FRS 102 Section 1A, Micro-entity, Filleted Accounts, Director's Loan Account (DLA), s.455, Dividend, PAYE, NIC, VAT, MTD, Government Gateway, UTR, R&D RDEC, ERIS, Companies House WebFiling, CATO, Confirmation Statement.

---

## Tutorial structure (so each week file fits the whole)

- **README.md** — Index + how to use the tutorial + glossary link.
- **Week-01-Books-and-Trial-Balance.md** — Bookkeeping outputs from Xero, P&L, BS, TB, GL, fixed asset register, bank rec, aged debt; concepts of double entry, accruals.
- **Week-02-Micro-Entity-Accounts.md** — FRS 105 micro accounts: what they look like, year-end adjustments, mapping Xero TB to statutory headings.
- **Week-03-Tax-Adjustments.md** — Accounting profit → taxable profit: disallowables, depreciation vs capital allowances, marginal relief.
- **Week-04-CT600-and-Filing.md** — Filing the dummy CT600 + iXBRL accounts using budget software; Government Gateway; Companies House.
- **Week-05-Messy-Example.md** — VAT, payroll, director's loan, dividends, R&D, mixed-use; how to spot and fix common Xero errors.
- **Glossary.md** — Plain-English definitions for each term above.

## Conventions

- Tone: warm but precise. Plain English. Don't talk down.
- Use £ throughout. Don't write "pounds".
- Avoid em dashes — Adam prefers normal dashes only.
- No emojis.
- Date format: DD Month YYYY (e.g., 31 March 2026).
- When introducing jargon: **bold the term** and define it inline. Repeat the definition in the glossary file.
- When citing a rule, cite it once (e.g., "CTA 2010 s.18A"). Don't bury readers in references.
- Use *callout boxes* sparingly. Use a blockquote ">" with a leading **Tip:** / **Warning:** / **Worked example:** prefix.

