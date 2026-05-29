import { Page } from '../components/ui/Page'
import { WeekHeader } from '../components/ui/WeekHeader'
import { Section, Lede, Aside } from '../components/ui/Section'
import { Callout } from '../components/ui/Callout'
import { Term } from '../components/ui/Term'
import { Reveal } from '../components/ui/Reveal'
import { Journal } from '../components/ui/Journal'
import { Quiz } from '../components/ui/Quiz'
import { WeekNav } from '../components/ui/WeekNav'
import { XeroHealthCheck } from '../components/interactive/XeroHealthCheck'
import { S455Calculator } from '../components/interactive/S455Calculator'
import { RnDTest } from '../components/interactive/RnDTest'
import { weekBySlug } from '../data/course'
import {
  year2Computation,
  year2BalanceSheet,
  ct600A,
  year2Headline,
} from '../data/week5'
import type { StatementRow } from '../data/week5'
import { ledger } from '../lib/format'

const EVENTS = [
  'Turnover grew to £124,000.',
  'Crossed the £90,000 VAT threshold; registered from 1 October 2026.',
  'Hired Tom, a part-time designer, from 1 July 2026 (£16,500 for nine months).',
  'Took £42,000 of dividends across four tranches.',
  "Bought Tom a £2,200 MacBook Pro and started £400/month pension contributions.",
  'Let an overdrawn director’s loan build up over the busy summer.',
  'Spent about £8,000 on a Figma plugin, and wondered about R&D relief.',
]

const QUESTIONS = [
  {
    q: (
      <>
        A director's loan is £6,500 overdrawn at the year-end of 31 March 2027, arising in
        2026/27. By when must it be repaid, and what would s.455 cost if not?
      </>
    ),
    a: (
      <>
        Repay by <strong>1 January 2028</strong>. If not, s.455 = £6,500 x 35.75% ={' '}
        <strong>£2,324</strong>, reclaimable later when the loan is repaid.
      </>
    ),
  },
  {
    q: (
      <>
        A company has TTP of £100,000, no associates, no losses, no donations. What is the
        corporation tax after marginal relief?
      </>
    ),
    a: (
      <>
        25% of £100,000 = £25,000, less marginal relief (3/200) x (£250,000 - £100,000) =
        £2,250. CT = <strong>£22,750</strong>, an effective rate of 22.75%.
      </>
    ),
  },
  {
    q: <>A Ltd registers for VAT mid-year. How does that affect the turnover on the CT600?</>,
    a: (
      <>
        Turnover is shown <strong>net of VAT</strong>. The VAT is a separate liability and
        does not appear on the CT600. Box 145 shows the net figure.
      </>
    ),
  },
  {
    q: <>Does Sarah's internal Figma plugin qualify for R&amp;D relief?</>,
    a: (
      <>
        No. Internal tooling is not an advance in science or technology, resolves no
        scientific or technological uncertainty, and is not R&amp;D work. It is a normal
        business cost.
      </>
    ),
  },
  {
    q: <>Why must dividends be posted to equity rather than the P&amp;L?</>,
    a: (
      <>
        Dividends are distributions of post-tax profit, not an expense. In the P&amp;L they
        would understate profit and tax. They reduce{' '}
        <Term slug="retained-earnings">retained earnings</Term> instead.
      </>
    ),
  },
]

export function Week05() {
  const week = weekBySlug['week-05']

  return (
    <Page>
      <WeekHeader week={week} />

      <article className="mx-auto max-w-2xl px-5 sm:px-0">
        <Section index={1} title="The story so far">
          <Lede>
            It is 1 April 2027. Acorn has finished a second, much messier year - the kind a
            real business actually has.
          </Lede>
          <ul className="my-4 space-y-2 text-[0.97rem] text-ink-soft">
            {EVENTS.map((e, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-salmon" />
                <span>{e}</span>
              </li>
            ))}
          </ul>
          <Aside>
            The first half of this week is forensic: open the books with an accountant's
            eye and find what's wrong before trusting a single figure.
          </Aside>
        </Section>

        <Section index={2} id="health-check" title="The Xero file health check">
          <p>
            An accountant opening a DIY-bookkept file does not jump to producing accounts.
            They run a health check first. Here are Acorn's thirteen findings - diagnose
            each one.
          </p>
        </Section>
      </article>

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <XeroHealthCheck />
      </div>

      <article className="mx-auto max-w-2xl px-5 sm:px-0">
        <Section index={3} id="key-fixes" title="The three that matter most">
          <p>
            Most fixes are quick recodes. Three are worth spelling out, because they move
            the numbers the most.
          </p>
          <Journal
            caption="Dividends out of the P&L, into equity"
            lines={[
              { account: 'Dividends (equity)', debit: 42000 },
              { account: 'Drawings (P&L)', credit: 42000 },
            ]}
            narrative="£42,000 of dividends were sitting in the P&L. They are not an expense."
          />
          <Journal
            caption="Capitalise Tom's MacBook"
            lines={[
              { account: 'Fixed assets (710)', debit: 2200 },
              { account: 'Computer equipment, P&L (471)', credit: 2200 },
            ]}
            narrative="A multi-year asset belongs on the balance sheet, not in expenses."
          />
          <p>
            The rest - personal spending, miscoded drawings, the phone restriction - all
            land in the <Term slug="dla">director's loan account</Term>, which ends the
            year £4,200 overdrawn.
          </p>
        </Section>

        <Section index={4} id="vat" title="VAT in five minutes">
          <p>
            The <Term slug="vat">VAT</Term> registration threshold is £90,000 of taxable
            turnover on a rolling 12-month basis. Acorn crossed it in September 2026 and
            registered from 1 October 2026. From then it charges 20% on sales, reclaims VAT
            on purchases, and files quarterly under{' '}
            <Term slug="mtd">Making Tax Digital</Term> straight from Xero. Turnover in the
            accounts, and in Box 145, is shown <strong>net of VAT</strong> at £124,000.
          </p>
        </Section>

        <Section index={5} title="Payroll in five minutes">
          <p>
            Tom joined on £22,000 (£16,500 pro-rata). His employer{' '}
            <Term slug="nic">NIC</Term> of about £1,275 is wiped out by the{' '}
            <strong>Employment Allowance</strong> (£10,500 for 2026/27), so net employer
            NIC is £0. Sarah's £12,570 salary generates no{' '}
            <Term slug="paye">PAYE</Term> or NIC. Tom is auto-enrolled into a NEST pension.
          </p>
          <Journal
            caption="A clean monthly wages journal"
            lines={[
              { account: 'Wages and salaries (P&L)', debit: 2500 },
              { account: 'Employer NIC (P&L)', debit: 140 },
              { account: 'Employer pension (P&L)', debit: 45 },
              { account: 'Net pay payable', credit: 1850 },
              { account: 'PAYE and NIC payable', credit: 450 },
              { account: 'Pension payable', credit: 385 },
            ]}
            narrative="The bank payments later clear each liability: net to Tom, PAYE/NIC to HMRC, pension to NEST."
          />
        </Section>

        <Section index={6} title="The cleaned-up accounts">
          <p>
            After the fixes, and once the £15,190 tax provision is booked, the trial
            balance balances at <strong>{ledger(year2Headline.tbTotal)}</strong> each side.
            The <Term slug="frs-105">FRS 105</Term> accounts follow the Week 2 format, with
            one addition: a related-party note covering the dividends and the overdrawn
            loan.
          </p>
        </Section>
      </article>

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Statement title="Balance sheet" sub="as at 31 March 2027" rows={year2BalanceSheet} />
      </div>

      <article className="mx-auto max-w-2xl px-5 sm:px-0">
        <Section index={7} title="The year-2 tax computation">
          <p>
            Profit before tax is £66,116. Add back depreciation and entertaining, take off
            the AIA on Tom's MacBook, and TTP is £65,803 - now inside the{' '}
            <Term slug="marginal-relief">marginal relief</Term> band, so the 25% rate
            applies less marginal relief.
          </p>
        </Section>
      </article>

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Statement
          title="Corporation tax computation"
          sub="year ended 31 March 2027"
          rows={year2Computation}
        />
      </div>

      <article className="mx-auto max-w-2xl px-5 sm:px-0">
        <Section index={8} title="The director's loan and s.455">
          <p>
            Sarah's loan is £4,200 overdrawn at year-end. If it is not repaid within nine
            months and a day - by <strong>1 January 2028</strong> - the company pays{' '}
            <Term slug="s455">s.455</Term> at 35.75% on the balance. She can repay in cash,
            net it against a future dividend, or pay the charge and reclaim it later.
          </p>
        </Section>
      </article>

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <S455Calculator />
      </div>

      <article className="mx-auto max-w-2xl px-5 sm:px-0">
        <Callout kind="example" title="The total tax bill">
          Trading corporation tax after marginal relief is £13,688. Add the £1,502 of
          s.455 and the total for the year is <strong>{ledger(year2Headline.totalCt)}</strong>
          , the figure provisioned in the accounts.
        </Callout>

        <Section index={9} title="Dividends done properly">
          <p>
            A <Term slug="dividend">dividend</Term> can be paid only out of distributable
            reserves. Acorn's £42,000 is comfortably covered. Each one needs a board
            minute, a dividend voucher, and the cash transfer. Dividends do{' '}
            <strong>not</strong> appear on the CT600 - they are not deductible - and Sarah's
            dividend tax is a personal Self Assessment matter, not the company's.
          </p>
        </Section>

        <Section index={10} title="The R&D question">
          <p>
            Sarah spent about £8,000 on a Figma plugin for her own workflow and wonders
            about <Term slug="rnd">R&amp;D</Term> relief. Run the three CIRD gates - all
            must be yes.
          </p>
        </Section>
      </article>

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <RnDTest />
      </div>

      <article className="mx-auto max-w-2xl px-5 sm:px-0">
        <Callout kind="note" title="If it had qualified">
          The merged scheme (<Term slug="rdec">RDEC</Term>) gives a 20% above-the-line
          credit, a net benefit of roughly 15-16%. But internal tooling almost never
          qualifies, and HMRC has invested heavily in compliance checks. Apply the tests
          honestly.
        </Callout>

        <Section index={11} title="The CT600 and CT600A for year 2">
          <p>
            Year 2 differs in three ways: marginal relief is now non-zero, total tax is
            trading CT plus s.455, and an overdrawn loan means a{' '}
            <Term slug="ct600">CT600A</Term> supplementary page for the first time.
          </p>
        </Section>
      </article>

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <figure className="overflow-hidden rounded-2xl border border-line bg-[#fcf8f0] shadow-card">
            <figcaption className="border-b border-line bg-paper-sunk px-5 py-3">
              <p className="display text-lg font-600 text-ink">CT600A · loans to participators</p>
              <p className="font-mono text-[0.7rem] uppercase tracking-wide text-ink-faint">
                the overdrawn director's loan
              </p>
            </figcaption>
            <div className="px-5 py-4">
              {ct600A.map((r) => (
                <div key={r.box} className="flex items-baseline justify-between gap-4 py-1.5">
                  <span className="flex items-baseline gap-2.5 text-[0.88rem] text-ink-soft">
                    <span className="tnum font-mono text-[0.72rem] font-700 text-salmon-deep">
                      {r.box}
                    </span>
                    {r.label}
                  </span>
                  <span className="tnum flex-none font-mono text-[0.88rem] font-600 text-ink">
                    {r.value}
                  </span>
                </div>
              ))}
            </div>
          </figure>
        </Reveal>
      </div>

      <article className="mx-auto max-w-2xl px-5 sm:px-0">
        <p className="mt-6">
          The accounts for year 2 also go to Companies House by{' '}
          <strong>31 December 2027</strong>. Acorn is still a micro-entity.
        </p>

        <Callout kind="warning" title="The errors that bit this year">
          Drawings miscoded as wages. Personal spending on the company card. Dividends in
          the P&amp;L (again). Forgetting the CT600A when the loan is overdrawn. Treating
          R&amp;D too liberally. Leaving VAT control balances to survive year-end.
        </Callout>

        <div className="py-6">
          <Quiz questions={QUESTIONS} />
        </div>

        <Aside>
          The mechanics are mostly bookkeeping plus a small number of tax rules. Once you
          have done it, the mystery is gone. That is what this course was for.
        </Aside>
      </article>

      <WeekNav slug="week-05" />
    </Page>
  )
}

function Statement({ title, sub, rows }: { title: string; sub: string; rows: StatementRow[] }) {
  return (
    <Reveal>
      <figure className="overflow-hidden rounded-2xl border border-line bg-[#fcf8f0] shadow-card">
        <figcaption className="border-b border-line bg-paper-sunk px-5 py-3">
          <p className="display text-lg font-600 text-ink">{title}</p>
          <p className="font-mono text-[0.7rem] uppercase tracking-wide text-ink-faint">{sub}</p>
        </figcaption>
        <div className="px-5 py-4">
          {rows.map((r, i) => (
            <div
              key={i}
              className={`flex items-baseline justify-between py-1.5 ${
                r.gap ? 'mt-3 border-t border-line/60 pt-3' : ''
              } ${r.rule ? 'border-t border-ink/30' : ''}`}
            >
              <span
                className={`text-[0.9rem] ${r.indent ? 'pl-5' : ''} ${
                  r.bold ? 'font-700 text-ink' : 'text-ink-soft'
                }`}
              >
                {r.l}
              </span>
              <span
                className={`tnum font-mono text-[0.9rem] ${
                  r.bold ? 'font-700 text-ink' : 'text-ink'
                }`}
              >
                {r.v < 0 ? `(${ledger(-r.v)})` : ledger(r.v)}
              </span>
            </div>
          ))}
        </div>
      </figure>
    </Reveal>
  )
}
