# Week 4: Filing the CT600 and the Accounts

> **What you'll know by the end of this week**
> - Exactly which filings a small Ltd has to make, with which deadlines, and where to
> - What the CT600 form looks like box by box for a tiny company
> - What iXBRL is, what gets tagged, and why HMRC requires it
> - How to set up the Government Gateway and enrol for the Corporation Tax service
> - Which budget filing software to use, and how the workflow runs end to end
> - How to pay the corporation tax and how to file accounts at Companies House
> - The late-filing penalty regime as it stands from 1 April 2026

You have, in your hands by the end of Week 3, a set of FRS 105 accounts and a tax computation showing CT payable of £8,831 on TTP of £46,478. This week you submit them. Properly. Without an accountant.

---

## 1. The filings you actually have to make

A UK limited company with a normal trading year has four obligations clustered around year-end. Three of them are filings. One is a payment.

| Obligation | To whom | Format | Deadline |
|---|---|---|---|
| Pay corporation tax | HMRC | Bank transfer or direct debit | 9 months and 1 day after period end |
| File the CT600 tax return | HMRC | Commercial software (iXBRL) | 12 months after period end |
| File accounts at Companies House | Companies House | WebFiling or commercial software (iXBRL) | 9 months after the accounting reference date |
| File the confirmation statement | Companies House | WebFiling | Within 14 days of the company's review period anniversary |

For Acorn Studio Ltd (year ended 31 March 2026), the deadlines work out as:

| Obligation | Deadline |
|---|---|
| Pay corporation tax | 1 January 2027 |
| File CT600 with HMRC | 31 March 2027 |
| File accounts at Companies House | 31 December 2026 |
| File confirmation statement | (Separately, on Acorn's review period anniversary) |

> **Warning:** Tax is due before the return is due. You have to estimate and pay first, then file. If you wait until you have prepared the CT600 in March 2027, you have already missed the 1 January payment deadline and interest is running. Pay the tax by 1 January 2027 and file the return any time before 31 March 2027.

---

## 2. What goes where

The same accounts get filed in two places. The CT600 goes to HMRC only. The confirmation statement goes to Companies House only.

### 2.1 Companies House

Receives a filleted (shortened) set of accounts. For Acorn, that is the balance sheet plus the minimum FRS 105 notes plus the legally required Companies Act statements. The P&L is not required at Companies House for micro-entities (as the rules currently stand). Filing is through WebFiling (free, browser-based) or through commercial software. WebFiling for accounts remains available as of 28 May 2026. A software-only mandate was originally planned for 1 April 2027 but is currently under review.

### 2.2 HMRC

Receives three things together as one submission:

1. The **CT600 form** itself.
2. The **full FRS 105 statutory accounts** (BS, P&L, notes), tagged in iXBRL.
3. The **corporation tax computation**, also tagged in iXBRL.

All three are bundled into one electronic submission through commercial filing software.

> **Tip:** The accounts go to Companies House in filleted form (BS only) and to HMRC in full form (BS + P&L + notes). Same source document, two destinations, two different presentations. Filing software handles both.

---

## 3. What iXBRL is

**iXBRL** stands for **inline eXtensible Business Reporting Language**. It is a technology, not a separate document type.

In plain English: an iXBRL file is an ordinary HTML page that looks just like a printable set of accounts when you open it in a browser. But each number on the page also carries an invisible, machine-readable tag that says "this number is Turnover, for the period 1 April 2025 to 31 March 2026, in GBP, prepared under FRS 105." HMRC's computers read the tags. Humans read the visible accounts. Same file. Same numbers. Two audiences.

You do not type the tags. The filing software does it for you. You fill in the figures using a guided form; the software emits the tagged HTML. The same applies to the tax computation: you fill in the workings; the software emits the tagged file.

HMRC made iXBRL mandatory for corporation tax submissions in 2011, following the Carter Review reforms. There is no realistic way to file the CT600 without it (HMRC's free CATO service produced iXBRL behind the scenes; from 1 April 2026, commercial software is required, which also produces iXBRL).

### 3.1 What gets tagged

For a micro-entity, the **minimum tagging list** is short. You only have to tag the headline figures: turnover, gross profit (if shown), operating profit, profit before tax, tax charge, total assets, current liabilities, capital and reserves, etc. Filing software has these wired in.

For larger companies the full tagging list is much longer. You do not need to worry about this for Acorn.

### 3.2 Which taxonomy

The **FRC's 2025 Taxonomy Suite** is the current set of taxonomy files used to drive the tags. For Acorn, the relevant taxonomy is **FRS 105 (Micro-entities)**. Filing software handles taxonomy selection automatically based on what you tell it about the company.

---

## 4. The CT600 form box by box

The CT600 looks daunting on first reading. It has dozens of pages and hundreds of boxes. For a tiny one-trade Ltd with no R&D, no losses, no chargeable gains, no associated companies, and no director's loan, you only need to complete about fifteen boxes. The software walks you through them.

Here is Acorn's full CT600, box by box.

### Section: Company information

| Box | What | Acorn enters |
|---|---|---|
| 1 | Company name | Acorn Studio Ltd |
| 2 | Company registration number (CRN) | 14123456 |
| 3 | Tax reference (UTR, 10 digits) | 1234567890 |
| 4 | Type of company | 0 (most small Ltds) |
| 30 | Accounting period start | 01/04/2025 |
| 35 | Accounting period end | 31/03/2026 |

### Section: About this return

| Box | What | Acorn enters |
|---|---|---|
| 40 | Type of return | 1 (a return for an accounting period) |
| 80 | Accounts attached | Tick |
| 85 | Computation attached | Tick |
| 95 | This is the only return for the period | Tick (most cases) |

### Section: Turnover

| Box | What | Acorn enters |
|---|---|---|
| 145 | Total turnover from trade | 74,800 |

### Section: Income

| Box | What | Acorn enters |
|---|---|---|
| 155 | Trading and professional profits (per accounts) | 47,365 |
| 165 | Net trading profits (after capital allowances and disallowables) | 46,478 |
| 170 | Bank, building society or other interest received | 0 |
| 190 | Income from UK property | 0 |
| 205 | Other income | 0 |

### Section: Chargeable gains

| Box | What | Acorn enters |
|---|---|---|
| 210 | Chargeable gains | 0 |
| 220 | Allowable losses (current year) | 0 |

### Section: Profits before deductions and reliefs

| Box | What | Acorn enters |
|---|---|---|
| 235 | Total profits before deductions and reliefs | 46,478 |

### Section: Deductions and reliefs

| Box | What | Acorn enters |
|---|---|---|
| 240 | Losses brought forward | 0 |
| 275 | Qualifying charitable donations | 0 |
| 305 | Profits chargeable to corporation tax | 46,478 |

### Section: Tax calculation

| Box | What | Acorn enters |
|---|---|---|
| 315 | Number of days in this period | 365 |
| 330 | Profits in FY2025 | 46,478 |
| 335 | FY year | 2025 |
| 340 | Profits in second FY (if straddling) | 0 |
| 345 | Tax rate FY2025 | 19 |
| 380 | Corporation tax (FY2025) | 8,831 |
| 410 | Marginal relief | 0 |
| 430 | Corporation tax for the period | 8,831 |
| 440 | Net corporation tax | 8,831 |

### Section: Tax payable

| Box | What | Acorn enters |
|---|---|---|
| 470 | Income tax deducted at source (e.g. on interest) | 0 |
| 480 | R&D tax credit (refundable) | 0 |
| 510 | Total liability before instalments | 8,831 |
| 525 | Self-assessment of tax payable | 8,831 |

### Section: Declaration

| Box | What | Acorn enters |
|---|---|---|
| 975 | Director's name | Sarah Brown |
| 980 | Date of declaration | (Date filed) |
| 985 | Director's role | Director |

### Section: Supplementary pages indicator

Acorn does not need any supplementary pages, so leaves the indicator boxes (CT600A through CT600N) unticked. The director's loan account is not overdrawn (so no CT600A). No R&D claim (so no CT600L). No charitable activities, no group relief, no foreign income, no special tax regimes.

That's it. Fifteen meaningful entries. The form has hundreds of boxes; for a tiny Ltd most are skipped.

---

## 5. What CT600 supplementary pages exist (and when a tiny Ltd would use them)

| Page | Topic | Likely for Acorn? |
|---|---|---|
| CT600A | Loans to participators (director's loan) | Only if DLA overdrawn (we cover this in Week 5) |
| CT600B | Controlled foreign companies, hybrid mismatches | No |
| CT600C | Group and consortium relief | No |
| CT600D | Insurance | No |
| CT600E | Charities and CASCs | Only if a charity |
| CT600F | Tonnage tax (shipping) | No |
| CT600H | Cross-border royalties | No |
| CT600I | Ring-fence trades (oil and gas) | No |
| CT600J | Disclosure of tax avoidance schemes (DOTAS) | No |
| CT600K | Restitution tax | No |
| CT600L | R&D and creative industry tax credits | Only if claiming R&D relief |
| CT600M | Freeports and Investment Zones | Only if operating in a Freeport |
| CT600N | Residential Property Developer Tax | No |

For Acorn in this year: none. For Acorn in Week 5: one (CT600A for the director's loan).

---

## 6. HMRC's free CATO service is closing

For years HMRC ran a free combined service called **Company Accounts and Tax Online**, or **CATO**. It let unrepresented small companies file accounts to Companies House and the CT600 to HMRC in one go, for free, through a browser.

**CATO closes on 31 March 2026.**

From 1 April 2026, a small company has to use commercial filing software to file the CT600 (and the iXBRL accounts and computation) with HMRC. The accounts can still be filed for free at Companies House through **WebFiling** (until the originally-planned April 2027 software mandate that is now under review).

If you have used CATO in a previous year, download copies of your previous filings before 31 March 2026. After closure, you cannot retrieve them through that interface.

---

## 7. Budget filing software for a tiny Ltd

The realistic shortlist for a one-person Ltd filing their own CT600.

| Software | Price (May 2026, indicative) | What it files | Verdict |
|---|---|---|---|
| **TinyTax** | From ~£20/year for the cheapest plan | CT600 + iXBRL accounts + iXBRL computation | Cheapest. Designed for self-filers. UI is straightforward. |
| **Easy Digital Filing** | DIY plans from ~£40-£100; pay-per-submission options | CT600 + iXBRL accounts + iXBRL computation | Strong for non-accountants. Common choice post-CATO. |
| **Taxpipe** | ~£59 per filing (one-off) | CT600 + iXBRL accounts + iXBRL computation | Pay-as-you-file, no subscription. Good for once-a-year users. |
| **FreeAgent** | £14.50-£33/month (free if you bank with Mettle/NatWest/RBS) | Bookkeeping + CT600 (built-in for simple FRS 105 cases) | Integrated solution if you are already using FreeAgent. Some scenarios not supported (associated companies, complex CT600A). |
| **TaxCalc** | ~£100-£300/year (Ltd Co module) | CT600 + iXBRL accounts + iXBRL computation | Established. More accountant-oriented but accessible. |
| **Andica CT600** | ~£100-£200/year | CT600 + iXBRL accounts (with add-on) | Established UK vendor. Functional, slightly dated UI. |
| **BTCSoftware (Bright)** | ~£300+/year | Full suite | Accountant-oriented; overkill for a one-person Ltd. |

For Acorn's first DIY filing, the most likely choices are **TinyTax** (cheapest), **Easy Digital Filing** (most popular among self-filers), or **FreeAgent** (if already using it for bookkeeping). All three file the full bundle.

> **Tip:** Try one of them on the prior year's data first as a dry run. None of them will object to you producing draft returns. You only pay (or submit) when you click the submit button. Use the dry run to learn the workflow without time pressure.

---

## 8. Government Gateway prerequisites

You need three credentials before any software can file on your behalf.

### 8.1 Government Gateway user ID

If you do not have one already, create one at [gov.uk/log-in-register-hmrc-online-services](https://www.gov.uk/log-in-register-hmrc-online-services). Choose **Organisation** as the account type (not Individual). You will get a 12-digit user ID and choose a password.

### 8.2 Enrol for Corporation Tax

Inside the Gateway, enrol the company for the Corporation Tax service. You will be asked for:

- The company's 10-digit UTR (Unique Taxpayer Reference). This is posted to the registered office a few weeks after Companies House notifies HMRC of the incorporation. Sarah received Acorn's UTR in early May 2024.
- The company's registered office postcode.

### 8.3 Activation code

HMRC then **posts** a one-time activation code to the registered office address. This takes 7-10 working days. It cannot be emailed. It cannot be fast-tracked. You enter the code into the Gateway to activate the Corporation Tax service.

Once activated, the Gateway credentials are valid for use in filing software.

### 8.4 The CT payment reference

When you pay corporation tax, you use a 17-character **CT payment reference**. It is the company's UTR plus a four-character period suffix plus check digits. HMRC issues a unique reference for each accounting period. Find it on the HMRC Corporation Tax page after logging into the Gateway, or on the "Notice to deliver a Company Tax Return" letter HMRC sends each year (the **CT603**).

For payment only, not for filing. We come back to it in section 10.

---

## 9. Walking through the filing workflow (using Easy Digital Filing as the example)

The workflow is similar across all the budget tools. We use Easy Digital Filing because the screens are the most beginner-friendly. The same steps work in TinyTax with a slightly different UI.

### Step 1. Sign up and create the company

Register an account (email + password). Create a new company record. Enter:

- Company name: Acorn Studio Ltd
- Company registration number: 14123456
- UTR: 1234567890
- Accounting period: 1 April 2025 to 31 March 2026
- Accounting standard: FRS 105 Micro-entities

### Step 2. Build the accounts

The software walks you through a guided FRS 105 builder. You enter:

- The balance sheet figures: fixed assets, current assets, creditors due within one year, called-up share capital, retained earnings, etc.
- The P&L figures: turnover, COGS, staff costs, depreciation, other charges, tax.
- The notes: accounting policies, average employees, related party transactions.
- The director's name for the signature.

The software produces a draft set of FRS 105 accounts in iXBRL.

### Step 3. Build the computation

The software prompts for:

- Profit before tax (per accounts).
- Each disallowable expense (depreciation, entertaining, fines).
- Each capital allowance claim (AIA, WDA, full expensing).
- Any other income (interest, rent).
- Any reliefs (losses brought forward, charitable donations).

It calculates TTP and the CT charge automatically, and marginal relief if applicable.

### Step 4. Fill the CT600

The software pre-populates the CT600 boxes from the accounts and the computation. You review and adjust if needed. For Acorn this should agree to the box-by-box list above.

### Step 5. Review the iXBRL preview

The software shows you the rendered iXBRL accounts and computation. They look exactly like a printable PDF. Check the figures, the dates, and the company name. This is what HMRC will see.

### Step 6. Connect Government Gateway credentials

The software prompts for your Gateway user ID and password. It does not store the password permanently (or it stores it encrypted; check the vendor's policy). The credentials are used to authenticate the HMRC submission.

### Step 7. Submit

Click Submit. The software talks to HMRC's API. HMRC returns an acknowledgement within a few seconds (or, occasionally, a few minutes). The acknowledgement is your evidence of filing. Save it.

### Step 8. Optionally file to Companies House too

Most of these tools also offer "file to Companies House" as a single click. It uses your Companies House authentication code (a separate 6-digit code posted at incorporation). You enter the code once; the tool files the filleted accounts.

---

## 10. Paying the corporation tax

This is the bit DIY filers forget. Filing the return does not pay the tax. You pay separately, through HMRC's payment service.

Visit [gov.uk/pay-corporation-tax](https://www.gov.uk/pay-corporation-tax). Options:

- **Online or telephone banking (Faster Payments)**: same-day or next-day. Use HMRC's bank details and the 17-character CT payment reference. For Acorn, this is the cleanest method.
- **CHAPS**: same-day, slightly more expensive at the bank's end. Useful for larger payments close to the deadline.
- **BACS**: 3 working days.
- **Direct Debit**: set up through HMRC's online account.
- **Debit card**: through HMRC's online portal. (Personal credit cards are not accepted.)
- **Cheque**: posted to HMRC. Slow. Not recommended for time-sensitive payments.

For Acorn's £8,831, set up a Faster Payment from the Starling Business account to HMRC's Cumbernauld bank account, using the period CT payment reference. Pay on or before 1 January 2027. Confirm receipt by checking the HMRC online account a few days later.

> **Warning:** Interest runs from 1 January 2027 if the payment lands late. The current late payment interest rate is the Bank of England base rate plus 4 percentage points (so approximately 7.75% at May 2026; check the current rate when filing). Interest is not a fixed penalty but it adds up.

---

## 11. Filing accounts at Companies House

Acorn must file accounts at Companies House by 31 December 2026 (9 months after the accounting reference date of 31 March).

### 11.1 Companies House WebFiling

Free. Browser-based. Walks you through a micro-entity accounts wizard. You enter the balance sheet figures and the standard Companies Act statements; the system produces a compliant iXBRL submission. You authenticate with the company's 6-digit Companies House authentication code.

WebFiling for accounts is available as of 28 May 2026 and is expected to remain available beyond 1 April 2027 (the originally planned software-only mandate has been delayed; revised timing under review).

### 11.2 Filing through your CT software

Most CT filing tools (TinyTax, Easy Digital Filing, FreeAgent) also file the accounts at Companies House in one click. The advantage is you produce the iXBRL accounts once and send them to both regulators in one workflow. The disadvantage is the cost (you have already paid the CT software fee; Companies House is otherwise free).

### 11.3 What gets filed

For a micro-entity, the **filleted** accounts: balance sheet plus the minimum notes. No P&L required at Companies House. The legally required Companies Act statements on the balance sheet must be included.

> **Tip:** Companies House publishes everything online. Anyone can search [find-and-update.company-information.service.gov.uk](https://find-and-update.company-information.service.gov.uk) for Acorn Studio Ltd and download the accounts. Bear this in mind when deciding what to include in any voluntary notes.

---

## 12. The confirmation statement

Separately from the accounts, every UK company files a **confirmation statement** at Companies House at least once every 12 months. It confirms (or updates) the company's basic information: registered office, director details, share capital, people with significant control, SIC codes (industry classification).

For Acorn, the confirmation statement is due within 14 days of the company's "review period" anniversary (typically the incorporation anniversary, unless adjusted). It is filed through WebFiling.

The current Companies House fee is £34 online or £62 on paper. It is an annual administrative cost, not a tax. It is unrelated to the accounts.

---

## 13. Late filing penalties

Two separate penalty regimes apply.

### 13.1 CT600 (HMRC) late filing penalties

Penalties were **doubled** from 1 April 2026.

| How late | Penalty (from 1 April 2026) |
|---|---|
| 1 day | £200 |
| 3 months | A further £200 (£400 total flat penalty) |
| 6 months | + 10% of the unpaid tax (HMRC estimates if the return has not been filed) |
| 12 months | + another 10% of the unpaid tax |
| Third consecutive late return | £1,000 / £2,000 thresholds at the flat-penalty steps |

Flat penalties apply even if no tax is due.

### 13.2 Companies House late filing penalties (private company)

| How late | Penalty |
|---|---|
| Up to 1 month | £150 |
| 1 to 3 months | £375 |
| 3 to 6 months | £750 |
| More than 6 months | £1,500 |

Penalties **double** if accounts are filed late in two successive financial years.

### 13.3 Late payment of CT

Interest applies from the due date until the date paid. There is no flat late-payment penalty in normal cases (HMRC may assess one in egregious circumstances). The interest rate is BoE base rate + 4 percentage points (approximately 7.75% in May 2026).

> **Worked example:** Acorn files the CT600 four months late (5 August 2027 instead of 31 March 2027). Penalties: £200 flat + £200 second flat after 3 months = £400 flat. Plus, if Acorn also paid the tax late by the same period, interest from 1 January 2027 to the actual payment date at 7.75% per annum.

---

## 14. What's in your Xero

Xero is not a filing tool. It is bookkeeping software. Xero does not file the CT600.

What Xero does do:

- Gives you the clean trial balance and TB-mapped FRS 105 figures (via accounting partner add-ons).
- Integrates with some filing tools so figures can be exported.
- Has a Companies House confirmation statement integration in some plan tiers (look in **Reports > Companies House**).

A common workflow: Xero for bookkeeping, FreeAgent or TinyTax for the CT600 filing, Companies House WebFiling for the accounts (or the same filing tool for both). Or Xero plus a separate spreadsheet for the tax computation, plus TinyTax for the submission.

If you are paying Xero anyway (about £15-£35/month depending on plan), the cheapest add-on to file your CT600 is TinyTax at ~£20/year. Total annual cost: about the same as one hour with an accountant.

---

## 15. After you have filed

A few practical points.

### 15.1 Records retention

The Companies Act and HMRC both require you to keep accounting records for **six years** from the end of the accounting period they relate to. That includes the Xero data, bank statements, invoices, receipts, the tax computation, the filed CT600, and the iXBRL files.

Xero retains data indefinitely while your subscription is active. If you ever close the Xero account, export the data first.

### 15.2 HMRC enquiry window

HMRC has **12 months from the date of filing** to open an enquiry into a CT600 (or longer in some cases, e.g. if a return is filed late or contains careless errors). Most returns are not enquired into. If yours is, HMRC will write to you. Keep records. Respond promptly. Consider whether to engage an accountant if it gets complicated.

### 15.3 Confirmation receipts

When you file the CT600 successfully, the software shows a HMRC acknowledgement receipt with an IRmark (a hash of the submitted file). Save this. It is your proof of filing on time.

When you file accounts at Companies House, you get an email confirmation within a few hours (or sometimes a few minutes). Save this too.

---

## 16. Common errors to watch for

> **Filing the CT600 without paying the tax.** Tax is due 1 January; the return is due 31 March. People often think the deadline is the same. It is not. Pay first.
>
> **Forgetting to enrol for Corporation Tax service.** Without Gateway enrolment, your filing software cannot submit. The activation code takes 7-10 days to arrive. Do not leave it until the last week.
>
> **Wrong company UTR or CRN.** Easy to mis-type. The submission will be rejected. Check carefully.
>
> **Wrong accounting period dates.** If you enter the wrong period end, the iXBRL tagging will be wrong and HMRC may reject the submission.
>
> **Submitting accounts to Companies House but not HMRC, or vice versa.** They are separate filings. Both are required. Filing one does not file the other.
>
> **Sending filleted accounts to HMRC.** HMRC wants the full set including P&L. Do not file the abridged or filleted version to HMRC.
>
> **Not downloading CATO history before 31 March 2026.** Once CATO closes, your previous returns are not accessible through that interface. Download PDF copies first.
>
> **Mis-stating the small profits rate split when the period straddles 1 April.** Boxes 330 and 335 (and 340 and 345 for the second FY) must be completed correctly. Filing software handles this automatically, but check the figures before submitting.
>
> **Forgetting to keep records for six years.** Easy to neglect once the filing is done. Create a folder per accounting period and keep the bank statements, the receipts, the trial balance, the computation, and the filed CT600.

---

## 17. Mini quiz

1. By what date does Acorn Studio Ltd have to pay the corporation tax for the year ended 31 March 2026? And by what date does it have to file the CT600?
2. What three things are submitted together to HMRC in a CT600 filing?
3. Why does HMRC mandate iXBRL?
4. From which date is HMRC's free CATO service no longer available?
5. A company files its CT600 two months late, with £5,000 of tax outstanding. What flat penalty applies, and what other costs accrue?

<details>
<summary>Answers</summary>

1. CT payment due 1 January 2027 (9 months and 1 day after the period end of 31 March 2026). CT600 due 31 March 2027 (12 months after the period end). Tax is due before the return.
2. (a) The CT600 form itself; (b) the full statutory accounts, tagged in iXBRL; (c) the tax computation, tagged in iXBRL.
3. So HMRC's computers can read the data automatically without manual rekeying. Tags identify each number's meaning, period, and context. Mandatory since 2011 following the Carter Review.
4. 31 March 2026. From 1 April 2026, commercial software is required to file the CT600 with HMRC.
5. £200 flat penalty (1 day late) plus interest on the £5,000 of unpaid tax at BoE base rate + 4 percentage points. The second flat penalty (£200) kicks in at 3 months, so does not apply yet. If the return remains unfiled past 3 months, the additional £200 applies. Interest continues until the tax is paid.

</details>

---

## 18. Bonus exercise

Cedar Consulting Ltd has the following situation:

- Year ended 30 September 2026
- Turnover £58,000
- Profit before tax £21,000
- Depreciation in accounts £400 (added back)
- AIA on a £600 monitor purchased in year (£600 deducted)
- No client entertaining, no fines, no other adjustments
- Director, Marcus Cedar, is the sole shareholder; no DLA balance
- Has not previously filed any CT600 (this is the first year)

**Tasks.**

1. Calculate TTP and CT payable.
2. State the deadline for paying the corporation tax.
3. State the deadline for filing the CT600.
4. State the deadline for filing accounts at Companies House.
5. List the CT600 boxes Marcus needs to complete.

<details>
<summary>Answers</summary>

1. Profit before tax £21,000 + depreciation £400 - AIA £600 = TTP £20,800. Below £50,000 so small profits rate 19%. CT payable = £3,952.
2. 1 July 2027 (9 months and 1 day after 30 September 2026).
3. 30 September 2027 (12 months after 30 September 2026).
4. 30 June 2027 (9 months after the ARD of 30 September 2026).
5. Boxes 1, 2, 3, 4, 30, 35, 40, 80, 85, 95, 145 (turnover £58,000), 155 (£21,000), 165 (£20,800), 235 (£20,800), 305 (£20,800), 315 (365 days), 330 (£20,800), 335 (2026), 345 (19%), 380 (£3,952), 430 (£3,952), 440 (£3,952), 525 (£3,952), 975-985 (director declaration). Around fifteen meaningful entries.

</details>

---

## Next week

You have now seen the full journey end to end for a clean tiny Ltd: clean books, FRS 105 accounts, tax computation, CT600, payment, accounts filing. Acorn's first DIY year is done.

Week 5 takes the same company into a messier year. Sarah hires Tom, registers for VAT, takes too much in dividends, accidentally builds up a director's loan, considers an R&D claim that turns out not to qualify, and lets some bookkeeping errors creep into the Xero file. We learn to spot and fix the errors before preparing accounts, then redo the full computation and filing for a more realistic scenario. It is the longest week. Block out an afternoon.
