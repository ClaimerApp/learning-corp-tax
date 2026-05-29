import { Page } from '../components/ui/Page'
import { WeekHeader } from '../components/ui/WeekHeader'
import { Section, Lede, Aside } from '../components/ui/Section'
import { Callout } from '../components/ui/Callout'
import { Term } from '../components/ui/Term'
import { Reveal } from '../components/ui/Reveal'
import { Quiz } from '../components/ui/Quiz'
import { WeekNav } from '../components/ui/WeekNav'
import { TaxComputationBuilder } from '../components/interactive/TaxComputationBuilder'
import { MarginalReliefExplorer } from '../components/interactive/MarginalReliefExplorer'
import { weekBySlug } from '../data/course'
import {
  pbt,
  smallProfitsRate,
  comp,
  acornFiled,
  rateBands,
  disallowables,
  assocExamples,
  ct600Boxes,
} from '../data/week3'
import { ledger } from '../lib/format'

const QUESTIONS = [
  {
    q: (
      <>
        A company has profit before tax of £42,000, depreciation of £2,500, client
        entertaining of £700, and £1,000 of plant bought in year. What is the
        corporation tax payable?
      </>
    ),
    a: (
      <>
        £42,000 + £2,500 + £700 - £1,000 AIA = <strong>£44,200</strong> TTP. Below
        £50,000, so 19%. Tax = <strong>£8,398</strong>.
      </>
    ),
  },
  {
    q: <>What is the effective corporation tax rate on TTP of exactly £250,000?</>,
    a: (
      <>
        Exactly <strong>25%</strong>. At £250,000 the marginal relief falls to zero, so
        the main rate applies in full.
      </>
    ),
  },
  {
    q: <>Why does the tax system add back depreciation in the computation?</>,
    a: (
      <>
        Because tax has its own parallel mechanism,{' '}
        <Term slug="capital-allowances">capital allowances</Term>, for the cost of fixed
        assets. Allowing depreciation as well would give relief twice.
      </>
    ),
  },
  {
    q: (
      <>
        A new company's first period is nine months to 30 September 2026. What are the
        small profits and main rate thresholds?
      </>
    ),
    a: (
      <>
        Both time-apportion to 9/12: small profits threshold <strong>£37,500</strong>,
        main rate threshold <strong>£187,500</strong>.
      </>
    ),
  },
  {
    q: (
      <>
        A founder owns three Ltds outright, each with TTP of £40,000. How does the
        associated companies rule affect them?
      </>
    ),
    a: (
      <>
        Each has two associates, so thresholds divide by three. The small profits limit
        drops to <strong>£16,667</strong>, pushing £40,000 into the marginal band. Each
        pays more than a standalone company would at £40,000.
      </>
    ),
  },
]

export function Week03() {
  const week = weekBySlug['week-03']
  const next = weekBySlug['week-04']

  return (
    <Page>
      <WeekHeader week={week} next={next} />

      <article className="mx-auto max-w-2xl px-5 sm:px-0">
        <Section index={1} id="insight" title="Accounting profit is not taxable profit">
          <Lede>
            This is the most useful idea in UK corporation tax. Get it, and the rest is
            detail.
          </Lede>
          <p>
            <strong>Accounting profit</strong> is what your accounts say you earned,
            governed by accounting standards. <strong>Taxable profit</strong> is what{' '}
            <Term slug="hmrc">HMRC</Term> says you earned, governed by tax legislation.
            The two overlap but never quite match. A tax computation starts from
            accounting profit and adjusts it to taxable profit.
          </p>
          <Formula
            lines={[
              'Accounting profit per the accounts',
              '  + costs the accounts allowed but tax does not',
              '  - reliefs tax gives that the accounts ignored',
              '  +/- timing differences',
              '  = Taxable profit',
            ]}
          />
          <Aside>That is corporation tax in one sentence. The rest fills in the detail.</Aside>
          <p>
            You ended Week 2 with profit before tax of{' '}
            <strong>{ledger(pbt)}</strong> and a provisional{' '}
            <strong>{ledger(acornFiled.ct)}</strong> tax charge. This week we earn that
            figure.
          </p>
        </Section>

        <Section index={2} id="build" title="Build the computation">
          <p>
            Every computation has the same shape: start at profit before tax, add back{' '}
            <Term slug="disallowable">disallowable</Term> costs, take off{' '}
            <Term slug="capital-allowances">capital allowances</Term>, and you land on{' '}
            taxable profit. Toggle Acorn's three adjustments and watch it settle.
          </p>
        </Section>
      </article>

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <TaxComputationBuilder
          title="Corporation tax computation · Acorn Studio Ltd"
          subtitle="Toggle each adjustment and watch the tax-adjusted profit and tax respond."
          pbt={pbt}
          rate={smallProfitsRate}
          lines={comp}
          filed={acornFiled}
        />
      </div>

      <article className="mx-auto max-w-2xl px-5 sm:px-0">
        <Section index={3} id="disallowables" title="Disallowable expenses">
          <p>
            A <Term slug="disallowable">disallowable expense</Term> appears in the P&amp;L
            but tax law refuses to recognise it, so you{' '}
            <Term slug="add-back">add it back</Term>. The ones that bite a small Ltd:
          </p>
          <ul className="my-4 space-y-2 text-[0.97rem] text-ink-soft">
            <li>
              <strong>Depreciation and amortisation</strong> - always added back; capital
              allowances replace them.
            </li>
            <li>
              <strong>Client entertaining</strong> - hospitality to anyone but employees
              is disallowable (CTA 2009 s.1298). VAT on it is not recoverable either.
            </li>
            <li>
              <strong>Fines and penalties</strong> - parking, speeding, late filing. Tax
              should not soften the sting.
            </li>
            <li>
              <strong>Private use</strong> - only the business proportion is allowed.
            </li>
            <li>
              <strong>Gifts to customers</strong> - disallowable unless branded, not
              food or drink, and £50 or less per recipient per year.
            </li>
          </ul>
        </Section>
      </article>

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SimpleTable
          caption="Acorn's disallowables"
          sub="add-backs for the year"
          cols={['Item', 'Add back']}
          rows={disallowables.map((d) => [d.item, ledger(d.amount)])}
          foot={['Total add-back', ledger(disallowables.reduce((s, d) => s + d.amount, 0))]}
        />
      </div>

      <article className="mx-auto max-w-2xl px-5 sm:px-0">
        <Section index={4} id="capital-allowances" title="Capital allowances: tax's depreciation">
          <p>
            In place of depreciation, tax gives{' '}
            <Term slug="capital-allowances">capital allowances</Term>. The 2025/26 regime
            is generous. The <Term slug="aia">Annual Investment Allowance</Term> gives
            100% relief in year one on qualifying plant up to £1,000,000 - covering almost
            everything a tiny Ltd buys.{' '}
            <Term slug="full-expensing">Full expensing</Term> does the same for new
            main-rate assets with no cap (companies only). Anything that does not qualify
            (typically cars) is relieved by a{' '}
            <Term slug="wda">writing-down allowance</Term> at 18% or 6% a year.
          </p>
          <Callout kind="example" title="Acorn's claim">
            Acorn bought a £1,500 MacBook and a £400 desk-and-chair set, £1,900 of plant.
            AIA relieves all <strong>{ledger(1900)}</strong> in year one, even though the
            accounts spread it over three years. Cars are the exception: no AIA, WDA only,
            with a 100% first-year allowance for zero-emission cars.
          </Callout>
        </Section>

        <Section index={5} title="Acorn's full computation">
          <p>
            Put it together and the half-page computation reads straight down to the tax
            charge.
          </p>
        </Section>
      </article>

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <figure className="overflow-hidden rounded-2xl border border-line bg-[#fcf8f0] shadow-card">
            <figcaption className="border-b border-line bg-paper-sunk px-5 py-3">
              <p className="display text-lg font-600 text-ink">Corporation tax computation</p>
              <p className="font-mono text-[0.7rem] uppercase tracking-wide text-ink-faint">
                year ended 31 March 2026
              </p>
            </figcaption>
            <div className="px-5 py-4">
              <CompLine label="Profit before tax (per accounts)" value={47365} />
              <CompLine label="Add: depreciation" value={633} indent />
              <CompLine label="Add: client entertaining" value={380} indent />
              <CompLine label="" value={48378} rule />
              <CompLine label="Less: Annual Investment Allowance" value={-1900} indent />
              <CompLine label="Tax-adjusted trading profit (TTP)" value={46478} rule bold />
              <CompLine label="Corporation tax at 19%" value={8831} />
            </div>
            <p className="border-t border-line bg-paper-raised px-5 py-2.5 text-center text-[0.8rem] text-sage-deep">
              £46,478 x 19% = £8,830.82, rounded to £8,831 - the provision from Week 2.
            </p>
          </figure>
        </Reveal>
      </div>

      <article className="mx-auto max-w-2xl px-5 sm:px-0">
        <Section index={6} id="rates" title="Rates, bands and marginal relief">
          <p>
            The UK runs a graduated rate. Below £50,000 you pay the 19%{' '}
            <Term slug="small-profits-rate">small profits rate</Term>. Above £250,000 you
            pay the 25% <Term slug="main-rate">main rate</Term>. Between the two,{' '}
            <Term slug="marginal-relief">marginal relief</Term> produces a sliding
            effective rate. Drag the profit and watch the tax follow.
          </p>
        </Section>
      </article>

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <MarginalReliefExplorer
          title="Marginal relief explorer"
          subtitle="Drag taxable profit across the bands and watch the effective rate slide."
        />
        <div className="mt-4">
          <SimpleTable
            caption="The three bands"
            sub="FY2025 and FY2026"
            cols={['Band', 'Taxable profit', 'Rate']}
            rows={rateBands.map((b) => [b.band, b.range, b.rate])}
          />
        </div>
      </div>

      <article className="mx-auto max-w-2xl px-5 sm:px-0">
        <Callout kind="example" title="Marginal relief worked through">
          Beech Ltd has TTP of £150,000. Tax all of it at 25% = £37,500. Marginal relief
          = (3/200) x (£250,000 - £150,000) = <strong>£1,500</strong>. Corporation tax =
          £37,500 - £1,500 = <strong>£36,000</strong>, an effective rate of 24%.
        </Callout>

        <Section index={7} id="associated" title="Associated companies and short periods">
          <p>
            The £50,000 and £250,000 thresholds <strong>divide</strong> if the company
            has <Term slug="associated-companies">associated companies</Term> - any under
            common control. With N associates the thresholds divide by N + 1. A short{' '}
            <Term slug="accounting-period">accounting period</Term> time-apportions them
            instead: a six-month period halves both.
          </p>
        </Section>
      </article>

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SimpleTable
          caption="How associates split the thresholds"
          sub="each company's own limits"
          cols={['Companies', 'Small profits', 'Main rate']}
          rows={assocExamples.map((a) => [
            a.companies,
            `£${a.lower.toLocaleString('en-GB')}`,
            `£${a.upper.toLocaleString('en-GB')}`,
          ])}
        />
      </div>

      <article className="mx-auto max-w-2xl px-5 sm:px-0">
        <Section index={8} id="ct600-map" title="Mapping to the CT600">
          <p>
            Almost every line of the computation lands in one box on the{' '}
            <Term slug="ct600">CT600</Term>. That is next week's work - here is the
            preview for Acorn.
          </p>
        </Section>
      </article>

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SimpleTable
          caption="Computation to CT600"
          sub="twelve boxes is the whole return"
          cols={['Computation line', 'Value', 'Box']}
          rows={ct600Boxes.map((r) => [r.line, r.value, r.box])}
        />
      </div>

      <article className="mx-auto max-w-2xl px-5 sm:px-0">
        <Callout kind="warning" title="Where DIY filers slip">
          The two most common errors: forgetting to add back depreciation, and treating
          client entertaining as deductible. Also watch for claiming AIA on a car,
          treating dividends as an expense, and forgetting marginal relief when profit
          sits in the band.
        </Callout>

        <div className="py-6">
          <Quiz questions={QUESTIONS} />
        </div>

        <Callout kind="tip" title="What's in your Xero">
          Xero does not produce a tax computation - it is bookkeeping software. Build the
          computation in a spreadsheet mirroring the layout above, or use a guided tool
          (TinyTax, Easy Digital Filing, FreeAgent). Keep the workings for six years; HMRC
          may ask to see them.
        </Callout>
      </article>

      <WeekNav slug="week-03" />
    </Page>
  )
}

function Formula({ lines }: { lines: string[] }) {
  return (
    <Reveal>
      <pre className="not-prose my-6 overflow-x-auto rounded-xl border border-line bg-[#fcf8f0] px-5 py-4 font-mono text-[0.82rem] leading-relaxed text-ink-soft shadow-card">
        {lines.join('\n')}
      </pre>
    </Reveal>
  )
}

function CompLine({
  label,
  value,
  indent = false,
  rule = false,
  bold = false,
}: {
  label: string
  value: number
  indent?: boolean
  rule?: boolean
  bold?: boolean
}) {
  return (
    <div
      className={`flex items-baseline justify-between py-1.5 ${
        rule ? 'border-t border-ink/30' : ''
      }`}
    >
      <span
        className={`text-[0.9rem] ${indent ? 'pl-5' : ''} ${
          bold ? 'font-700 text-ink' : 'text-ink-soft'
        }`}
      >
        {label}
      </span>
      <span
        className={`tnum font-mono text-[0.9rem] ${bold ? 'font-700 text-ink' : 'text-ink'}`}
      >
        {value < 0 ? `(${ledger(-value)})` : ledger(value)}
      </span>
    </div>
  )
}

function SimpleTable({
  caption,
  sub,
  cols,
  rows,
  foot,
}: {
  caption: string
  sub: string
  cols: string[]
  rows: string[][]
  foot?: string[]
}) {
  return (
    <Reveal>
      <figure className="my-4 overflow-hidden rounded-2xl border border-line bg-paper-raised shadow-card">
        <figcaption className="border-b border-line bg-paper-sunk px-5 py-3">
          <p className="display text-base font-600 text-ink">{caption}</p>
          <p className="font-mono text-[0.7rem] uppercase tracking-wide text-ink-faint">{sub}</p>
        </figcaption>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line text-[0.62rem] uppercase tracking-wider text-ink-faint">
                {cols.map((c, i) => (
                  <th
                    key={c}
                    className={`px-4 py-2.5 font-600 ${i === 0 ? 'text-left' : 'text-right'}`}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, ri) => (
                <tr key={ri} className="border-b border-line/50">
                  {r.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-4 py-2.5 ${
                        ci === 0
                          ? 'text-ink'
                          : 'tnum text-right font-mono text-ink-soft'
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            {foot && (
              <tfoot>
                <tr className="border-t-2 border-ink bg-paper-sunk font-700">
                  {foot.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-4 py-2.5 ${
                        ci === 0 ? 'text-ink' : 'tnum text-right font-mono text-ink'
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              </tfoot>
            )}
          </table>
        </div>
      </figure>
    </Reveal>
  )
}
