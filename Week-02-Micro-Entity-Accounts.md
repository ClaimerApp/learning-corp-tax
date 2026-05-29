# Week 2: From Trial Balance to Micro-Entity Accounts

> **What you'll know by the end of this week**
> - Why every UK limited company has to prepare and file statutory accounts
> - The four company size classes (micro / small / medium / large) and which one a tiny Ltd lands in
> - What FRS 105 is and how it differs from FRS 102 Section 1A
> - What a micro-entity balance sheet and profit and loss account actually look like
> - The seven year-end adjustments that turn a trial balance into a set of accounts
> - The difference between what goes to Companies House and what goes to HMRC
> - How to sign off and approve the accounts properly

Last week you ended with a clean trial balance for **Acorn Studio Ltd** as at 31 March 2026. Profit before tax was £47,365. That trial balance is the raw material. This week we shape it into a set of statutory accounts that the law actually recognises.

---

## 1. Why statutory accounts exist

Every UK limited company is required, under the **Companies Act 2006**, to prepare a set of annual accounts. There are two reasons.

The first is public accountability. A limited company is a separate legal person with limited liability. Its owners are not personally on the hook for its debts. In exchange for that protection, the law says the company must make a basic financial picture of itself available to the public. That picture lives at Companies House, and anyone can download it for free.

The second is tax. HMRC wants to see your accounts alongside your Corporation Tax return. They need to check that the profit you say you made matches the figures you used to compute the tax.

Statutory accounts have to give a **true and fair view** of the company's financial position. That's a legal standard. It does not mean every transaction is perfect. It means the accounts, taken as a whole, give a reasonable reader a fair sense of what the company owns, what it owes, and how it traded during the year.

> **Tip:** The same set of accounts gets filed in two places: Companies House (often a "filleted" or shortened version) and HMRC (the full version, tagged in iXBRL). We come back to this in section 6.

---

## 2. The four company size classes

UK company law sorts companies into four sizes. The size you fall into determines what accounting standard you use, what notes you have to give, what you can leave out at Companies House, and whether you need an audit.

The size thresholds were raised significantly for accounting periods beginning on or after 6 April 2025. The current rules are below. You meet a size class if you meet at least two of the three criteria.

| Class | Turnover not more than | Balance sheet total not more than | Employees not more than |
|---|---|---|---|
| Micro-entity | £1,000,000 | £500,000 | 10 |
| Small | £15,000,000 | £7,500,000 | 50 |
| Medium-sized | £54,000,000 | £27,000,000 | 250 |
| Large | Above all of the above | Above all of the above | Above all of the above |

**Balance sheet total** means the total value of the company's assets before deducting any liabilities. Roughly: the top half of the balance sheet.

Acorn Studio Ltd's numbers: turnover £74,800, total assets around £25,000, one employee (Sarah). That is comfortably inside the micro-entity thresholds on all three criteria. Acorn is a micro-entity, and it can use the simplest accounting standard the UK offers, which is **FRS 105**.

> **Worked example:** If Acorn grew so that turnover hit £1.4m next year but employees stayed at one and total assets at £600k, the company would no longer meet two of the three micro tests (turnover and total assets would both bust). It would step up to "small" and start preparing accounts under FRS 102 Section 1A instead.

---

## 3. What FRS 105 is

**FRS 105** stands for "The Financial Reporting Standard applicable to the Micro-entities Regime." It is the simplest UK accounting standard. It exists to spare tiny owner-managed companies the burden of producing the more detailed accounts that larger companies have to file.

Key features:

- Fewer notes than FRS 102 (typically just three or four).
- No fair-value accounting. Everything is held at historical cost.
- No deferred tax. You account only for the current year's tax.
- No revaluation of property.
- No requirement for a directors' report.
- A single, fixed minimum format for the balance sheet and the profit and loss account. You don't choose how to lay them out; the standard tells you.

It is designed to be read by the company's owner and the company's tax inspector. It is not designed to give a rich investor view. That trade-off is deliberate.

**FRS 102 Section 1A** is the next step up. Small companies that don't qualify as micro-entities (or that choose not to use FRS 105) use it. It allows fair value, deferred tax, more disclosure, and a wider menu of presentation options. It is more flexible but also more work.

Acorn is a micro-entity, and Sarah has chosen FRS 105 because it is the cheapest and simplest option. The vast majority of one-person Ltds make the same choice.

---

## 4. What FRS 105 accounts actually look like

The standard prescribes a fixed format. There is no creativity here. Below are the FRS 105 minimum formats, with Acorn Studio Ltd's figures filled in (subject to the year-end adjustments we make in section 7).

### 4.1 The micro-entity balance sheet

A single page. Compressed. No splitting of categories.

```
ACORN STUDIO LTD
Balance Sheet as at 31 March 2026
Company registration number: 14123456

                                       2026
                                          £
Fixed assets                          1,267
Current assets                       23,460
Creditors: amounts falling due
  within one year                   (10,881)
                                    -------
Net current assets                   12,579
Total assets less current liabs      13,846
                                    =======

Capital and reserves
Called up share capital                 100
Profit and loss account              13,746
                                    -------
Shareholders' funds                  13,846
                                    =======

These accounts have been prepared in accordance with the
provisions applicable to companies subject to the small
companies regime and the micro-entities provisions.

Approved by the board and signed on its behalf on
[date] by Sarah Brown, Director.
```

That is the entire balance sheet a micro-entity needs to file. Notice how the detail is hidden:

- **Fixed assets £1,267** is the laptop and desk at cost (£1,900) less accumulated depreciation (£633). FRS 105 does not require you to split this between tangible and intangible.
- **Current assets £23,460** rolls up cash at bank (£18,420), trade debtors (£4,800), and prepayments (£240) into a single line.
- **Creditors within one year £10,881** rolls up trade creditors (£1,150), accruals (£900), and corporation tax payable (£8,831) into a single line.
- **Profit and loss account £13,746** is retained earnings (the accumulated profit kept in the business after dividends).

### 4.2 The micro-entity profit and loss account

Equally compressed.

```
ACORN STUDIO LTD
Profit and Loss Account for the year ended 31 March 2026

                                          £
Turnover                              74,800
Cost of raw materials and consumables (6,000)
Staff costs                          (12,570)
Depreciation and other amounts
  written off assets                    (633)
Other charges                         (8,232)
Tax                                   (8,831)
                                     -------
Profit for the financial year         38,534
                                     =======
```

Again the rolled-up presentation. **Other charges £8,232** captures the rent, software, phone, travel, entertainment, accountancy fee, bank charges, and use of home together. The profit and loss account does not have to be filed at Companies House under FRS 105, but HMRC always wants it.

---

## 5. Capital and reserves explained

The capital and reserves section is where the company's owner-side numbers live. Three things go there:

- **Called up share capital.** What Sarah paid (or agreed to pay) for her shares. For Acorn that is £100 - one share of £1 issued one hundred times when the company was set up, or 100 shares of £1 each. Same thing in practice. It almost never changes.
- **Profit and loss account (retained earnings).** All the profit the company has ever made, less all the dividends it has ever paid. This is the part that grows year by year.
- **Other reserves** (rare for tiny Ltds). Share premium, capital redemption reserve, revaluation reserve. FRS 105 does not allow most of these. Skip.

The opening retained earnings for the year was £212 (the first year's accumulated profit). The movement during 2025/26 was:

| | £ |
|---|---|
| Opening retained earnings (1 April 2025) | 212 |
| Add profit for the year | 38,534 |
| Less dividends paid in year | (25,000) |
| **Closing retained earnings (31 March 2026)** | **13,746** |

Reserves go up by profit and down by dividends. That's the rule.

> **Tip:** A dividend can only be paid out of "distributable reserves." If the profit and loss account is negative, you cannot legally pay a dividend, no matter how much cash is in the bank. This trips up new directors who treat the bank balance as the test. The test is the retained-earnings line on the balance sheet, not the cash.

---

## 6. What goes to Companies House versus HMRC

This is the bit that catches everyone the first time.

### To Companies House

For a micro-entity using FRS 105 you can file what is sometimes called a **filleted** set. Typically that is:

- The balance sheet (with the small companies regime / micro-entities provisions wording at the foot).
- A handful of notes (employees average, related party transactions if any, accounting policies summary).
- Director's signature and date.

You do **not** have to file the profit and loss account at Companies House. The whole point of the micro-entity regime is to keep the company's trading detail private from the wider public record while still meeting the law.

You file at Companies House through **WebFiling** (free, still available as of 28 May 2026) or through software. A software-only mandate was originally planned for 1 April 2027 but is currently under review, so for now WebFiling remains an option.

### To HMRC

HMRC always sees the **full** set: balance sheet, P&L, notes. Plus your tax computation. Plus your CT600 form. All three are tagged in **iXBRL** (more on that in Week 4). You attach them to the CT600 submission.

This means HMRC sees more than the public does. That is by design. HMRC is auditing your tax return; the public is just looking up basic data.

> **Warning:** Do not file abridged or filleted accounts with HMRC. They want the full set including P&L. Sending only the balance sheet to HMRC will trigger a query.

---

## 7. The seven year-end adjustments

A trial balance is a snapshot of what got recorded during the year. Before it becomes a set of accounts, you have to layer on the year-end adjustments. There are seven that come up almost every time. For each, we show what the adjustment is, why we're doing it, and the journal entry Acorn needs.

### 7.1 Accruals

**What it is.** Recognising an expense that the company has consumed during the year but for which the supplier has not yet sent an invoice.

**Why.** UK companies use the **accruals basis** of accounting (Companies Act requirement). That means costs are recognised when they are incurred, not when they are paid. If a service was used in the year, the cost belongs in the year.

**Acorn's accrual.** The local accountant has prepared Acorn's accounts but has not yet issued an invoice by 31 March 2026. Sarah agreed a £900 fee. The accountancy work relates to this year, so the expense belongs in this year.

```
Dr Accountancy fees (P&L)     £900
   Cr Accruals (Balance Sheet)        £900
```

This bumps the P&L expense line and creates a liability (accruals) on the balance sheet. When the invoice arrives in April, the reversal entry happens and the actual invoice posts. The two cancel out, leaving the cost in the right year.

### 7.2 Prepayments

**What it is.** Recognising that a payment made in the current year actually relates to a future period.

**Why.** Same accruals reasoning, in reverse. The cost belongs in the period it benefits.

**Acorn's prepayment.** Sarah paid £240 in March 2026 for an Adobe Creative Cloud annual subscription that runs March to February. Two months (March and February) belong to the current year, but the bulk belongs to the next year. To keep it simple we treat 2 months in this year (£40) and 10 months as a prepayment (£200). Or, if you want round numbers, treat the full £240 as a prepayment because it was paid right at year-end and almost none of the benefit has been consumed.

For Acorn we use the simple split:

```
Dr Prepayments (Balance Sheet)    £240
   Cr Software subscriptions (P&L)         £240
```

This removes £240 from the year's software expense (since it has not yet been "used") and creates an asset on the balance sheet that will be released into next year's P&L.

### 7.3 Depreciation

**What it is.** Spreading the cost of a fixed asset over its useful life.

**Why.** A laptop is not used up in one year. It would be misleading to put the whole cost into year 1 and show £0 cost in years 2 and 3. Depreciation matches the cost to the years that benefit from the asset.

**Acorn's policy.** Sarah's accountant has set a 3-year straight-line depreciation policy. Total cost £1,900, so the annual charge is roughly £633. Acorn's first-year charge is £633.

```
Dr Depreciation (P&L)               £633
   Cr Accumulated depreciation (BS)         £633
```

**Important point that becomes huge in Week 3.** This depreciation is an **accounting** concept. The tax system ignores it entirely. Tax has a parallel concept called **capital allowances** that does its own thing with the same asset. Hold that thought. We deal with it next week.

### 7.4 Corporation tax provision

**What it is.** The tax charge for the year, recognised in the accounts even though it is not paid yet.

**Why.** The tax expense belongs in the year the profit was made. The cash will not actually leave the company until 1 January 2027 (9 months and 1 day after year-end), but the cost still belongs in the 2025/26 P&L.

**Acorn's tax provision.** We do not yet know the exact figure because we have not done the tax computation. We will calculate it properly in Week 3. As a placeholder, we use **£8,831** (the answer we will arrive at in Week 3).

```
Dr Corporation tax (P&L)             £8,831
   Cr Corporation tax payable (BS)              £8,831
```

The P&L now shows the tax cost, and the balance sheet shows a liability owed to HMRC.

### 7.5 Dividends

**What it is.** Distribution of profit to shareholders.

**Why post them properly.** Dividends are **not an expense**. They do not reduce profit. They are a distribution of post-tax profit to the owner. Posting them in the P&L (where many DIY bookkeepers put them) understates profit and understates tax. Worse, it would mean the corporation tax is calculated on the wrong number.

**Acorn's dividends.** Sarah declared and paid £25,000 of dividends across the year.

```
Dr Dividends (Equity, account 480)      £25,000
   Cr Bank (or Director's Loan Account)             £25,000
```

The dividend account sits in the equity section of the balance sheet (or in a "movements in reserves" section if you prefer to think of it that way). It reduces retained earnings; it does not touch the P&L.

> **Tip:** A dividend must be supported by a board minute and a dividend voucher. The minute records the decision; the voucher records the amount, the date, and the recipient. Sarah keeps copies in a folder. HMRC has been known to challenge unsupported dividend payments and reclassify them as salary (which would mean PAYE and NIC are due).

### 7.6 Director's salary, PAYE and pension

**What it is.** Booking the director's payroll correctly.

**Why.** A director's salary is a deductible expense for corporation tax. Paying it through payroll is what makes it a salary rather than a drawing from the director's loan account.

**Acorn's payroll.** Sarah pays herself £12,570 per year. That is the personal allowance for income tax. Below that figure she pays no income tax. Below the National Insurance secondary threshold (£9,100 for 2025/26 - but employer NIC actually starts to bite from £5,000 in some recent budgets - check your software's tax tables), there is no employer NIC either, depending on the rule and date. For this tutorial, assume Acorn's salary is structured to produce zero employer NIC for 2025/26 (a common owner-manager pattern).

The payroll journal for the year (simplified, monthly):

```
Dr Wages (P&L)                       £12,570
   Cr Net wages payable (BS)                  £12,570
```

Each month, the bank transfer to Sarah clears the net wages payable. PAYE is zero (under the personal allowance). Employer NIC is zero (under the secondary threshold).

If Sarah did pay PAYE, the journal would split:

```
Dr Wages (P&L)                       £12,570
   Cr Net pay payable (BS)                    £10,000
   Cr PAYE & NIC payable (BS)                  £1,500
   Cr Pension payable (BS)                     £1,070
```

And the bank payment to Sarah and the bank payment to HMRC each clear the relevant liability code.

The key principle: a salary requires a payroll filing (Real Time Information or **RTI**) each pay period. Without RTI, the cash payment to the director is treated as a drawing, not a salary. We come back to that error pattern in Week 5.

### 7.7 Bank reconciliation

**What it is.** Confirming the bank balance in the books matches the bank statement at year-end.

**Why.** If the bank does not reconcile, the trial balance is wrong, and the accounts are wrong. Every figure that flows from there is suspect. You cannot prepare accounts on an unreconciled file.

**Acorn's check.** Run Xero's Bank Reconciliation Summary at 31 March 2026. The Statement balance and the Balance in Xero columns should match to the penny. Any unreconciled items must be cleared (genuine missing transactions added; duplicate "Adjustment" lines undone and properly matched).

Acorn's reconciliation comes out clean: bank statement £18,420; Xero balance £18,420. Good.

---

## 8. Putting it all together: from TB to FRS 105 accounts

Here is the sequence step by step.

**Step 1.** Start with the locked trial balance from Week 1. Debits and credits both £77,795.

**Step 2.** Post the seven adjustment journals above. Each one keeps the TB balanced (every debit is matched by a credit).

**Step 3.** Run a new trial balance after the adjustments. It still balances, now at a higher total because we have added accruals, prepayments, accumulated depreciation, CT payable, and reclassified dividends.

**Step 4.** Map the adjusted trial balance to the FRS 105 minimum format:

| FRS 105 line | Comes from these TB accounts |
|---|---|
| Turnover | 200 Sales |
| Cost of raw materials and consumables | 310 COGS (Acorn's subcontractor designer £6,000) |
| Staff costs | 477 Wages and salaries |
| Depreciation and other amounts written off assets | 408 Depreciation |
| Other charges | 449 Rent, 471 Software, 489 Phone, 493 Travel, 415 Entertainment, 459 Accountancy, 404 Bank charges, 425 Use of home |
| Tax | 500 Corporation tax |
| Fixed assets | 710 Fixed assets at cost, less 711 Accumulated depreciation |
| Current assets | 090 Cash at bank, 610 Debtors, 838 Prepayments |
| Creditors within one year | 800 Trade creditors, 836 Accruals, 830 CT payable |
| Called up share capital | 920 Share capital |
| Profit and loss account (retained) | 970 Retained earnings (opening) plus profit for year less dividends |

**Step 5.** Produce the accounts. Write the balance sheet and P&L using the FRS 105 minimum format. Add the notes.

**Step 6.** Get them signed by the director. Date them. The signature appears on the balance sheet. The accounting period the accounts cover must be stated clearly.

---

## 9. The notes you need in FRS 105 accounts

FRS 105 trims the notes radically. For Acorn, you will end up with:

### 9.1 Accounting policies

A single short paragraph at the back. Suggested wording for Acorn:

> "The financial statements have been prepared under the historical cost convention and in accordance with FRS 105, The Financial Reporting Standard applicable to the Micro-entities Regime. Turnover represents amounts receivable in respect of services provided during the year, net of value added tax (where applicable). Tangible fixed assets are depreciated on a straight-line basis over their estimated useful economic lives of three years."

### 9.2 Average number of employees

A one-line note: "The average number of employees (including directors) during the year was 1."

### 9.3 Related party transactions

Required only if there are any. For Acorn, the dividend paid to Sarah is a related party transaction (Sarah is both director and shareholder). The note can be brief:

> "Dividends of £25,000 were paid during the year to S. Brown, director and sole shareholder."

If Sarah had a director's loan, that would also go here. She doesn't.

### 9.4 Other notes

For most micro-entities, that is everything. No tax notes, no fixed asset notes, no creditors notes. The summary on the balance sheet is taken to be sufficient.

---

## 10. The directors' report and approval

### 10.1 The directors' report

FRS 105 micro-entities are **exempt** from preparing a directors' report. Sarah doesn't need to write one. (Small companies under FRS 102 1A also typically qualify for exemption, but they have a few more disclosures.)

### 10.2 Approval

The balance sheet must be approved by the directors and signed by one of them, with the date of approval shown. For Acorn, that is Sarah. The signature appears at the foot of the balance sheet under the legally required wording.

### 10.3 The legally required Companies Act statements

Under the micro-entity regime, the balance sheet must contain specific statements. The standard wording is:

> "The directors acknowledge their responsibilities for complying with the requirements of the Companies Act 2006 with respect to accounting records and the preparation of accounts."
>
> "These accounts have been prepared in accordance with the provisions applicable to companies subject to the small companies regime and the micro-entities provisions."
>
> "The members have not required the company to obtain an audit of its accounts for the year in question in accordance with section 476 of the Companies Act 2006."

These three sentences (or close variants) appear at the foot of the balance sheet for almost every UK micro-entity. Filing software inserts them automatically. If you are preparing the accounts by hand in Word, include them verbatim.

---

## 11. What's in your Xero

> **Xero workflow for posting the year-end journals**
>
> 1. Lock the period to prevent further changes: Accounting > Advanced > Lock Dates. Set the lock to 31 March 2026 for everyone but you (the adviser).
> 2. Open the manual journal tool: Accounting > Manual journals > New journal.
> 3. Date each adjustment 31 March 2026. Give a clear narrative ("Y/E accrual - accountancy fee", "Y/E prepayment - Adobe annual sub", "Y/E depreciation 2025/26", "Y/E CT provision", "Reclass dividend to equity").
> 4. For depreciation, prefer the Fixed Assets module: Accounting > Advanced > Fixed Assets > Run Depreciation > set the "To" date as 31 March 2026 > Review > Confirm. This posts the journal automatically.
> 5. For accruals and prepayments, tick the **Auto Reverse** option so that Xero automatically posts the opposite entry on 1 April 2026. That saves a step at the start of the next year.
> 6. After posting all journals, re-run the Trial Balance and Profit and Loss reports to confirm the new totals.

Xero will give you a clean adjusted trial balance and a draft P&L and balance sheet. It will not, by itself, produce a set of FRS 105 statutory accounts in the right legal format. For that you need a separate accounts production tool. Realistic options for a self-filer:

- **TinyTax** has a guided FRS 105 builder included in its annual subscription.
- **FreeAgent** can produce FRS 105 micro-entity accounts directly if Acorn already uses FreeAgent for bookkeeping (and is connected to Mettle / NatWest / RBS business banking for the free tier).
- **Easy Digital Filing** has an FRS 105 accounts module within its filing workflow.
- **TaxCalc / Andica / BTC Software** are more accountant-flavoured but are also realistic for someone willing to learn an old-school UI.

Whichever tool you use, the workflow is the same: enter the adjusted trial balance figures into the tool's mapping, review the draft accounts, get them signed off, file them.

---

## 12. Common errors to watch for

> **Wrong depreciation rate.** A laptop on a 10-year straight line is too slow; a laptop on a 1-year straight line is too fast. The realistic life for a laptop is 3 years. Stick to that unless you have a reason not to.
>
> **Missing the accountancy accrual.** The single most common omission. The accountancy bill arrives months after year-end, and DIY bookkeepers forget to accrue it. Result: cost in the wrong year, profit overstated, tax overstated.
>
> **Prepayment posted the wrong way round.** A prepayment is an asset; the offsetting credit reduces the expense. If you accidentally post it as Dr Expense / Cr Prepayments, you have doubled the cost and created a negative asset.
>
> **Dividends still in P&L after the adjustment.** Easy to miss if you only adjust some of the dividend payments. Run Account Transactions on your "Dividends" code and check every line has been reclassified.
>
> **Share capital missing on balance sheet.** Easily happens when a company is set up without anyone posting the £100 share issue. Result: net assets is short by £100. Fix with a one-off journal: Dr Bank £100 (or Director's loan if Sarah owes for the shares) / Cr Share capital £100.
>
> **P&L doesn't agree to TB after journals.** The most common cause: a journal that hit the P&L on one side and didn't have a corresponding balance-sheet leg, breaking double entry. Xero would normally not let this happen, but watch for journals that touched the wrong account.
>
> **Forgetting the Companies Act statements on the balance sheet.** Without them, the accounts are technically deficient. Companies House will accept them but a careful reader (or HMRC) might query.

---

## 13. Mini quiz

Try these before you peek at the answers.

1. Which UK accounting standard does a typical one-person Ltd use, and what are the three size thresholds for it?
2. A company pays its insurance premium of £1,200 on 1 January 2026 covering the calendar year. The company's year-end is 31 March 2026. What is the prepayment at year-end?
3. Acorn buys a laptop for £1,500 on 1 April 2025 and depreciates over three years straight line. What is the depreciation charge in the year ended 31 March 2026, and what is the net book value at that date?
4. A director takes £20,000 of dividends out of the company during the year. Where does that figure appear in the accounts, and where does it not appear?
5. Why does a UK limited company have to use the accruals basis of accounting, even if it's tiny?

<details>
<summary>Answers</summary>

1. FRS 105. The thresholds (meet 2 of 3) are turnover £1,000,000, balance sheet total £500,000, employees 10. These are the post-6-April-2025 thresholds.
2. The premium covers 12 months. Three months (January, February, March) fall in the current year. Nine months (April through December) belong to the next year. Prepayment = £1,200 x 9/12 = £900.
3. Depreciation charge £500 (£1,500 / 3). Net book value £1,000 (£1,500 - £500).
4. Dividends are posted to equity (reducing retained earnings) on the balance sheet and shown in the movement in reserves. They do not appear in the P&L. They are not a tax-deductible expense.
5. The Companies Act 2006 requires accounts to give a true and fair view, and the accruals basis is fundamental to that. Cash accounting is permitted for some sole traders but not for limited companies preparing statutory accounts.

</details>

---

## 14. Bonus exercise

A tiny Ltd called **Maple Photography Ltd** has the following trial balance at 31 March 2026 (before any year-end adjustments). The director, Tom Maple, has bookkept the year himself.

```
                              Dr (£)    Cr (£)
Bank                          14,200
Trade debtors                  3,200
Sales                                  62,400
Subcontract photography costs  4,800
Rent                           3,200
Software (a £1,200 March
  payment covers
  the calendar year ahead)     2,400
Phone                            720
Travel                           560
Equipment at cost              2,400
Wages (Tom, £12,570)          12,570
Bank charges                      80
Share capital                              100
Retained earnings b/f                      150
Dividends paid in year         9,500
Accountancy
  (Tom's accountant has
   verbally agreed
   £1,000 for the year;
   no invoice yet)                  -        -
                             ------    ------
                             53,230    62,650
```

The TB does not balance. There are also two adjustments to apply.

**Tasks.**

1. Identify why the trial balance does not balance.
2. Post the two year-end adjustments (accrual, prepayment) and any other obvious correction needed.
3. Produce an adjusted trial balance.
4. Produce an FRS 105 micro-entity profit and loss account and balance sheet.

<details>
<summary>Answers</summary>

**Why the TB does not balance.** The dividend of £9,500 has been recorded as a debit (which is the right side for the equity dividend account because dividends reduce equity), but Tom has likely missed recording the bank credit of £9,500 going out. He needs to add Cr Bank £9,500. Net effect: Bank reduces to £4,700. Once that is corrected, debits and credits both come to £53,150 - still missing the accountancy accrual and prepayment.

(Alternative reading: Tom missed posting the £9,500 entirely from one side. The remedy is the same: post Cr Bank £9,500 against the existing Dr Dividends £9,500.)

**Year-end adjustments.**

Accrual:
```
Dr Accountancy fees  £1,000
   Cr Accruals               £1,000
```

Prepayment (the £1,200 March payment covers April to March of the next calendar year; the year-end is 31 March 2026, so the entire £1,200 belongs to next year):
```
Dr Prepayments       £1,200
   Cr Software              £1,200
```

**Depreciation.** Tom has £2,400 of equipment at cost but no depreciation policy. Assume a 3-year straight-line policy. Annual charge £800.
```
Dr Depreciation             £800
   Cr Accumulated depreciation     £800
```

**Adjusted TB (rounded):**

```
                              Dr (£)    Cr (£)
Bank                           4,700
Trade debtors                  3,200
Prepayments                    1,200
Equipment at cost              2,400
Accumulated depreciation                   800
Trade creditors / Accruals               1,000
Share capital                              100
Retained earnings b/f                      150
Dividends paid in year         9,500
Sales                                  62,400
Subcontract                    4,800
Rent                           3,200
Software (after adj)           1,200
Phone                            720
Travel                           560
Wages                         12,570
Bank charges                      80
Accountancy                    1,000
Depreciation                     800
                             -------   -------
                              45,930    64,450

(Difference £18,520 = profit before tax for the year)
```

**FRS 105 P&L (year ended 31 March 2026):**

| | £ |
|---|---|
| Turnover | 62,400 |
| Cost of raw materials and consumables | (4,800) |
| Staff costs | (12,570) |
| Depreciation and other amounts written off assets | (800) |
| Other charges | (5,760) (rent, software, phone, travel, accountancy, bank charges) |
| Tax (provisional) | (3,520) (~ 19% of £18,520 less AIA on equipment) |
| **Profit for the financial year** | ~14,750 |

**FRS 105 Balance Sheet (at 31 March 2026):**

| | £ |
|---|---|
| Fixed assets | 1,600 (2,400 cost less 800 acc dep) |
| Current assets | 9,100 (bank 4,700 + debtors 3,200 + prepayments 1,200) |
| Creditors within one year | (4,520) (accruals 1,000 + CT payable ~3,520) |
| Net current assets | 4,580 |
| Total assets less current liabs | 6,180 |
| Called up share capital | 100 |
| Profit and loss account | 6,080 |
| Shareholders' funds | 6,180 |

(Numbers above are approximate - the exercise is to practise the mechanics, not to nail every penny.)

</details>

---

## Next week

You now have a set of FRS 105 micro-entity accounts. Profit before tax is £47,365. We have a placeholder corporation tax provision of £8,831 in the accounts.

In Week 3 we calculate that tax provision properly. We learn the most important idea in corporation tax: **accounting profit is not taxable profit**. We add back the disallowables (depreciation, entertaining), subtract the capital allowances, and arrive at the taxable total profits. We also meet marginal relief and the rate band structure.

It is the densest week of the course. Take a break first.
