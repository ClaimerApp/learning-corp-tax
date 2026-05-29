import { Page } from '../components/ui/Page'
import { WeekHeader } from '../components/ui/WeekHeader'
import { Section, Lede, Aside } from '../components/ui/Section'
import { Callout } from '../components/ui/Callout'
import { Term } from '../components/ui/Term'
import { Reveal } from '../components/ui/Reveal'
import { Journal } from '../components/ui/Journal'
import { Quiz } from '../components/ui/Quiz'
import { WeekNav } from '../components/ui/WeekNav'
import { TrialBalanceSimulator } from '../components/interactive/TrialBalanceSimulator'
import { weekBySlug } from '../data/course'
import { week2Opening, week2Journals } from '../data/sims'
import { ledger } from '../lib/format'

const SIZES = [
  { c: 'Micro-entity', turnover: '≤ £1m', bs: '≤ £500k', emp: '≤ 10', acorn: true },
  { c: 'Small', turnover: '≤ £15m', bs: '≤ £7.5m', emp: '≤ 50', acorn: false },
  { c: 'Medium', turnover: '≤ £54m', bs: '≤ £27m', emp: '≤ 250', acorn: false },
  { c: 'Large', turnover: 'above', bs: 'above', emp: 'above', acorn: false },
]

const QUESTIONS = [
  {
    q: <>Which accounting standard does a typical one-person Ltd use, and what are its three thresholds?</>,
    a: <><strong>FRS 105</strong>. Meet two of three: turnover £1m, balance sheet total £500k, 10 employees (from 6 April 2025).</>,
  },
  {
    q: <>A company pays a £1,200 insurance premium on 1 January 2026 for the calendar year. Its year-end is 31 March 2026. What is the prepayment?</>,
    a: <>Nine months (April–December) belong to next year: £1,200 × 9/12 = <strong>£900</strong> prepayment.</>,
  },
  {
    q: <>Acorn buys a £1,500 laptop and depreciates it over three years. What are the depreciation charge and net book value at year one?</>,
    a: <>Charge <strong>£500</strong> (£1,500 ÷ 3); net book value <strong>£1,000</strong>.</>,
  },
  {
    q: <>A director takes £20,000 of dividends in the year. Where do they appear in the accounts — and where do they not?</>,
    a: <>They reduce retained earnings in <strong>equity</strong> and show in the movement in reserves. They do <strong>not</strong> appear in the P&amp;L and are not tax-deductible.</>,
  },
  {
    q: <>Why must even a tiny Ltd use the accruals basis?</>,
    a: <>The Companies Act 2006 requires a <Term slug="true-and-fair">true and fair view</Term>, and accruals is fundamental to that. Cash accounting is allowed for some sole traders, never for a Ltd's statutory accounts.</>,
  },
]

export function Week02() {
  const week = weekBySlug['week-02']
  const next = weekBySlug['week-03']

  return (
    <Page>
      <WeekHeader week={week} next={next} />

      <article className="mx-auto max-w-2xl px-5 sm:px-0">
        <Section index={1} id="why" title="Why statutory accounts exist">
          <Lede>
            A trial balance is what you recorded. Statutory accounts are what the law,
            and HMRC, want to see.
          </Lede>
          <p>
            A <Term slug="limited-company">limited company</Term> is a separate legal
            person with limited liability. In exchange for that protection it must put
            a basic financial picture on the public record at{' '}
            <Term slug="companies-house">Companies House</Term>, and hand a fuller set
            to <Term slug="hmrc">HMRC</Term> alongside its tax return. Both must give a{' '}
            <Term slug="true-and-fair">true and fair view</Term>.
          </p>
          <Aside>The same year is told twice: briefly in public, fully to the taxman.</Aside>
        </Section>

        <Section index={2} id="sizes" title="Which size is your company?">
          <p>
            Company law sorts companies into four sizes. Meet two of the three tests and
            you qualify for that class. Acorn — turnover £74,800, around £25k of assets,
            one employee — sits comfortably inside the smallest box.
          </p>
        </Section>
      </article>

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-line bg-paper-raised shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-line bg-paper-sunk text-[0.65rem] uppercase tracking-wider text-ink-faint">
                  <th className="px-4 py-2.5 text-left font-600">Class</th>
                  <th className="px-4 py-2.5 text-right font-600">Turnover</th>
                  <th className="px-4 py-2.5 text-right font-600">Balance sheet</th>
                  <th className="px-4 py-2.5 text-right font-600">Employees</th>
                </tr>
              </thead>
              <tbody>
                {SIZES.map((s) => (
                  <tr
                    key={s.c}
                    className={`border-b border-line/50 ${s.acorn ? 'bg-salmon-tint/40' : ''}`}
                  >
                    <td className="px-4 py-2.5 font-600 text-ink">
                      {s.c}
                      {s.acorn && (
                        <span className="ml-2 rounded-full bg-salmon px-2 py-0.5 text-[0.6rem] font-700 uppercase text-white">
                          Acorn
                        </span>
                      )}
                    </td>
                    <td className="tnum px-4 py-2.5 text-right font-mono text-ink-soft">{s.turnover}</td>
                    <td className="tnum px-4 py-2.5 text-right font-mono text-ink-soft">{s.bs}</td>
                    <td className="tnum px-4 py-2.5 text-right font-mono text-ink-soft">{s.emp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>

      <article className="mx-auto max-w-2xl px-5 sm:px-0">
        <Section index={3} id="frs105" title="What FRS 105 actually is">
          <p>
            <Term slug="frs-105">FRS 105</Term> is the micro-entity regime — the
            simplest UK standard. Everything is at historical cost; there is no fair
            value, no deferred tax, no revaluation, and no directors' report. The
            balance sheet and P&amp;L follow a single fixed format, so there is no
            creativity to get wrong. The next step up,{' '}
            <Term slug="frs-102-1a">FRS 102 Section 1A</Term>, allows more but asks
            more. Sarah picks FRS 105 because it is the cheapest and simplest — as do
            the vast majority of one-person Ltds.
          </p>
        </Section>

        <Section index={4} id="statements" title="What the accounts look like">
          <p>
            Here is exactly what Acorn files. Notice how the detailed trial balance
            rolls up into a handful of lines — and that the P&amp;L is for HMRC and
            Sarah, not the public.
          </p>
        </Section>
      </article>

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          <Statement
            title="Balance sheet"
            sub="as at 31 March 2026"
            rows={[
              { l: 'Fixed assets', v: 1267 },
              { l: 'Current assets', v: 23460 },
              { l: 'Creditors: amounts falling due within one year', v: -10881 },
              { l: 'Net current assets', v: 12579, rule: true },
              { l: 'Total assets less current liabilities', v: 13846, bold: true },
              { l: 'Called up share capital', v: 100, gap: true },
              { l: 'Profit and loss account', v: 13746 },
              { l: "Shareholders' funds", v: 13846, bold: true, rule: true },
            ]}
          />
          <Statement
            title="Profit & loss account"
            sub="year ended 31 March 2026"
            rows={[
              { l: 'Turnover', v: 74800 },
              { l: 'Cost of raw materials & consumables', v: -6000 },
              { l: 'Staff costs', v: -12570 },
              { l: 'Depreciation', v: -633 },
              { l: 'Other charges', v: -8232 },
              { l: 'Tax', v: -8831, rule: true },
              { l: 'Profit for the financial year', v: 38534, bold: true },
            ]}
          />
        </div>
      </div>

      <article className="mx-auto max-w-2xl px-5 sm:px-0">
        <Section index={5} id="adjustments" title="The seven year-end adjustments">
          <p>
            A trial balance is a snapshot of what got recorded. Before it becomes a set
            of accounts you layer on the year-end adjustments. Seven come up almost
            every time: <Term slug="accruals">accruals</Term>,{' '}
            <Term slug="prepayments">prepayments</Term>,{' '}
            <Term slug="depreciation">depreciation</Term>, the{' '}
            corporation-tax provision, posting{' '}
            <Term slug="dividend">dividends</Term> to equity, running the director's
            payroll, and the <Term slug="bank-reconciliation">bank reconciliation</Term>.
          </p>
          <p>
            The first four change the numbers. The last three are about getting things
            in the right place. Here are the two that people most often get backwards:
          </p>
          <Journal
            caption="Accrual — the £900 accountancy fee"
            lines={[
              { account: 'Accountancy fees (P&L)', debit: 900 },
              { account: 'Accruals (balance sheet)', credit: 900 },
            ]}
            narrative="Work done this year; invoice arrives in May. The cost belongs to this year."
          />
          <Journal
            caption="Prepayment — £240 of next year's software"
            lines={[
              { account: 'Prepayments (balance sheet)', debit: 240 },
              { account: 'Software subscriptions (P&L)', credit: 240 },
            ]}
            narrative="Paid at year-end for the year ahead, so it moves off this year's P&L."
          />
          <p>
            Now post them yourself. Start from Acorn's trial balance{' '}
            <em>before</em> any adjustments, and toggle the four that move the numbers.
            Watch the profit settle on <strong>£47,365</strong> before tax and{' '}
            <strong>£38,534</strong> after, with net assets landing on{' '}
            <strong>£13,846</strong>.
          </p>
        </Section>
      </article>

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <TrialBalanceSimulator
          title="Year-end adjustments · Acorn Studio Ltd"
          subtitle="Toggle each adjustment and watch profit and net assets respond."
          opening={week2Opening}
          journals={week2Journals}
          showProfit
          showNetAssets
          profitLabel="Profit for the year"
        />
      </div>

      <article className="mx-auto max-w-2xl px-5 sm:px-0">
        <Callout kind="example" title="How the reserves move">
          <Term slug="retained-earnings">Retained earnings</Term> rise by profit and
          fall by dividends. Acorn opens at £212, adds £38,534 of profit after tax,
          pays £25,000 of dividends, and closes at{' '}
          <strong>{ledger(13746)}</strong> — the figure on the balance sheet.
        </Callout>

        <Section index={6} id="what-goes-where" title="What goes where">
          <p>
            The two filings are not the same document.{' '}
            <Term slug="companies-house">Companies House</Term> gets a{' '}
            <Term slug="filleted-accounts">filleted</Term> set — the balance sheet and
            a few notes, no P&amp;L — keeping your trading detail off the public record.
            HMRC gets the full set, including the P&amp;L, tagged in{' '}
            <Term slug="ixbrl">iXBRL</Term>, attached to the CT600.
          </p>
          <Callout kind="warning" title="Don't cross the streams">
            Never send the filleted accounts to HMRC — they want the full set including
            the P&amp;L. And filing one place does not file the other; they are separate
            obligations with separate deadlines.
          </Callout>
        </Section>

        <Section index={7} id="sign-off" title="Signing off the accounts">
          <p>
            Before anything is filed, the accounts have to be approved. For a micro-entity
            this is refreshingly light. There is <strong>no directors' report</strong> to
            write — FRS 105 micro-entities are exempt. What the law does require is simple:
            the balance sheet must be <strong>approved by the board and signed by a
            director</strong>, with the <strong>date of approval shown</strong> on the
            balance sheet itself. For Acorn, that is Sarah.
          </p>
          <p>
            The other requirement is three short statements that sit at the{' '}
            <em>foot of the balance sheet</em>. Filing software inserts them automatically;
            if you are preparing accounts by hand, include them more or less verbatim.
          </p>
        </Section>
      </article>

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SignOff />
      </div>

      <article className="mx-auto max-w-2xl px-5 sm:px-0">
        <Callout kind="tip" title="Approve it properly">
          Approve the accounts at a (minuted) board meeting, sign the balance sheet, and
          date it. The date on the accounts should be on or after the date you finalise
          them — and it must be before you file. Keep the signed copy with your records.
        </Callout>

        <div className="py-6">
          <Quiz questions={QUESTIONS} />
        </div>

        <Callout kind="tip" title="What's in your Xero">
          Post each adjustment as a <strong>Manual journal</strong> dated 31 March 2026
          with a clear narrative. For depreciation use{' '}
          <strong>Advanced → Fixed Assets → Run Depreciation</strong>. For accruals and
          prepayments tick <em>Auto Reverse</em> so Xero unwinds them on 1 April. Then
          re-run the Trial Balance and P&amp;L to confirm the new totals.
        </Callout>
      </article>

      <WeekNav slug="week-02" />
    </Page>
  )
}

const STATEMENTS = [
  'These accounts have been prepared in accordance with the provisions applicable to companies subject to the small companies regime and the micro-entities provisions.',
  'The members have not required the company to obtain an audit of its accounts for the year in question in accordance with section 476 of the Companies Act 2006.',
  'The directors acknowledge their responsibilities for complying with the requirements of the Companies Act 2006 with respect to accounting records and the preparation of accounts.',
]

function SignOff() {
  return (
    <Reveal>
      <figure className="overflow-hidden rounded-2xl border border-line bg-[#fcf8f0] shadow-card">
        <figcaption className="border-b border-line bg-paper-sunk px-5 py-3">
          <p className="display text-lg font-600 text-ink">Foot of the balance sheet</p>
          <p className="font-mono text-[0.7rem] uppercase tracking-wide text-ink-faint">
            the three statements every micro-entity carries
          </p>
        </figcaption>
        <ol className="divide-y divide-line/60">
          {STATEMENTS.map((s, i) => (
            <li key={i} className="flex gap-3 px-5 py-3.5">
              <span className="tnum font-mono text-xs font-600 text-salmon-deep">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-[0.9rem] italic leading-relaxed text-ink-soft">{s}</span>
            </li>
          ))}
        </ol>
        <div className="flex items-end justify-between border-t border-line px-5 py-5">
          <div>
            <p className="text-[0.8rem] text-ink-soft">
              Approved by the board and signed on its behalf
            </p>
            <p className="display mt-3 text-2xl font-500 italic text-ink">Sarah Brown</p>
            <p className="font-mono text-[0.7rem] uppercase tracking-wide text-ink-faint">
              Director
            </p>
          </div>
          <p className="font-mono text-[0.72rem] text-ink-faint">Dated: __ ______ 2026</p>
        </div>
      </figure>
    </Reveal>
  )
}

interface Row {
  l: string
  v: number
  bold?: boolean
  rule?: boolean
  gap?: boolean
}

function Statement({ title, sub, rows }: { title: string; sub: string; rows: Row[] }) {
  return (
    <Reveal>
      <figure className="h-full overflow-hidden rounded-2xl border border-line bg-[#fcf8f0] shadow-card">
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
                className={`text-[0.9rem] ${r.bold ? 'font-700 text-ink' : 'text-ink-soft'}`}
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
