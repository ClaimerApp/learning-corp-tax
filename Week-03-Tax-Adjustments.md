# Week 3: From Accounting Profit to Taxable Profit

> **What you'll know by the end of this week**
> - Why accounting profit is never the same as taxable profit
> - The standard layout of a UK corporation tax computation
> - Which expenses are disallowable and how to add them back
> - The difference between depreciation and capital allowances, and how AIA and full expensing work
> - The 19% small profits rate, the 25% main rate, and marginal relief in between
> - How associated companies and short accounting periods divide the thresholds
> - How a tax computation maps box-by-box to the CT600

This is the most important week of the course. If you understand the difference between accounting profit and taxable profit, you understand the core of UK corporation tax. Everything else is detail.

You ended Week 2 with a set of FRS 105 micro-entity accounts for Acorn Studio Ltd. Profit before tax was £47,365. We provisionally booked a £8,831 tax charge. This week we earn that figure.

---

## 1. The key insight: accounting profit is not taxable profit

Here is the most useful mental model in UK corporation tax.

**Accounting profit** is what your accounts say you earned. It is governed by accounting standards (FRS 105, FRS 102, IFRS). The standards exist to give a fair and useful picture to readers of accounts.

**Taxable profit** is what HMRC says you earned for the purpose of charging corporation tax. It is governed by tax legislation (CTA 2009, CTA 2010, capital allowances acts). The legislation exists to raise revenue in a way Parliament has decided is fair, simple to administer, and economically sensible.

The two definitions overlap, but they are not the same. The differences are small for a tiny Ltd but they always exist. The job of a tax computation is to start from accounting profit and adjust it to arrive at taxable profit.

The mental model:

```
Accounting profit per the accounts
    + things the accounts treated as costs but tax does not
    - things the accounts ignored that tax allows
    +/- timing differences (income or costs in the wrong year for tax)
    = Taxable profit
```

That is corporation tax in one sentence. The rest of this week fills in the detail.

> **Tip:** This is also where DIY filers most often go wrong. The two most common errors are (a) forgetting to add back depreciation and (b) treating client entertaining as deductible. Together they account for a surprising chunk of HMRC's enquiry workload at the small end.

---

## 2. The standard tax computation layout

Every accountant lays out the corporation tax computation in the same broad shape. It looks like this:

```
Profit before tax (from the accounts)                  X

ADD: Disallowable expenses
    Depreciation                                       X
    Amortisation                                       X
    Client entertaining                                X
    Fines and penalties                                X
    Capital costs misposted to P&L                     X
    Other disallowables                                X
                                                       --
                                                       X

LESS: Income to be taxed separately
    Bank interest received                           (X)
    Rental income                                    (X)
                                                       --
                                                       X

LESS: Capital allowances
    Annual Investment Allowance (AIA)                (X)
    Full Expensing                                   (X)
    Writing-Down Allowance (WDA)                     (X)
                                                       --
Tax-adjusted trading profit                            X

ADD: Other taxable income
    Bank interest received                             X
    Rental income                                      X
    Chargeable gains                                   X
                                                       --
Total profits                                          X

LESS: Reliefs
    Losses brought forward                           (X)
    Qualifying charitable donations                  (X)
    Group relief                                     (X)
                                                       --
Taxable Total Profits (TTP)                            X

Corporation tax at applicable rate                     X
LESS: Marginal relief (if applicable)                (X)
                                                       --
Corporation tax payable                                X
```

For a tiny Ltd like Acorn, most of those lines are zero. The computation collapses to half a page. But the shape is the same.

Let's walk each section in turn.

---

## 3. Disallowable expenses

A **disallowable expense** is an expense that appears in the P&L but that tax law refuses to recognise. You add it back to the profit before tax. This increases taxable profit and therefore the tax charge.

Why does Parliament disallow some expenses? Sometimes for policy reasons (we don't want to subsidise X). Sometimes for definitional reasons (X is a private cost, not a business cost). Sometimes because tax uses a parallel mechanism (X is replaced by Y). Here are the ones that matter for a small Ltd.

### 3.1 Depreciation and amortisation

**Always added back.** No exceptions.

Depreciation is the accounting concept of spreading a capital cost over the asset's life. Tax has its own concept called **capital allowances** that does the same job differently. Because tax has its own mechanism, the accounting depreciation is not allowed. Otherwise the company would get relief twice.

Acorn's depreciation charge was £633 in the year. **Add back £633.**

Amortisation is the same idea applied to intangible assets (software licences, goodwill, patents). It is generally added back too, though some intangible assets created or acquired after April 2002 have their own tax treatment under the **intangible fixed assets regime**. For tiny Ltds, you almost never need to know that detail.

### 3.2 Client entertaining

**Almost always disallowable.** Set out in CTA 2009 s.1298.

The legal definition is the provision of hospitality or entertainment to anyone other than employees of the company. That means:

- Lunches and dinners with clients: disallowable.
- Drinks at the pub with a prospect: disallowable.
- Tickets to a sporting event for a client: disallowable.
- Hospitality at a trade show for clients: disallowable.

Acorn's client lunches totalled £380 in the year. **Add back £380.**

Important exceptions, all narrow:

- **Staff entertaining** is allowed (for staff who are also employees, not for sole-director companies that are really one-person). Acorn's "staff" Christmas lunch would qualify only if there were genuinely employees. If Sarah took just herself out to dinner and called it staff entertaining, HMRC would push back.
- **The £150-per-head annual function exemption** is a separate concept that keeps a staff event free of benefit-in-kind tax for the employees personally. It does not, in itself, make the cost deductible to the company. The two reliefs are independent.
- **Promotional events open to the public** can fall outside business entertainment if they meet specific conditions.

VAT on business entertaining is also not recoverable.

### 3.3 Fines and penalties

**Disallowable.** This includes:

- Parking tickets (yes, even ones from a delivery driver doing their job).
- Speeding fines.
- Late filing penalties to Companies House and HMRC.
- Late payment penalties.
- Regulatory fines.

The rationale: Parliament does not want the tax system to reduce the sting of breaking the rules. If a fine were deductible, the effective cost would only be 81% of the headline (after 19% relief), which weakens deterrence.

Acorn has no fines this year. **Add back £0.**

### 3.4 Capital costs misposted to P&L

If a fixed asset was wrongly posted as an expense, the expense must be added back (and the asset capitalised). This is more of an accounts correction than a tax adjustment, but it has tax effects.

Acorn capitalised its assets properly (£1,900 went to fixed assets, not to P&L). **Add back £0.**

### 3.5 Private use proportion

If an expense has a personal element, only the business proportion is deductible. The personal element is disallowable. For Sarah's mobile phone, if 25% is personal and 75% is business, only 75% is deductible.

Acorn's expenses were all business (or used the HMRC simplified flat rates that handle the apportionment automatically). **Add back £0.**

### 3.6 Capital legal fees

Legal fees that relate to a capital transaction (buying a property, raising share capital, an acquisition) are not deductible. They form part of the cost of the capital item instead.

Routine commercial legal fees (drafting a customer contract, a tenancy renewal of the same office) are deductible as revenue expenditure.

Acorn paid no legal fees this year. **Add back £0.**

### 3.7 Gifts to customers

Generally disallowable. Three narrow exceptions all of which must apply for relief:

- The gift bears a conspicuous advertisement of the company.
- It is not food, drink, tobacco, or a token/voucher exchangeable for goods.
- The cost per recipient per tax year is £50 or less.

A branded mug at £8: allowed (just). A bottle of wine: not allowed. A £60 hamper: not allowed.

Acorn gave no gifts. **Add back £0.**

### 3.8 Acorn's disallowables summary

| Item | Add back? |
|---|---|
| Depreciation | £633 |
| Client entertaining | £380 |
| Fines and penalties | £0 |
| Capital costs in P&L | £0 |
| Private use proportion | £0 |
| Capital legal fees | £0 |
| Gifts to customers | £0 |
| **Total add-back** | **£1,013** |

Running total: profit before tax £47,365 + add-backs £1,013 = £48,378. Now we deal with capital allowances.

---

## 4. Capital allowances: tax's version of depreciation

This is the heart of the computation. Read it twice.

### 4.1 The principle

You bought a £1,900 laptop and desk. In the accounts you depreciate them over three years, taking £633 each year. We have just added that £633 back because tax does not recognise depreciation.

In its place, tax gives you **capital allowances**. The 2025/26 regime is unusually generous for plant and machinery. There are three main vehicles.

### 4.2 The Annual Investment Allowance (AIA)

Established 2008. Permanent at £1,000,000 since April 2023.

The AIA gives 100% relief in year one on qualifying capital expenditure up to the AIA limit. That covers almost every fixed asset a tiny Ltd buys, including:

- Computers, laptops, monitors.
- Desks, chairs, shelving.
- Tools, equipment, machinery.
- Vans (commercial vehicles).
- Office fit-out (lighting, partitions, integral features).
- Most software (the tax treatment of software is its own little maze).

Excluded:

- **Cars** (with rare exceptions for zero-emission cars, which use a separate 100% first-year allowance).
- Land and buildings (which use **Structures and Buildings Allowance** at 3% per year).
- Assets gifted to the business.

Acorn's £1,900 of plant and machinery all qualify. AIA fully relieves £1,900 in year one. Relief = £1,900.

> **Worked example:** Acorn bought a £1,500 MacBook and a £400 desk-and-chair set, totalling £1,900. Under AIA, all £1,900 is deductible for tax in year one, even though the accounts spread the cost over three years. Acorn gets full tax relief immediately.

### 4.3 Full Expensing

Introduced April 2023. Made permanent. Companies only.

Full expensing gives 100% first-year relief on **new and unused** main-rate plant and machinery, with no cap. It is essentially an unlimited AIA for the largest companies (who would otherwise exhaust the £1m AIA).

For a tiny Ltd it makes no practical difference: you can use either AIA or full expensing for the same asset, and both give 100% relief in year one. AIA is broader (it covers second-hand assets, which full expensing does not), so most practitioners default to AIA. We do too.

A parallel **50% first-year allowance** exists for **special-rate** expenditure (integral features, long-life assets, thermal insulation), again companies only, new and unused.

### 4.4 Writing-Down Allowances

If you have an asset that is not eligible for AIA or full expensing (typically a car), or if you have unused capital allowances pool brought forward from an earlier year, you use **writing-down allowances** to relieve the cost over time.

- **Main pool: 18% per year**, reducing balance.
- **Special rate pool: 6% per year**, reducing balance.
- **Zero-emission cars: 100% first-year allowance**.

Reducing balance means each year you take the percentage off the current balance. A car with £20,000 of cost in the main pool: year 1 WDA £3,600 (18% of £20,000), residual £16,400; year 2 WDA £2,952 (18% of £16,400), residual £13,448; and so on.

### 4.5 Cars

Cars are awkward enough to deserve their own paragraph. Cars do not qualify for AIA or full expensing. They go straight into a capital allowances pool and are relieved by WDA only. The rate depends on the car's CO2 emissions:

- Zero-emission electric car: 100% FYA in year one (an exception to the no-AIA rule).
- Low-emission car (under 50g/km CO2): main pool, 18% WDA.
- Higher-emission car (over 50g/km): special rate pool, 6% WDA.

For a one-person Ltd that buys an electric car for company use, the 100% FYA is generous and worth knowing about. Mixed personal-and-business use needs to be apportioned (the **company's allowance is restricted** by the private use proportion).

### 4.6 Acorn's capital allowances claim

Acorn bought £1,900 of plant and machinery (laptop and desk) on 1 April 2025. All qualifies for AIA. Annual claim:

```
AIA on additions:    £1,900
WDA on pool b/f:         £0  (no pool brought forward)
Total capital allowances: £1,900
```

That gets us from the running total of £48,378 down to **£46,478** of trading profit. That is the tax-adjusted figure we will base the tax charge on.

---

## 5. Acorn Studio Ltd's full tax computation

Now we can lay it out properly.

```
ACORN STUDIO LTD
Corporation tax computation for the year ended 31 March 2026

                                          £
Profit before tax (per accounts)     47,365

ADD: Disallowable expenses
    Depreciation                        633
    Client entertaining                 380
                                      -----
                                     48,378

LESS: Capital allowances
    Annual Investment Allowance      (1,900)
                                      -----
Tax-adjusted trading profit          46,478

Other taxable income                      0
Less reliefs                              0
                                      -----
Taxable Total Profits (TTP)          46,478

Corporation tax at 19%
  (small profits rate, profits
  under £50,000)                     £8,830.82
Rounded                              £8,831
```

That £8,831 is the figure we used as a provision back in Week 2. We now know how it was earned. It will go into the CT600 Box 525 (CT payable) next week.

---

## 6. Corporation tax rates and bands

The UK runs a graduated CT rate. The structure for FY2025 (1 April 2025 to 31 March 2026) is unchanged for FY2026 (from 1 April 2026):

| Band | Taxable profit | Rate |
|---|---|---|
| Small profits | Up to £50,000 | 19% |
| Marginal relief | £50,001 to £250,000 | Sliding (effective marginal 26.5%) |
| Main rate | Over £250,000 | 25% |

Acorn's TTP of £46,478 is comfortably inside the small profits band. The 19% rate applies to all of it. No marginal relief needed.

### 6.1 Marginal relief explained

When your TTP is between £50,000 and £250,000, you do not just pay 19% on the first £50,000 and 25% on the rest. The system uses **marginal relief** instead, which produces a sliding effective rate.

The formula (CTA 2010 s.18N):

```
Marginal Relief = F x (U - A) x (N / A)
```

Where:

- **F** is the marginal relief fraction = 3 / 200
- **U** is the upper limit = £250,000
- **A** is "augmented profits" (TTP plus most exempt distributions from non-group companies)
- **N** is TTP itself

For most tiny Ltds, augmented profits A equals TTP N (no exempt distributions), so the formula simplifies to:

```
Marginal Relief = F x (U - N) = (3/200) x (£250,000 - N)
```

The mechanism is: tax all profit at 25% as if the main rate applied, then subtract marginal relief.

### 6.2 A worked marginal relief example

Suppose a hypothetical company called Beech Ltd has TTP of £150,000.

Step 1: tax all of TTP at 25%: 25% x £150,000 = £37,500.

Step 2: calculate marginal relief: (3/200) x (£250,000 - £150,000) x (£150,000 / £150,000) = (3/200) x £100,000 x 1 = £1,500.

Step 3: corporation tax payable = £37,500 - £1,500 = £36,000.

Step 4: effective rate = £36,000 / £150,000 = 24%.

The effective rate slides up as TTP grows. At £50,001 it is just over 19%. At £250,000 it is exactly 25%. Within the band, every extra pound of profit is taxed at an effective marginal rate of **26.5%** (because you lose 1.5 pence of marginal relief for every extra pound of profit, on top of the 25% headline).

HMRC publishes a calculator that does all this for you: [https://www.tax.service.gov.uk/marginal-relief-calculator](https://www.tax.service.gov.uk/marginal-relief-calculator). Use it. There is no prize for doing the maths by hand.

---

## 7. Associated companies

The £50,000 and £250,000 thresholds **divide** if the company has associated companies.

**Associated** means one company controls the other, or both are under common control. Control means more than 50% of share capital, voting rights, distributable income, or net assets in winding up. The test is broad.

If a company has N associated companies (not counting itself), the thresholds are divided by **N + 1**. So:

- One company: full thresholds (£50k / £250k).
- Two associated companies: thresholds halve (£25k / £125k each).
- Three associated companies: thresholds divide by three (£16,667 / £83,333 each).

Worldwide companies count. UK and overseas. Companies that were dormant for the whole period are ignored.

This catches founders who have set up multiple Ltds. If Sarah owned a sister company called Acorn Properties Ltd (even if completely separate from her web design work), both companies would have to share the thresholds. Acorn Studio Ltd would only get the small profits rate up to £25,000 of TTP, not £50,000.

> **Worked example:** Suppose Sarah owns two Ltds, both with TTP of £45,000 each. Without the associated companies rule, each pays 19% on £45,000 = £8,550. Total tax £17,100. With the associated rule, each gets a small profits limit of £25,000. The first £25,000 is at 19% (£4,750); the next £20,000 falls into the marginal band. Tax at 25% = £5,000, less marginal relief of (3/200) x (£125,000 - £45,000) x (£45,000 / £45,000) = £1,200. So tax on the £20,000 marginal portion = £5,000 - £1,200 = £3,800. Total per company: £4,750 + £3,800 = £8,550. Hmm, the same. That is because in this specific example we just hit the boundary. With higher profits the associated rule bites harder. Try £75,000 each and see.

The point: if you have more than one Ltd, expect the rules to apply, and check whether the second company is genuinely needed.

---

## 8. Short accounting periods

If a company's accounting period is shorter than 12 months (typically the first or last period of a company's life), the £50,000 and £250,000 thresholds are **time-apportioned**.

A six-month period: thresholds halved (£25,000 / £125,000).

A three-month period: thresholds quartered (£12,500 / £62,500).

The CT600 itself can only cover periods up to 12 months. A long accounting period (over 12 months) requires two CT600s, with profit time-apportioned between them.

Acorn's period is exactly 12 months (1 April 2025 to 31 March 2026), so no apportionment is needed.

---

## 9. Straddling 1 April

The UK's "Financial Year" for corporation tax runs from 1 April to 31 March. If your accounting period **straddles 1 April**, your profits are split between the two FYs on a **days basis**, and each portion is taxed at the rate applicable in that FY.

Acorn's year ended 31 March 2026 falls entirely within FY2025 (1 April 2025 to 31 March 2026). No straddle. Easy.

A worked counter-example: a Ltd with a 31 December 2025 year-end straddles FY2024 and FY2025. The accounting period spans:

- 1 January to 31 March 2025: 90 days in FY2024.
- 1 April to 31 December 2025: 275 days in FY2025.

If the rates differ between FY2024 and FY2025, the profits are split and taxed at each rate. (Since FY2024 and FY2025 had the same rates and thresholds, the split makes no difference. From FY2026 onwards the rates remain unchanged again. But the mechanism is built into the CT600 anyway: boxes 330, 335 and so on are for the split.)

---

## 10. Other things that adjust profit

Acorn's computation does not touch any of these, but you should know they exist.

### 10.1 Losses brought forward

If the company made a tax loss in a previous year, it can carry that loss forward and set it against this year's trading profit. The loss reduces TTP and so reduces the tax bill.

Trading losses can also be carried back one year (longer in special situations) and offset against the previous year's profit, generating a refund.

If Acorn had a £6,000 trading loss brought forward from year one, that £6,000 would reduce this year's TTP from £46,478 to £40,478, saving £1,140 of tax.

### 10.2 Qualifying charitable donations

Cash donations by the company to qualifying UK charities are deductible from TTP (not from trading profit). They reduce TTP pound for pound, capped at the level of profit (you cannot create a loss by donating).

### 10.3 Non-trading income (taxed separately)

Bank interest, rental income, and other non-trading income are taxed separately within the same CT600. The mechanism is: take them out of trading profit, calculate the trading-profit tax, then add them back as separate income lines into TTP. The total tax is the same; the splits matter only when losses or reliefs are involved.

### 10.4 Chargeable gains

If the company sells a capital asset (a building, a long-held investment) for more than it paid, that profit is a chargeable gain. Gains are taxed at the same CT rate as income, but they are computed under a different set of rules (the Taxation of Chargeable Gains Act 1992).

Most tiny Ltds never have chargeable gains. Acorn doesn't.

---

## 11. Director's loan account and s.455

This is a preview only. Full treatment in Week 5.

If a director (or a participator in a close company) owes the company money at the period end, and the loan is not repaid within 9 months and 1 day after the period end, the company pays **s.455 tax** at 33.75% (rising to 35.75% from 6 April 2026) on the outstanding balance.

It is a separate charge that goes on top of the normal corporation tax. It is reported on the CT600A supplementary page. It is reclaimable when the loan is repaid - but the refund is delayed (you have to wait until 9 months and 1 day after the end of the period in which the loan was repaid).

Acorn's DLA is fine at 31 March 2026 (Sarah is not borrowing from the company). No s.455 charge this year. **Add back £0.**

---

## 12. Mapping the computation to the CT600

This is what next week is all about. Here is the preview. Almost every figure in Acorn's tax computation lands in one specific box on the CT600 form.

| Tax computation line | CT600 box |
|---|---|
| Turnover (£74,800) | **Box 145** |
| Trading profit per accounts (£47,365) | **Box 155** |
| Adjusted trading profit (£46,478) | **Box 165** |
| Total profits before reliefs (£46,478) | **Box 235** |
| Profits chargeable to CT (£46,478) | **Box 305** |
| Period split into FY2025 (£46,478) | **Box 330** |
| FY2025 rate (19%) | **Box 345** |
| Corporation tax (£8,831) | **Box 430** |
| Marginal relief (£0) | **Box 435** |
| Net corporation tax | **Box 440** |
| Self-assessment of CT payable (£8,831) | **Box 525** |
| Declaration (director's name and date) | **Box 975** |

That is genuinely the entire CT600 for Acorn. Twelve box numbers. We file it in Week 4.

---

## 13. What's in your Xero

Xero does not produce a tax computation. Xero is bookkeeping software; the tax computation is a separate workings sheet. Three realistic options for a self-filer:

1. **Build it in a spreadsheet.** Mirror the canonical layout above. One row per line. Link the input figures to the Xero trial balance figures with a fresh copy each year. This is what most accountants do for tiny clients.
2. **Use TinyTax or Easy Digital Filing.** Both have a guided tax computation builder that prompts you for each adjustment. They generate the iXBRL computation file as part of the CT600 submission.
3. **Use FreeAgent's built-in CT600 module.** It pulls figures from your bookkeeping and prepares the computation automatically, with the option to override. Limitations: it does not handle complex situations (associated companies, R&D claims, group relief).

A suggested spreadsheet layout:

```
A                              B           C
Profit before tax (from BS)    47,365      [link to TB]
Add back: Depreciation             633
Add back: Entertaining             380
Subtotal                       48,378      [SUM]
Less: AIA                      (1,900)
Trading profit                 46,478      [SUM]
Plus: Other income                  0
Less: Reliefs                       0
TTP                            46,478
Tax rate                          19%
Tax                             8,831      [TTP * rate]
Marginal relief                     0
CT payable                      8,831
```

Keep the spreadsheet. HMRC may ask to see it. Keep it for six years.

---

## 14. Common errors to watch for

> **Forgetting to add back depreciation.** The single most common DIY error. Depreciation in the accounts is fine; depreciation in the tax computation is fatal. Always add back.
>
> **Including client entertaining as deductible.** Equally common. Pull every "Entertainment" or "Subsistence" line and check whether the meal was with a client (disallowable) or with staff (probably allowable). Adjust accordingly.
>
> **Claiming AIA on a car.** Not allowed. Use the WDA mechanism or, if zero-emission, the 100% FYA.
>
> **Treating dividends as a deductible expense.** Dividends are paid from post-tax profit. They are not in the P&L at all. If you find them there, fix the accounts first.
>
> **Forgetting marginal relief when profit is in the band.** A surprising number of self-filers calculate tax at the marginal-rate 26.5% on the whole profit (overpayment) or at 19% on the whole profit (underpayment, with interest). The correct method is the formula in section 6.
>
> **Forgetting to time-apportion in a short period.** First-year companies often have a period shorter than 12 months. The £50,000 and £250,000 thresholds time-apportion. Apply the proration.
>
> **Treating personal expenses as business.** Personal use proportions are disallowable. Either restrict the cost in the books or restrict it in the tax computation. Do not let it slip through both.
>
> **Forgetting associated companies.** Multiple Ltds owned by the same person divide the thresholds. Check.

---

## 15. Mini quiz

1. A company has profit before tax of £42,000, depreciation of £2,500, client entertaining of £700, and capital additions of £1,000 (all plant and machinery). What is the corporation tax payable?
2. What is the effective corporation tax rate on a UK company with TTP of exactly £250,000?
3. Why does the tax system add back depreciation in the computation?
4. A sole-director Ltd has its first accounting period of nine months ending 30 September 2026. What are the small profits and main rate thresholds for that period?
5. A founder owns three Ltds outright. Each has TTP of £40,000. Without doing the marginal relief maths, how does the associated companies rule affect their tax position?

<details>
<summary>Answers</summary>

1. Profit before tax £42,000 + depreciation £2,500 + entertaining £700 - AIA £1,000 = £44,200. Below £50,000 so small profits rate 19%. Tax = £8,398.
2. Exactly 25%. At TTP of £250,000 the marginal relief reduces to zero (because U - A = 0 in the formula), so the main rate applies in full. The effective rate is the headline rate.
3. Because tax has its own parallel mechanism (capital allowances) that gives relief for the cost of fixed assets. Allowing depreciation as well would give double relief.
4. Nine months is 9/12 of a year, so both thresholds are time-apportioned to 9/12. Small profits rate threshold £37,500. Main rate threshold £187,500.
5. Each Ltd has two associated companies, so the thresholds divide by 3. Each company's small profits limit becomes £16,667. TTP of £40,000 exceeds that, so part of the profit falls into the marginal band. Each Ltd pays more tax than it would as a standalone company at £40,000. The founder is worse off than if they had run all three trades through one company.

</details>

---

## 16. Bonus exercise

Beech Consulting Ltd has the following figures for the year ended 31 March 2026:

- Turnover £130,000
- Total expenses per accounts £45,000 including:
  - Depreciation £4,000
  - Client entertaining £1,200
  - Speeding fines £200
  - Charitable donation to a registered charity £500
- Bank interest received £600
- Fixed asset additions in year: a new computer £1,800 and a low-emission company car £24,000

Beech has no associated companies, no losses brought forward, no chargeable gains. The accounting period is 12 months.

**Tasks.**

1. Compute the disallowable add-backs.
2. Compute the capital allowances claim.
3. Produce the full tax computation, including marginal relief.
4. State the corporation tax payable, rounded to the nearest pound.

<details>
<summary>Answers</summary>

**Profit before tax (per accounts):** £130,000 - £45,000 = £85,000 (excluding interest, which is taxed separately).

**Disallowable add-backs:**

- Depreciation: £4,000
- Client entertaining: £1,200
- Fines: £200
- Charitable donations: NOT a disallowable to trading; deducted as a separate relief from TTP. So add back £0 here.
- Subtotal of disallowable: £5,400.

**Capital allowances:**

- Computer £1,800: qualifies for AIA. Full relief in year one.
- Low-emission car £24,000: NOT eligible for AIA (cars are excluded). Treated as main pool plant and machinery; relieved via WDA at 18%. First year: 18% x £24,000 = £4,320.
- Total capital allowances: £1,800 + £4,320 = £6,120.

**Tax computation:**

```
Profit before tax (trading)              85,000
Add back: Depreciation                    4,000
Add back: Entertaining                    1,200
Add back: Fines                             200
                                         ------
                                         90,400
Less: Capital allowances                 (6,120)
                                         ------
Trading profit                           84,280
Add: Bank interest                          600
                                         ------
Total profits                            84,880
Less: Charitable donation                  (500)
                                         ------
Taxable Total Profits                    84,380

Tax at 25% main rate                     21,095
Less: Marginal relief
  (3/200) x (250,000 - 84,380) x 1       (2,484)
                                         ------
Corporation tax payable                  18,611
```

**Effective rate:** £18,611 / £84,380 = 22.06%.

</details>

---

## Next week

You now have a tax computation for Acorn Studio Ltd showing TTP of £46,478 and CT payable of £8,831. You also have, for the first time, a full mental model of how UK corporation tax works.

Next week we file it. We meet the CT600 form, the iXBRL tagging system, the Government Gateway, and at least one piece of cheap commercial filing software. We pay the tax. We file the accounts at Companies House. We finish the job.
