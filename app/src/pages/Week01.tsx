import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Page } from '../components/ui/Page'
import { WeekHeader } from '../components/ui/WeekHeader'
import { Section, Lede, Aside } from '../components/ui/Section'
import { Callout } from '../components/ui/Callout'
import { Term } from '../components/ui/Term'
import { Reveal } from '../components/ui/Reveal'
import { Journal } from '../components/ui/Journal'
import { LedgerTable } from '../components/ui/LedgerTable'
import { Quiz } from '../components/ui/Quiz'
import { WeekNav } from '../components/ui/WeekNav'
import { DeadClic } from '../components/interactive/DeadClic'
import { AccountingEquation } from '../components/interactive/AccountingEquation'
import { TrialBalanceSimulator } from '../components/interactive/TrialBalanceSimulator'
import { weekBySlug } from '../data/course'
import { week1Opening, week1Journals } from '../data/sims'

const FAMILIES = [
  { label: 'Assets', side: 'Debit', dot: 'bg-sage', blurb: 'Things the company owns or is owed.', egs: 'Bank · debtors · the laptop' },
  { label: 'Liabilities', side: 'Credit', dot: 'bg-salmon', blurb: 'Things the company owes to others.', egs: 'Creditors · accruals · tax due' },
  { label: 'Equity', side: 'Credit', dot: 'bg-gold', blurb: "The owner's stake in the company.", egs: 'Share capital · retained earnings' },
  { label: 'Income', side: 'Credit', dot: 'bg-sage-deep', blurb: 'What the company earns from its work.', egs: 'Design fees · bank interest' },
  { label: 'Expenses', side: 'Debit', dot: 'bg-salmon-deep', blurb: 'The costs of running the company.', egs: 'Rent · software · salary' },
]

const MISTAKES = [
  { t: 'Bank not reconciled at year-end', d: 'Every other number is suspect until the bank in your books matches the statement to the penny. Reconcile every line; park the truly unknown in suspense and ask.' },
  { t: 'Money sitting in suspense', d: 'Suspense is where confused transactions go to die. Anything left there at year-end is either missing income (taxable) or a missing expense (deductible). Clear every line to its proper home.' },
  { t: 'Sales miscoded as something else', d: 'Turnover is the top line of the accounts and Box 145 on the CT600. Trace every bank receipt to a sales invoice, a loan, capital introduced, or a refund. If it matches none, it is usually sales.' },
  { t: 'Personal expenses in the company', d: "Weekend coffees, household Amazon, Netflix. Personal spending is either a benefit-in-kind or an overdrawn director's loan (s.455 tax at 33.75%). Repay it, or post it to the loan account and clear it." },
  { t: 'Drawings posted as wages', d: 'Limited companies have no drawings. Directors take money as salary (through PAYE), dividends (declared and minuted), or loan repayments. Mislabelled wages claim tax relief you are not entitled to.' },
  { t: 'Dividends sitting in the P&L', d: 'Dividends are a distribution of post-tax profit, not an expense. In the P&L they understate profit and the tax. Move them to equity, where they reduce retained earnings.' },
  { t: 'Fixed assets expensed', d: 'A £1,500 laptop in "Computer expenses" distorts profit and bypasses the fixed asset register — where capital allowances come from. Capitalise it and depreciate over its life.' },
  { t: 'Depreciation not run', d: 'Assets on the register but £0 depreciation in the P&L is non-compliant under FRS 105. Run the depreciation journal before you lock the period.' },
  { t: 'Accruals and prepayments missing', d: 'Without them the accounts are on a cash basis, which a Ltd cannot use. The £900 accountancy fee and the annual Adobe sub both need year-end journals.' },
  { t: 'Duplicate Stripe or PayPal sales', d: 'Recording both the gross payout and the underlying invoice doubles turnover — one of the few numbers HMRC can independently estimate. Pick one and treat the other as a transfer.' },
]

const QUESTIONS = [
  {
    q: <>Which side does an <strong>asset</strong> go up on — debit or credit?</>,
    a: <>Debit. Remember <strong>DEAD CLIC</strong>: <strong>D</strong>rawings, <strong>E</strong>xpenses and <strong>A</strong>ssets all go up on the debit side.</>,
  },
  {
    q: <>Sarah pays £200 from the business account for a Figma subscription. Write the journal.</>,
    a: <><code>Dr Software £200 · Cr Bank £200</code>. The expense goes up (debit); the asset (bank) goes down (credit).</>,
  },
  {
    q: <>Is <strong>Dividends</strong> on the profit &amp; loss account, or in equity?</>,
    a: <>Equity. Dividends are a distribution of post-tax profit. They reduce retained earnings, not accounting profit, and are not deductible for corporation tax.</>,
  },
  {
    q: <>What does a trial balance actually prove?</>,
    a: <>That total debits equal total credits — the books are internally consistent. It does <strong>not</strong> prove every transaction was coded to the right account, only that none are one-sided.</>,
  },
  {
    q: <>Acorn has a £600 accountant's invoice for work done before 31 March 2026 but received in July. How is it recorded at year-end?</>,
    a: <>Accrue it: <code>Dr Accountancy £600 · Cr Accruals £600</code> at 31 March. Reverse on 1 April so the July invoice lands cleanly without double-counting.</>,
  },
]

export function Week01() {
  const week = weekBySlug['week-01']
  const next = weekBySlug['week-02']

  return (
    <Page>
      <WeekHeader week={week} next={next} />

      <article className="mx-auto max-w-2xl px-5 sm:px-0">
        <Section index={1} title="Your books are the source code">
          <Lede>
            Bookkeeping is not admin. It is the source code of every number you will
            ever put on a corporation tax return.
          </Lede>
          <p>
            Every figure HMRC eventually sees travels the same chain: transactions
            become a <Term slug="trial-balance">trial balance</Term>, the trial
            balance becomes <Term slug="statutory-accounts">statutory accounts</Term>,
            the accounts get adjusted for tax, and the result lands on the{' '}
            <Term slug="ct600">CT600</Term> as a tax bill. Get the first step wrong
            and every step after it is wrong too.
          </p>
          <Aside>If step one is wrong, every step after it is wrong.</Aside>
          <p>
            So Week 1 is about reading the books with confidence: the five families
            every account belongs to, what debits and credits really mean, and how to
            read Acorn Studio's trial balance line by line.
          </p>
        </Section>

        <Section index={2} id="families" title="The five families">
          <p>
            Every account in any company belongs to exactly one of five families.
            Learn to spot the family and you already know which side of the ledger it
            lives on.
          </p>
        </Section>
      </article>

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {FAMILIES.map((f) => (
              <div key={f.label} className="rounded-2xl border border-line bg-paper-raised p-5 shadow-card">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${f.dot}`} />
                    <span className="font-700 text-ink">{f.label}</span>
                  </span>
                  <span className="rounded-full bg-paper-sunk px-2 py-0.5 font-mono text-[0.62rem] font-600 uppercase tracking-wide text-ink-soft">
                    ↑ {f.side}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-snug text-ink-soft">{f.blurb}</p>
                <p className="mt-2 font-mono text-[0.72rem] text-ink-faint">{f.egs}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <article className="mx-auto max-w-2xl px-5 sm:px-0">
        <Section index={3} id="debits-credits" title="Debits & credits, without the jargon">
          <p>
            Every transaction has two equal sides: a <strong>debit</strong> and a{' '}
            <strong>credit</strong>. That is <Term slug="double-entry">double entry</Term>,
            and it is the reason a trial balance balances. The trick most people are
            never taught is a six-letter mnemonic: <strong>DEAD CLIC</strong>.
          </p>
          <DeadClic />
          <p>Here are three of Acorn's everyday transactions, written as journals.</p>
          <Journal
            caption="Client pays a £1,200 invoice instantly"
            lines={[
              { account: 'Bank', debit: 1200 },
              { account: 'Sales', credit: 1200 },
            ]}
            narrative="Bank (asset) up = debit. Sales (income) up = credit."
          />
          <Journal
            caption="Pay the co-working space £300 by direct debit"
            lines={[
              { account: 'Rent', debit: 300 },
              { account: 'Bank', credit: 300 },
            ]}
            narrative="Rent (expense) up = debit. Bank (asset) down = credit."
          />
          <Journal
            caption="Subcontractor sends a £500 invoice, not yet paid"
            lines={[
              { account: 'Cost of sales', debit: 500 },
              { account: 'Trade creditors', credit: 500 },
            ]}
            narrative="No cash has moved — this is the accruals idea in miniature."
          />
        </Section>

        <Section index={4} id="equation" title="The equation that always balances">
          <p>
            Underneath double entry sits one equation:{' '}
            <strong>Assets = Liabilities + Equity</strong>. Everything the company
            owns was paid for either by someone it owes (a liability) or by someone
            with a stake in it (equity). Step through Acorn's first few transactions
            and watch the two sides move in lockstep.
          </p>
          <AccountingEquation />
        </Section>

        <Section index={5} id="cash-vs-accruals" title="Cash basis vs accruals">
          <p>
            There are two ways to record a transaction: when the cash moves (
            <strong>cash basis</strong>) or when the work happens (
            <Term slug="accruals">accruals basis</Term>). A UK limited company must
            use accruals — there is no cash-basis option under FRS 105.
          </p>
          <Callout kind="example" title="Why it matters">
            Sarah does £2,000 of design work in March 2026 and invoices it. The client
            pays in April. On the accruals basis that is <strong>March</strong> income,
            and it shows as a trade debtor at 31 March. The cost (or income) belongs to
            the period it relates to, not the month the money lands.
          </Callout>
        </Section>

        <Section index={6} id="trial-balance" title="Acorn's trial balance, line by line">
          <p>
            This single table is the master artefact of the whole course. Every figure
            in Weeks 2 to 4 descends from it. Read it like a sentence: assets and
            expenses on the debit side, liabilities, equity and income on the credit
            side. It balances at £77,795.
          </p>
        </Section>
      </article>

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <LedgerTable />
      </div>

      <article className="mx-auto max-w-2xl px-5 sm:px-0">
        <Callout kind="warning" title="The classic trap">
          The <strong>£25,000 of dividends</strong> sits in equity, not the P&amp;L.
          It is paid out of post-tax profit, it is not an expense, and it is not
          deductible. Putting dividends in the profit &amp; loss account trips up
          almost every beginner.
        </Callout>

        <Section index={7} id="sandbox" title="Build a trial balance yourself">
          <p>
            Theory sticks once you post a few entries. Start from an empty company and
            toggle these everyday transactions on and off. Notice that the debit and
            credit totals stay equal no matter what you post — that is double entry
            doing its job.
          </p>
        </Section>
      </article>

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <TrialBalanceSimulator
          title="Sandbox · post a transaction"
          subtitle="Toggle each journal. The trial balance builds itself, always in balance."
          opening={week1Opening}
          journals={week1Journals}
          showProfit
          showNetAssets={false}
          profitLabel="Running profit"
        />
      </div>

      <article className="mx-auto max-w-2xl px-5 sm:px-0">
        <Section index={8} id="mistakes" title="Ten mistakes that quietly cost money">
          <p>
            These are the errors that turn up again and again in real Xero files. Each
            one distorts profit, the tax bill, or both. Tap any to see how to catch and
            fix it.
          </p>
        </Section>
      </article>

      <div className="mx-auto max-w-2xl px-5 sm:px-0">
        <MistakeList />
      </div>

      <article className="mx-auto max-w-2xl px-5 sm:px-0">
        <div className="py-10">
          <Quiz questions={QUESTIONS} />
        </div>

        <Callout kind="tip" title="What's in your Xero">
          Set every report's dates explicitly and tick <em>compare with prior period</em>
          — a 1,000% jump is usually a coding error. Find these under{' '}
          <strong>Accounting → Reports</strong>: Profit and Loss, Balance Sheet, Trial
          Balance and General Ledger. Once the year is closed, lock the period under{' '}
          <strong>Advanced → Lock dates</strong> so nothing slips into a filed year.
        </Callout>
      </article>

      <WeekNav slug="week-01" />
    </Page>
  )
}

function MistakeList() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="space-y-2">
      {MISTAKES.map((m, i) => {
        const isOpen = open === i
        return (
          <div
            key={i}
            className="overflow-hidden rounded-xl border border-line bg-paper-raised shadow-card"
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center gap-3 px-4 py-3 text-left"
            >
              <span className="tnum font-mono text-xs font-600 text-salmon-deep">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="flex-1 font-600 text-ink">{m.t}</span>
              <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="text-ink-faint">
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-4 pb-4 pl-11 text-[0.92rem] leading-relaxed text-ink-soft">
                    {m.d}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
