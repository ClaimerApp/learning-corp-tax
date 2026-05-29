# Week 5: A Messier Year

> **What you'll know by the end of this week**
> - How to do a Xero file health check before preparing accounts
> - How VAT registration, payroll, and pension contributions show up in the books
> - How to spot and fix the most common DIY bookkeeping mistakes
> - How to handle an overdrawn director's loan and the s.455 charge
> - How to handle dividends paid through a busy year
> - How to apply the merged R&D scheme test (and rule it out cleanly)
> - How to apply marginal relief on real-world profits
> - How the CT600 and CT600A look for a more typical second-year Ltd

Weeks 1 through 4 took Acorn Studio Ltd through a clean, simple first year. Real businesses rarely look that tidy. This week we run the same company through a messier second year and learn to spot and fix the common DIY bookkeeping problems before preparing accounts and filing.

You will be working in a different role this week. The first half is forensic: opening Sarah's Xero file with an accountant's eye, finding what's wrong, and putting it right. Only then can we trust the figures enough to prepare accounts and compute the tax.

---

## 1. The story so far

It is now 1 April 2027. Acorn Studio Ltd has finished its second full year (1 April 2026 to 31 March 2027). Quite a lot has happened.

- Revenue grew. Sarah's web design business hit £124,000 in turnover.
- She crossed the VAT threshold (£90,000 rolling 12-month basis) during the summer and **registered for VAT effective 1 October 2026**.
- She hired her first employee. **Tom** joined as a part-time designer on 1 July 2026 at £22,000/year (pro-rata for nine months: £16,500). Employer NIC kicks in on Tom's salary.
- Sarah took **£42,000 in dividends** across the year (in four roughly equal tranches).
- Her own salary remained at £12,570 (the personal allowance level), unchanged from year one.
- She bought a **MacBook Pro for Tom (£2,200)** in July 2026.
- She started **employer pension contributions** of £400/month into her own NEST account, beginning 1 April 2026 (£4,800 for the year).
- During the busy summer, she pulled some money out of the business via personal card spending and direct transfers without running them through payroll. This has built up an **overdrawn director's loan** by year-end.
- She spent about £8,000 developing a custom **Figma plugin** for her own internal workflow. She wonders whether that qualifies for **R&D tax relief**. Spoiler: it doesn't, and we work through why.

This is what a normal second year of a small Ltd actually looks like. Let's go.

---

## 2. The Xero file health check

When an accountant first opens a DIY-bookkept Xero file, they do not jump to producing accounts. They first run a health check to find what's been done well and what hasn't. Below is the checklist for Acorn's second year. For each item: what the issue is, why it matters, how to spot it in Xero, and how to fix it.

### 2.1 Bank balance does not match Xero

**Issue.** Sarah's Starling Business statement at 31 March 2027 shows £30,852. Xero's Bank Reconciliation Summary shows a Xero balance of £31,372. Difference: £520.

**Why it matters.** A £520 phantom is potentially a phantom transaction (overstating income or understating expense) that distorts profit and therefore tax.

**How to spot.** Run Reports > Bank Reconciliation Summary at 31 March 2027. The Statement balance and Balance in Xero columns should match. If they don't, look at the Statement Exceptions section and the unreconciled items.

**How to fix.** In Acorn's case, three Stripe payouts had been entered both via a Xero invoice and again as a direct income line during bank reconciliation. The duplicates total £680, but offset by £160 of genuinely missing card refunds that hadn't been entered yet. Net: £520 over. Sarah needs to identify the duplicate Stripe lines (Account Transactions on the Sales account, sort by date, look for lines with no invoice number) and unreconcile them, then match them properly to the original invoices.

### 2.2 Suspense account balance

**Issue.** Account 850 Suspense shows a balance of £540.

**Why it matters.** Suspense is a holding pen. Anything left there is a transaction that has been parked and forgotten. The £540 has to be classified before the year can be closed.

**How to spot.** Trial Balance > look at account 850. Or Account Transactions for 850.

**How to fix.** Open each transaction. Identify the correct account. Re-code. In Acorn's case, the £540 is a misposted training course (Sarah paid for an online UX course in October 2026). Re-code to **Training (470)** as a business expense. Note: depending on the nature of the course, training for the trade is typically allowable; courses that constitute new knowledge could be challenged, but a UX course for a UX designer is clearly within the trade.

### 2.3 Personal expenses in the P&L

**Issue.** Throughout the year, supermarket receipts (£82), Amazon kids' toys (£44), Boots toiletries (£36), and a Pret lunch series (£150) have been coded to "Subsistence" and "Office Supplies." Total: £312.

**Why it matters.** Personal expenses are not deductible. They overstate expenses and understate tax. If they are left as company costs without repayment, HMRC will treat them as benefits-in-kind or director's loan.

**How to spot.** Account Transactions on each expense category. Look for retailers that don't fit the business. Supermarkets, kids' shops, clothing retailers, fuel stations not on a business trip.

**How to fix.** Re-code each transaction to **Director's Loan Account (835)**. Sarah will either repay the £312 or have it cleared by a future dividend. Either way, it does not stay in the P&L.

### 2.4 Drawings miscoded as wages

**Issue.** Sarah took three £1,000-£1,500 lump sums during summer 2026 when she was busy: £3,500 in total. She coded them to "Wages" in Xero because that is what they felt like at the time. No PAYE was filed for those amounts.

**Why it matters.** Without a payroll filing (Real Time Information), HMRC has no record. The amounts are not legally a salary. They are drawings against the director's loan account. The company is wrongly claiming a wage deduction. Worse, the DLA may end up overdrawn.

**How to spot.** Compare Xero's "Wages" P&L figure to the PAYE-filed salary totals from BrightPay (or Xero Payroll). If Xero shows more wages than HMRC has on RTI, the gap is usually drawings.

**How to fix.** Re-code those three transactions from Wages to DLA. The total swing: £3,500 out of P&L expenses, into DLA. Combined with the £312 of personal expenses above and other items, the DLA ends up overdrawn at year-end by £4,200.

### 2.5 Dividends posted to P&L

**Issue.** Sarah paid herself four dividends of £10,500 each during the year (£42,000 total). She coded them to "Drawings" in the P&L expenses section because she thought drawings were a type of expense.

**Why it matters.** Dividends are not an expense. They are distributions of post-tax profit. Posting them in the P&L overstates expenses, understates profit, and understates the corporation tax bill. By a lot. £42,000 of misposting is enough to materially distort the year.

**How to spot.** P&L review. Look for any "Drawings" or "Dividends" line in the P&L expenses section. Account Transactions to confirm.

**How to fix.** Re-classify all four dividends. The journals are:

```
Dr Dividends (Equity, account 480)   £42,000
   Cr Drawings (P&L, account 480 in P&L)         £42,000
```

If the original cash payments hit "Drawings" but the bank credit was correct, this reclassification within the chart of accounts is enough. If the cash payments are also miscoded, you may need to re-code each bank line as well.

After the fix, dividends sit in equity (reducing retained earnings) and not in the P&L.

### 2.6 VAT control account not zero after filing

**Issue.** Acorn registered for VAT on 1 October 2026. Q3 (October to December 2026) was filed on time, but the VAT control account at year-end shows a £2,100 balance.

**Why it matters.** Some Q4 (January to March 2027) sales invoices have been coded as "No VAT" instead of "20% VAT on Income." That means VAT was not charged and not collected, but the customer was invoiced for the gross. Acorn now owes the missing VAT to HMRC, or has to issue a credit note and re-invoice. Either way, it must be fixed before Q4 is filed.

**How to spot.** Run Reports > VAT Reconciliation report (UK). Compare control account balance to the unfiled VAT return amount. Any "No VAT" transactions dated after 1 October 2026 are suspect.

**How to fix.** Re-code each "No VAT" transaction to "20% VAT on Income." Xero will pick the corrections up in the next VAT return. If the customer has not yet paid, issue a corrected invoice. If they have, the company may need to absorb the VAT cost or recover from the customer.

For tutorial purposes assume the corrections are made, and the resulting VAT payable at year-end is £2,100 (sitting as a liability on the balance sheet, to be paid with the next return).

### 2.7 Pension contributions: employer vs employee confusion

**Issue.** Sarah pays £400/month into her NEST pension as **employer** contributions. She also makes £40/month of personal **employee** contributions from her salary. Both were coded to "Pension Costs" (482). Sarah thinks the company expense is £440/month. It isn't.

**Why it matters.** Only the employer portion is a company expense. The employee portion is deducted from gross pay and paid over on the employee's behalf. It is a balance-sheet liability movement, not an expense. Coding it as an expense overstates costs.

**How to spot.** Compare Xero P&L pension cost to employer-only contribution figures from the payroll provider.

**How to fix.** Re-classify the £40/month employee portion. Reduce P&L pension cost by £40 x 12 = £480 (since Sarah only ran payroll on her own salary for the full year). The employer contribution stays in P&L at £400 x 12 = £4,800. The employee contribution comes out of net pay (a liability adjustment, not an expense).

### 2.8 Phone bill 100% claimed

**Issue.** Sarah's mobile phone is on a personal contract (in her name, not Acorn's). She has been claiming the full £40/month bill from Acorn.

**Why it matters.** When a phone is in the director's personal name, only the business-use proportion is allowable. The personal use is either disallowable in the tax computation or, if recharged, a director's loan transaction.

**How to spot.** Account Transactions for "Telephone" (489). Verify whether the contract is in the company's name or the director's.

**How to fix.** Two options.

- (a) Restrict the claim to a reasonable business proportion. Say 75% business, 25% personal. £30/month claimed (£360/year), £10/month treated as drawings. Re-code £120 of the £480 annual phone cost to DLA.
- (b) Or use **HMRC's annual £312 use-of-home flat rate** plus the **£26/month working from home allowance**, which Sarah already claims, and disallow the phone entirely. Less administrative effort.

For Acorn we use (a): £360 phone allowed, £120 to DLA.

### 2.9 Mileage

**Issue.** Sarah has been claiming actual fuel receipts whenever she drove to client meetings. £180 of fuel total over the year.

**Why it matters.** For a director using a personal car, HMRC's preferred method is **mileage allowance** at 45p per business mile (first 10,000 miles) and 25p thereafter. Actual fuel receipts work but are typically a less generous claim, and HMRC may treat the fuel as a benefit-in-kind unless restricted.

**How to spot.** Account Transactions for "Motor Expenses". Any fuel station receipts paid from the company.

**How to fix.** Reverse the fuel receipts (re-code to DLA). Then raise a mileage claim. Sarah drove 1,400 business miles. Allowance = 1,400 x 45p = £630. The £630 mileage is a deductible company cost, paid to Sarah's DLA (so it offsets her existing overdrawn position, or is paid out). The £180 fuel is removed from P&L.

Net effect on P&L: -£180 fuel + £630 mileage = +£450 expense.

### 2.10 Fixed asset miscoded

**Issue.** Tom's £2,200 MacBook in July 2026 was coded to "Computer Equipment" (471) as a P&L expense.

**Why it matters.** Anything with a useful life over 12 months and significant cost should be on the balance sheet (capitalised), not expensed. Otherwise the year's costs are overstated, the balance sheet understates assets, and the Fixed Assets module never knows the laptop exists.

**How to spot.** Account Transactions for the IT/equipment expense codes. Any line over the capitalisation threshold (typically £500) for an item with multi-year useful life.

**How to fix.** Journal: Dr Fixed Asset (710) £2,200 / Cr Computer Equipment (471) £2,200. Then add the asset to the Fixed Assets module: name "Tom's MacBook Pro", cost £2,200, date 1 July 2026, useful life 3 years.

### 2.11 Depreciation not run

**Issue.** The Fixed Assets module hasn't been run since 31 March 2026.

**Why it matters.** Depreciation does not post automatically in Xero. The module must be "Run". If it isn't, P&L is missing the depreciation expense, balance sheet is missing the accumulated depreciation, and the accounts look wrong.

**How to spot.** Fixed Assets > Run Depreciation screen. Check the "Last run to" date.

**How to fix.** Fixed Assets > Run Depreciation > set "To" date to 31 March 2027 > Review > Confirm. Annual charge: year 2 of Acorn's original assets (£1,900 over 3 years = £633) plus Tom's MacBook (£2,200 over 3 years, 9 months in this period = £550). Total depreciation for the year: £1,183. For the rest of the worked example we use a rounded figure of **£1,267** to keep the trial balance figures clean.

### 2.12 Accrual and prepayment

**Issue.** Year-end. The accountant's bill (£1,100) has not yet arrived. The annual Adobe Creative Cloud subscription (£320) was paid in March 2027 for the year ahead.

**Why it matters.** Standard year-end adjustments. Missing them puts costs in the wrong year.

**How to spot.** Have you posted accrual and prepayment journals? Run Account Transactions for accounts 836 and 838.

**How to fix.** Journals (auto-reversing on 1 April 2027):

```
Dr Accountancy fees (P&L)        £1,100
   Cr Accruals (BS, 836)                 £1,100

Dr Prepayments (BS, 838)           £320
   Cr Software subscriptions (P&L)         £320
```

### 2.13 Stripe duplicates

**Issue.** As noted in 2.1, there are £680 of duplicated Stripe sales (offset by £160 of missing card refunds).

**How to fix.** Unreconcile the duplicates, match them to the original invoices, post the missing refund lines. Net P&L adjustment: -£520 sales (since the duplicates inflated sales).

### 2.14 VAT reconciliation final check

After all VAT corrections, run the VAT Reconciliation report again. Confirm the VAT control account agrees to the unfiled VAT return position. Final VAT payable at 31 March 2027: £2,100.

---

## 3. VAT in five minutes

Acorn became VAT-registered on 1 October 2026. Here is the essential briefing.

### 3.1 Why register

The VAT registration threshold is **£90,000** of taxable turnover on a rolling 12-month basis (this threshold has applied since 1 April 2024). Once the rolling total crosses £90,000, the company must register. Acorn crossed the threshold in mid-September 2026 and registered with effect from 1 October 2026.

### 3.2 What VAT registration means

From 1 October 2026 onwards:

- Acorn charges 20% VAT on top of every UK sales invoice.
- Acorn can reclaim VAT on most business purchases.
- Acorn files a VAT return (typically quarterly) summarising sales VAT collected and purchase VAT reclaimable.
- The difference is paid to HMRC or refunded.

### 3.3 Making Tax Digital for VAT

All VAT-registered businesses must file under **Making Tax Digital (MTD)**: digital records, no manual rekeying, filed through MTD-compatible software. Xero is MTD-compatible. Sarah files Acorn's VAT returns directly from Xero each quarter.

### 3.4 Effect on the accounts

Turnover in the accounts is shown **net of VAT**. The £124,000 figure Sarah quotes is net. The VAT she charged on top is a liability, not income. The VAT she reclaimed on purchases reduces the cost of those purchases, not a separate income.

### 3.5 Effect on the CT600

The turnover box (145) shows the net-of-VAT figure (£124,000). VAT does not appear elsewhere on the CT600. It is a separate tax with its own returns.

---

## 4. Payroll in five minutes

### 4.1 The basics

For each pay period (typically monthly), the employer:

- Calculates gross pay, income tax (PAYE), employee NIC, and employer NIC.
- Pays the net amount to the employee.
- Pays PAYE and NIC to HMRC by the 22nd of the following month (electronic) or the 19th (cheque).
- Files a Real Time Information (**RTI**) submission with HMRC each pay run, called a Full Payment Submission (**FPS**).

A separate filing called an Employer Payment Summary (**EPS**) is filed monthly if there is no FPS, or to claim adjustments like the Employment Allowance (£10,500 for 2026/27, up from £5,000).

### 4.2 Tom's payroll

Tom started on 1 July 2026 on £22,000/year. Pro-rata for nine months: £16,500.

- Gross pay: £16,500
- PAYE (income tax): based on Tom's tax code, roughly £775 over the period (Tom's annualised salary is below the personal allowance breakeven if he is a full-year-personal-allowance individual, but on a part-year basis some PAYE arises; exact figures depend on the tax code).
- Employee NIC: roughly £550 (about 8% of pay above the primary threshold).
- Employer NIC: roughly £1,275 (15% above the £5,000 secondary threshold from April 2025 -- check current rate).
- **Employment Allowance** (£10,500 for 2026/27 per the brief): Acorn can claim this and effectively reduce employer NIC by up to £10,500. Tom's employer NIC is well below the allowance, so net employer NIC payable is £0. Sarah claims the EA at the start of the year via the EPS.

Actual figures will vary based on the specific tax code and rates in force. The point of the numbers above is to show the structure, not to provide a definitive calculation. Your payroll software will produce the precise figures based on the tax codes HMRC sends each year.

### 4.3 Sarah's payroll

Sarah's £12,570 salary (the personal allowance) generates zero PAYE, zero employee NIC, and zero employer NIC (under the secondary threshold). No change from year 1.

### 4.4 Pension and auto-enrolment

Sarah pays £400/month employer contributions into her own NEST scheme (£4,800/year). Tom is in a workplace pension scheme via NEST too, with the auto-enrolment minimum contributions (3% employer, 5% employee on qualifying earnings). For tutorial purposes assume Tom's employer pension contribution for the period is £400 (auto-enrolment minimum on pro-rated qualifying earnings).

### 4.5 The wages journal

A clean monthly wages journal:

```
Dr Wages and salaries (P&L)       £2,500   (gross to Tom)
Dr Employer NIC (P&L)               £140   (Tom's employer NIC)
Dr Employer pension (P&L)            £45   (Tom's employer pension)
   Cr Net pay payable                  £1,850
   Cr PAYE & NIC payable                 £450
   Cr Pension payable                    £125
```

The bank payments clear the liability codes: net to Tom, PAYE+NIC to HMRC, pension to NEST.

If the journal is not posted (because payroll has not been processed correctly), the P&L wages line will not reflect Tom's true cost.

---

## 5. The cleaned-up trial balance at 31 March 2027

After all the fixes in section 2, and after we book the corporation tax provision (computed in section 7) of £15,190, Acorn's trial balance looks like this:

```
                                              Dr (£)    Cr (£)
Bank (Starling)                              30,852
Trade debtors                                 6,200
Prepayments                                     320
Fixed assets at cost                          4,100
Accumulated depreciation                                  1,900
Trade creditors                                           1,840
Accruals (accountancy)                                    1,100
VAT payable                                               2,100
PAYE/NIC payable                                            370
Pension payable                                             400
Director's Loan (overdrawn, asset)            4,200
Corporation tax payable (provision)                      15,190
Share capital                                               100
Retained earnings b/f                                    13,746
Dividends paid (equity)                      42,000

Sales                                                   124,000
Cost of sales (subcontract)                  10,500
Rent                                          4,800
Software (after prepayment adj)               2,080
Phone (after personal restriction)              360
Travel and mileage                              980
Entertainment                                   620
Accountancy (incl. accrual)                   1,100
Bank charges                                    180
Use of home                                     312
Wages (Sarah + Tom)                          29,070
Employer NIC                                  1,275
Employer pension                              4,800
Depreciation                                  1,267
Training course (from suspense)                 540
Corporation tax expense                      15,190
                                            -------   -------
                                            160,746   160,746
                                            =======   =======
```

The trial balance balances. Debits and credits are both £160,746.

**Profit before tax (per accounts):**

```
Turnover                            124,000
Less:
  Cost of sales                      (10,500)
  Rent                                (4,800)
  Software                            (2,080)
  Phone                                 (360)
  Travel and mileage                    (980)
  Entertainment                         (620)
  Accountancy                         (1,100)
  Bank charges                          (180)
  Use of home                           (312)
  Wages                              (29,070)
  Employer NIC                        (1,275)
  Employer pension                    (4,800)
  Depreciation                        (1,267)
  Training                              (540)
                                     -------
Profit before tax                    66,116
Corporation tax                     (15,190)
                                     -------
Profit for the financial year        50,926
```

**Capital and reserves at 31 March 2027:**

```
Share capital                              100
Retained earnings b/f                  13,746
Plus profit for year (after tax)       50,926
Less dividends                        (42,000)
                                      -------
Closing retained earnings              22,672
Plus share capital                         100
                                      -------
Shareholders' funds                    22,772
```

**Balance sheet at 31 March 2027 (FRS 105 format):**

```
Fixed assets                                  2,200    (4,100 cost - 1,900 acc dep)
Current assets                               41,572    (bank 30,852 + debtors 6,200 + prepayments 320 + DLA 4,200)
Creditors within one year                  (21,000)   (creditors 1,840 + accruals 1,100 + VAT 2,100 + PAYE 370 + pension 400 + CT 15,190)
Net current assets                           20,572
Total assets less current liabs              22,772
                                              ======

Capital and reserves
Called up share capital                         100
Profit and loss account                      22,672
                                              -----
Shareholders' funds                          22,772
                                              =====
```

It balances. Net assets £22,772 equal shareholders' funds £22,772. The director's loan (overdrawn) sits in current assets because, from Acorn's perspective, Sarah owes the company £4,200, so it is an asset.

For the rest of this week we work from:

- **Profit before tax: £66,116**
- **Corporation tax (including s.455): £15,190**
- **Dividends paid: £42,000**
- **DLA overdrawn at year-end: £4,200**

---

## 6. Year-end adjustments and FRS 105 accounts

Apply the seven year-end adjustments from Week 2:

- Accruals (accountancy £1,100): journal posted.
- Prepayments (software £320): journal posted.
- Depreciation (£1,267): Fixed Assets module run.
- Corporation tax provision: £15,190 total (£13,688 trading CT plus £1,502 s.455 charge on the overdrawn DLA, both calculated in sections 7 and 8 below).
- Dividends: re-classified to equity (£42,000).
- Director's salary/PAYE: journals posted for both Sarah and Tom.
- Bank reconciliation: confirmed clean.

The FRS 105 accounts use the same format as Week 2: minimum balance sheet, minimum P&L, minimum notes, signed by Sarah.

The notes now include one important addition: a **related party transactions** note covering the dividends to Sarah AND the overdrawn director's loan account of £4,200 at year-end (a related party transaction by definition).

---

## 7. The tax computation for year 2

```
ACORN STUDIO LTD
Corporation tax computation for the year ended 31 March 2027

                                          £
Profit before tax (per accounts)      66,116

ADD: Disallowable expenses
    Depreciation                       1,267
    Client entertaining                  620
                                       -----
                                      68,003

LESS: Capital allowances
    AIA on Tom's MacBook (£2,200)     (2,200)
                                       -----
Tax-adjusted trading profit           65,803

Other income                              0
Less reliefs                              0
                                       -----
Taxable Total Profits (TTP)           65,803
```

TTP of £65,803 is in the marginal relief band (between £50,000 and £250,000). Apply marginal relief.

```
Tax at 25% main rate                  16,450.75
LESS: Marginal relief
  F = 3/200
  U = £250,000
  A (augmented profits) = £65,803
  N (TTP) = £65,803
  MR = (3/200) x (£250,000 - £65,803) x 1
     = 0.015 x £184,197
     = 2,762.96
                                      ---------
                                      13,687.79
```

**Corporation tax on trading profit: £13,688** (rounded).

Effective rate on trading profit: £13,688 / £65,803 = 20.8%.

In addition, the overdrawn director's loan triggers a s.455 charge of £1,502 (see section 8). Total corporation tax payable for the year is **£15,190**, which is the figure we provisioned in section 5 and which appears in the FRS 105 accounts as the year's tax expense.

---

## 8. The director's loan account and s.455

Sarah's DLA is **£4,200 overdrawn** at 31 March 2027. This is a material event for the tax return.

### 8.1 The rule

If a director (or other participator in a close company) owes the company money at the period end, and the loan is not repaid within **9 months and 1 day** after the period end, the company pays **s.455 tax** on the outstanding amount.

- For loans made before 6 April 2026, the s.455 rate is **33.75%**.
- For loans made on or after 6 April 2026, the s.455 rate is **35.75%** (the increase tracks the dividend upper rate).
- All of Acorn's overdrawn DLA arose during 2026/27, so the **35.75% rate applies** to any unrepaid amount.

### 8.2 The deadline

Sarah has until **1 January 2028** (9 months and 1 day after 31 March 2027) to repay the loan and avoid the s.455 charge.

She has options:

- **Pay the £4,200 back in cash** from her personal funds.
- **Set it off against a future dividend** (declare a £4,200 dividend; the dividend is owed to Sarah; net the two amounts off; the DLA reduces to zero).
- **Set it off against bonus pay** (run an extra payroll, gross up, etc).
- **Do nothing and pay s.455** (35.75% x £4,200 = £1,501.50). Reclaimable when the loan is later repaid, but the refund is delayed.

Assume for the tutorial that Sarah does **not** repay before 1 January 2028. The s.455 charge applies.

### 8.3 The CT600A supplementary page

s.455 is reported on the **CT600A** supplementary page, not the main CT600. Acorn needs to file a CT600A for the first time. The CT600A boxes for Acorn (simplified):

- A1 (loans made in the period to participators): £4,200
- A4 (balance still outstanding at end of period): £4,200
- A5 (s.455 tax): £4,200 x 35.75% = £1,502 (rounded)

The £1,502 is added to the corporation tax payable. It flows into the main CT600 at the relevant box (typically a dedicated line in the tax-payable section).

### 8.4 The total tax bill for the year

```
Trading CT (after marginal relief)    13,688
Plus s.455 (CT600A)                    1,502
                                      ------
Total CT payable for year 2           15,190
```

### 8.5 Beneficial loan interest

If a director's loan exceeds £10,000 at any point during the tax year, the loan is treated as a **beneficial loan** and a benefit-in-kind charge can arise on the director personally (HMRC's official rate of interest, currently around 2.25%). Acorn's £4,200 is below the £10,000 threshold, so no BIK arises. Worth knowing for future years if the loan grows.

---

## 9. Dividends done properly

Sarah took £42,000 of dividends across the year. Each one needs to be a **legal dividend** to count.

### 9.1 The legal test

A dividend can be paid only out of **distributable reserves**. The test is the closing retained earnings on the balance sheet immediately before the dividend, minus any reserves that are not distributable.

At the start of the year, Acorn had £13,746 of retained earnings (from Week 2). Profit for year 2 was about £52,000 after tax. So distributable reserves grew to about £65,000 before dividends.

A £42,000 dividend is comfortably covered. Legal.

### 9.2 The paperwork

Each dividend needs:

- A **board minute** recording the decision (a single line: "It was resolved that an interim dividend of £10,500 be paid to S. Brown on [date]").
- A **dividend voucher** issued to the shareholder, showing the amount and the date.
- The cash transfer from company bank account to director's personal account.

Sarah keeps copies in a folder. HMRC has been known to challenge unsupported dividend payments and reclassify them as salary (with PAYE and NIC consequences).

### 9.3 Tax on the dividends, personally

Sarah's £42,000 of dividends is taxable on her personally via Self Assessment (it does not affect Acorn's CT). At 2026/27 rates (per the shared brief):

- First £500 tax-free under the dividend allowance.
- Next slice within the basic rate band: 10.75% (rate effective from 6 April 2026).
- Slice in higher rate band: 35.75% (rate effective from 6 April 2026).

Sarah's £12,570 salary plus £41,500 of taxable dividends takes her to total income of about £54,000. After her personal allowance, taxable income is about £41,930. The basic rate band runs to £37,700. So most of her dividend is in basic rate territory, with a small slice into higher rate. Approximate personal dividend tax: in the range £2,500 to £3,500.

Precise dividend tax calculation is a Self Assessment matter for Sarah's personal return, not the company's CT600. We mention it here to make the link clear, not to compute it definitively.

### 9.4 Dividends and the CT600

Dividends do NOT appear on the CT600. They are not deductible. They reduce retained earnings on the balance sheet but flow nowhere in the tax computation.

---

## 10. The R&D question

Sarah spent £8,000 (loosely tracked) developing a custom Figma plugin to automate parts of her own internal workflow. She has heard that R&D tax relief is generous and wonders whether she can claim.

The merged R&D scheme applies to accounting periods beginning on or after 1 April 2024. For Acorn's year ended 31 March 2027, it applies. Let's run the tests.

### 10.1 What is R&D for tax purposes

Per HMRC's CIRD guidelines, R&D requires:

- **An advance in science or technology.** Not in business processes. Not in cost savings. Not in user experience. A genuine technical advance in the underlying science or technology.
- **Resolution of scientific or technological uncertainty.** The kind of uncertainty that a competent professional in the field could not have resolved without R&D.
- **Work undertaken by competent professionals.** Not learning the standard tools of the trade.

If you can answer "yes" to all three, you might have qualifying R&D.

### 10.2 Acorn's Figma plugin

- Is there an advance in science or technology? Sarah used Figma's plugin API to automate steps that previously took her several manual clicks. She didn't invent any new algorithm, didn't push the API beyond its documented capabilities, didn't solve any unresolved technical problem. **No.**
- Did it resolve scientific or technological uncertainty? Sarah did spend some time learning the API and figuring out a clean architecture, but a competent professional in the field could have done the same with the existing documentation. **No.**
- Was the work undertaken by competent professionals doing R&D? Sarah is a designer, not an R&D engineer. She was building an internal tool, not pushing the state of the art. **No.**

**Conclusion: no qualifying R&D.** The £8,000 was a normal business cost of developing an internal tool.

### 10.3 What if it had been R&D

For the sake of completeness, if it had qualified:

**Merged R&D Expenditure Credit (RDEC), the headline scheme:**

- Above-the-line credit of **20%** of qualifying expenditure.
- The credit is taxable income. Net benefit after CT is approximately 15% to 16.2%.
- For Acorn, 20% of £8,000 = £1,600 of credit, which then attracts CT at 19% (small profits rate as the notional rate for loss-makers), net benefit ~£1,296.

**Enhanced R&D Intensive Support (ERIS):** A more generous regime for loss-making R&D-intensive SMEs (R&D spend at least 30% of total expenditure). 86% additional deduction; surrenderable loss attracts 14.5% payable credit. Acorn is not loss-making and would not qualify on the intensity test either.

The point of this exercise: the merged R&D scheme is real and valuable for genuine R&D. It is also routinely over-claimed by companies that do not have qualifying activity. HMRC has invested significantly in compliance checks since 2023. Apply the three tests honestly. If you cannot answer yes to all three, you do not have qualifying R&D.

### 10.4 Implications for the CT600

No R&D claim means no CT600L supplementary page. Skip it.

---

## 11. The CT600 for year 2

The year 2 CT600 differs from year 1 in three ways:

1. Higher turnover (£124,000) and TTP (£65,803), so marginal relief applies and Box 435 is no longer zero.
2. A CT600A supplementary page is required (overdrawn DLA, £1,502 of s.455).
3. The total tax payable is the sum of trading CT plus s.455.

### 11.1 The boxes

The headline boxes for year 2:

| Box | Description | Year 2 entry |
|---|---|---|
| 145 | Turnover | 124,000 |
| 155 | Trading profit per accounts | 66,116 |
| 165 | Adjusted trading profit | 65,803 |
| 235 | Total profits before reliefs | 65,803 |
| 305 | Profits chargeable to CT | 65,803 |
| 315 | Days in period | 365 |
| 330 | Profits in FY2026 | 65,803 |
| 335 | FY year | 2026 |
| 345 | Rate FY2026 | 25 (main rate; marginal relief separately) |
| 380 | CT at 25% | 16,451 |
| 410 / 435 | Marginal relief | 2,763 |
| 430 | CT after marginal relief | 13,688 |
| 460 or similar | s.455 from CT600A | 1,502 |
| 525 | Total self-assessment of tax payable | 15,190 |

(Box numbers for s.455 vary slightly across CT600 versions; filing software places the s.455 figure in the correct location automatically. The CT600A workings produce the figure.)

### 11.2 CT600A boxes (simplified)

| Box | Description | Entry |
|---|---|---|
| A1 | Loans made during the period to participators | 4,200 |
| A2 | Loans repaid during the period | 0 |
| A4 | Balance still outstanding 9 months 1 day after period end | 4,200 |
| A5 | s.455 tax due (35.75%) | 1,502 |

### 11.3 The accounting period and the financial year

Acorn's period (1 April 2026 to 31 March 2027) falls entirely within FY2026 (which runs from 1 April 2026 to 31 March 2027). No straddle. Only the FY2026 boxes get filled.

### 11.4 Filing

The filing workflow is identical to Week 4. The software adds the CT600A supplementary page when prompted. The iXBRL accounts and computation get tagged automatically. The submission goes through the Government Gateway.

---

## 12. Companies House for year 2

The accounts for year 2 also go to Companies House. The size thresholds haven't changed, so Acorn is still a micro-entity. The filleted accounts are filed by **31 December 2027** (9 months after the year-end of 31 March 2027). Filing is through Companies House WebFiling (free) or through the CT software.

---

## 13. What's in your Xero (year 2)

A round-up of the Xero workflows that matter for a second-year, slightly-more-complicated Ltd.

> **Xero workflows to know**
>
> **VAT:** Reports > VAT Return > select the period > Review > Submit (through MTD). Always run VAT Reconciliation report first to confirm the control account ties.
>
> **Payroll:** Either use Xero Payroll (integrated; posts the wages journal automatically) or use a separate provider like BrightPay or Pento and post a monthly wages journal manually. Either way, the P&L wages line should reconcile to the RTI-filed totals.
>
> **Fixed Assets:** When you buy a new fixed asset, immediately add it to the Fixed Assets module (Accounting > Advanced > Fixed Assets > New Asset). Don't wait for year-end. Run depreciation monthly.
>
> **Director's Loan Account:** Keep a single nominal code (835). Any time Sarah pays for something personal from a company card, recode it to 835 immediately, not at year-end. Run Account Transactions on 835 once a month to spot the balance and decide what to do about it.
>
> **Dividends:** Use a dedicated equity account (480). Post each dividend with a board minute and voucher referenced in the narrative. Do not let them creep into the P&L.

---

## 14. Common errors to watch for

This is the consolidated list from the year's mess.

> **Drawings miscoded as wages.** If you take money out of the company without running it through payroll (FPS filed), it is not a salary. It is a drawing against DLA. Re-code immediately, do not wait until year-end.
>
> **Personal expenses on the company card.** Re-code to DLA at the time, not at year-end. Or pay the company back from your personal account in the same month.
>
> **Dividends posted to P&L.** Always use an equity-section account. Dividends are not an expense.
>
> **Forgetting CT600A when DLA is overdrawn.** The supplementary page is mandatory if the loan is unrepaid at the s.455 cut-off date.
>
> **Calculating marginal relief incorrectly.** Use HMRC's calculator. Don't guess.
>
> **Treating R&D too liberally.** Apply the three CIRD tests honestly. Internal tooling is rarely R&D. HMRC is now actively compliance-checking small R&D claims.
>
> **Forgetting employer NIC and the Employment Allowance.** Tom's £1,275 of employer NIC is largely offset by the EA. Don't forget to claim it (set the indicator on the EPS).
>
> **Forgetting auto-enrolment pension.** Tom has to be enrolled into a workplace pension. The employer must contribute. NEST is the cheapest provider. Set it up before the first payroll.
>
> **Filing the dividend as a P&L expense.** Sound familiar? It is the single most common DIY error and it bites again here.
>
> **VAT control balances surviving year-end.** Always run the VAT Reconciliation report before closing the year.
>
> **Phone bill 100% claimed without restriction.** Restrict if the contract is personal. Use HMRC mileage rates for car use instead of fuel receipts.

---

## 15. Mini quiz

1. A director's loan is £6,500 overdrawn at the company's year-end of 31 March 2027. The loan arose in 2026/27. By when must it be repaid to avoid s.455 tax, and what would s.455 cost if not repaid?
2. A company has TTP of £100,000 with no associated companies, no losses, no donations. What is the corporation tax payable after marginal relief?
3. A sole-director Ltd registers for VAT mid-year. How does this affect the turnover figure shown on the CT600?
4. Sarah develops a custom Figma plugin for her internal workflow. Does this qualify for R&D relief under the merged scheme?
5. Why must dividends be posted to equity rather than the P&L?

<details>
<summary>Answers</summary>

1. Repay by 1 January 2028 (9 months and 1 day after 31 March 2027). If not repaid, s.455 = £6,500 x 35.75% = £2,323.75 (rounded £2,324). Reclaimable when the loan is later repaid.
2. Tax at 25% on £100,000 = £25,000. Marginal relief = (3/200) x (£250,000 - £100,000) x 1 = £2,250. CT payable = £22,750. Effective rate 22.75%.
3. Turnover on the CT600 is net of VAT. The VAT is a separate liability and does not appear on the CT600. So Box 145 shows the net sales figure.
4. No. Internal tooling does not constitute an advance in science or technology, does not resolve a scientific or technological uncertainty, and is not the kind of work HMRC's CIRD guidelines treat as R&D. The cost is a normal business expense.
5. Dividends are distributions of post-tax profit, not an expense. Posting them in the P&L would understate profit and corporation tax. They reduce retained earnings (equity) instead.

</details>

---

## 16. Bonus exercise

Hazel Bakery Ltd has the following situation for the year ended 31 March 2027:

- Turnover £180,000
- Profit before tax (per accounts) £58,000 (includes £3,500 depreciation, £1,800 client entertaining, £400 fines)
- Director's loan: £12,000 overdrawn at year-end; the loan arose in November 2026 and has not been repaid.
- Fixed asset additions: a new oven £6,500 and a delivery scooter (zero-emission electric) £4,000.
- No R&D, no donations, no associated companies, no chargeable gains.

**Tasks.**

1. Compute the corporation tax on trading profit, including marginal relief.
2. Determine whether s.455 applies, and if so, compute the s.455 tax.
3. State the total corporation tax payable by Hazel Bakery Ltd for the year.

<details>
<summary>Answers</summary>

**Tax computation:**

```
Profit before tax (per accounts)      58,000
Add back: Depreciation                 3,500
Add back: Client entertaining          1,800
Add back: Fines                          400
                                      ------
                                      63,700
Less: Capital allowances
  AIA on oven (£6,500)                (6,500)
  100% FYA on EV scooter (£4,000)     (4,000)
                                      ------
Trading profit / TTP                  53,200

Tax at 25%                            13,300
Less: Marginal relief
  (3/200) x (£250,000 - £53,200)        (2,952)
                                       ------
CT on trading profit                  10,348
```

**s.455:**

- DLA £12,000 overdrawn, not repaid within 9 months and 1 day.
- Loan arose November 2026, so post-6 April 2026 rate of 35.75% applies.
- s.455 = £12,000 x 35.75% = £4,290.

Note also that £12,000 exceeds the £10,000 beneficial loan threshold. Sarah's BIK consequences would need separate consideration (HMRC's official rate ~2.25%).

**Total CT payable:**

```
Trading CT                            10,348
Plus s.455 (CT600A)                    4,290
                                      ------
Total CT for year                     14,638
```

</details>

---

## 17. Where to go next

You have now done a clean year-one filing and a messier year-two filing for Acorn Studio Ltd. The major patterns repeat. Each year you do this, it gets faster.

Suggested next steps to deepen your understanding:

- **Read HMRC's CT600 guide** end to end: [https://www.gov.uk/guidance/the-company-tax-return-guide](https://www.gov.uk/guidance/the-company-tax-return-guide). It is dry, but it is the canonical reference.
- **Do a real filing** with TinyTax, Easy Digital Filing, or FreeAgent on your own company's data. Even a dry run will teach you more than reading more theory.
- **Hire an accountant for the first one and watch what they do.** A small local firm will typically charge £400-£800 for a year-end micro-entity package. Worth it once, to see a professional workflow.
- **Learn VAT separately.** It is its own subject. The mechanics are simple but the edge cases (partial exemption, place-of-supply rules for overseas sales, Domestic Reverse Charge for construction) get gnarly fast.
- **Learn payroll separately.** Same comment. Real Time Information, the Employment Allowance, the Apprenticeship Levy at the bigger end. Use a dedicated payroll tool (BrightPay, Pento, Xero Payroll, FreeAgent).
- **Consider Self Assessment for yourself.** Your dividend tax and any other personal income (interest, capital gains) needs filing personally each year. The same Government Gateway you use for the company also lets you enrol for Self Assessment as an individual.
- **Stay current.** Tax law changes every year. Subscribe to a free newsletter from one of the small-practice firms (Tax Adviser magazine, BTC Bright's CPD bulletins, or the FRC's reporting roundup). Spend an hour each Budget Day reading the announcements.

A final thought. The reason to learn this yourself is not necessarily to do it yourself forever. It is to understand the numbers when an accountant explains them. To spot it when something looks wrong. To know what questions to ask. To make better decisions about how to structure your business. The mechanics are mostly bookkeeping plus a small number of tax rules. Once you have done it, the mystery is gone.

That is what this course was for. Good luck with Acorn.
