import type { ReactNode } from 'react'
import { Page } from '../components/ui/Page'
import { WeekHeader } from '../components/ui/WeekHeader'
import { Section, Lede, Aside } from '../components/ui/Section'
import { Callout } from '../components/ui/Callout'
import { Term } from '../components/ui/Term'
import { Reveal } from '../components/ui/Reveal'
import { Quiz } from '../components/ui/Quiz'
import { WeekNav } from '../components/ui/WeekNav'
import { CT600DragDrop } from '../components/interactive/CT600DragDrop'
import { FilingTimeline } from '../components/interactive/FilingTimeline'
import { weekBySlug } from '../data/course'
import {
  ct600Boxes,
  obligations,
  softwareOptions,
  suppPages,
  htmlPenalties,
  chPenalties,
  paymentMethods,
  workflow,
} from '../data/week4'

const QUESTIONS = [
  {
    q: (
      <>
        By when must Acorn pay the corporation tax for the year ended 31 March 2026, and
        by when must it file the CT600?
      </>
    ),
    a: (
      <>
        Pay by <strong>1 January 2027</strong> (9 months and 1 day after period end).
        File the CT600 by <strong>31 March 2027</strong> (12 months). The tax is due
        before the return.
      </>
    ),
  },
  {
    q: <>What three things are submitted together to HMRC in a CT600 filing?</>,
    a: (
      <>
        The CT600 form, the full statutory accounts tagged in{' '}
        <Term slug="ixbrl">iXBRL</Term>, and the tax computation, also tagged in iXBRL.
      </>
    ),
  },
  {
    q: <>Why does HMRC mandate iXBRL?</>,
    a: (
      <>
        So its computers can read each number's meaning, period and context automatically,
        without rekeying. Mandatory since 2011 after the Carter Review.
      </>
    ),
  },
  {
    q: <>From which date is HMRC's free CATO service no longer available?</>,
    a: (
      <>
        <strong>31 March 2026</strong>. From 1 April 2026, commercial software is required
        to file the CT600 with HMRC.
      </>
    ),
  },
  {
    q: (
      <>
        A company files its CT600 two months late with £5,000 of tax outstanding. What
        flat penalty applies, and what else accrues?
      </>
    ),
    a: (
      <>
        A <strong>£200</strong> flat penalty (1 day late), plus interest on the £5,000 at
        base rate + 4 points. The second £200 only kicks in at three months.
      </>
    ),
  },
]

export function Week04() {
  const week = weekBySlug['week-04']
  const next = weekBySlug['week-05']

  return (
    <Page>
      <WeekHeader week={week} next={next} />

      <article className="mx-auto max-w-2xl px-5 sm:px-0">
        <Section index={1} id="filings" title="The filings you actually make">
          <Lede>
            You have a set of accounts and a tax computation. This week you submit them.
            Properly, and without an accountant.
          </Lede>
          <p>
            A normal trading year has four obligations clustered around year-end: three
            filings and one payment. Two go to <Term slug="hmrc">HMRC</Term>, two to{' '}
            <Term slug="companies-house">Companies House</Term>.
          </p>
        </Section>
      </article>

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SimpleTable
          caption="Acorn's four obligations"
          sub="year ended 31 March 2026"
          cols={['Obligation', 'To', 'Format', 'Deadline']}
          rows={obligations.map((o) => [o.obligation, o.to, o.format, o.deadline])}
        />
        <FilingTimeline />
      </div>

      <article className="mx-auto max-w-2xl px-5 sm:px-0">
        <Callout kind="warning" title="Tax is due before the return">
          You estimate and pay first, then file. Wait until you prepare the CT600 in March
          2027 and you have already missed the 1 January payment deadline, with interest
          running. Pay by 1 January 2027, file any time before 31 March 2027.
        </Callout>

        <Section index={2} title="What goes where">
          <p>
            The same accounts go to two places in two shapes.{' '}
            <Term slug="companies-house">Companies House</Term> gets a{' '}
            <Term slug="filleted-accounts">filleted</Term> set: the balance sheet and
            minimum notes, no P&amp;L. HMRC gets the <strong>full</strong> set - balance
            sheet, P&amp;L and notes - plus the tax computation, both tagged in{' '}
            <Term slug="ixbrl">iXBRL</Term>, bundled with the CT600 as one submission.
          </p>
        </Section>

        <Section index={3} id="ixbrl" title="What iXBRL is">
          <p>
            <Term slug="ixbrl">iXBRL</Term> is inline eXtensible Business Reporting
            Language - a technology, not a document type. An iXBRL file is an ordinary
            HTML page that looks like a printable set of accounts, but every number also
            carries an invisible, machine-readable tag: "this is turnover, for this
            period, in GBP, under FRS 105." Humans read the page; HMRC's computers read the
            tags.
          </p>
          <Aside>You never type the tags. The filing software emits them for you.</Aside>
          <p>
            For a <Term slug="micro-entity">micro-entity</Term> the tagging list is short -
            just the headline figures. The software selects the FRS 105 taxonomy from the
            FRC's 2025 suite automatically.
          </p>
        </Section>

        <Section index={4} id="ct600" title="The CT600 box by box">
          <p>
            The CT600 has hundreds of boxes. For a tiny one-trade Ltd you complete about
            fifteen. Here is Acorn's whole return.
          </p>
        </Section>
      </article>

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <figure className="overflow-hidden rounded-2xl border border-line bg-[#fcf8f0] shadow-card">
            <figcaption className="border-b border-line bg-paper-sunk px-5 py-3">
              <p className="display text-lg font-600 text-ink">CT600 · Acorn Studio Ltd</p>
              <p className="font-mono text-[0.7rem] uppercase tracking-wide text-ink-faint">
                the meaningful boxes
              </p>
            </figcaption>
            <div className="divide-y divide-line/60">
              {ct600Boxes.map((group) => (
                <div key={group.section} className="px-5 py-3">
                  <p className="mb-2 font-mono text-[0.62rem] uppercase tracking-wider text-salmon-deep">
                    {group.section}
                  </p>
                  {group.boxes.map((b) => (
                    <div
                      key={b.box}
                      className="flex items-baseline justify-between gap-4 py-1"
                    >
                      <span className="flex items-baseline gap-2.5 text-[0.86rem] text-ink-soft">
                        <span className="tnum font-mono text-[0.7rem] font-600 text-ink-faint">
                          {b.box}
                        </span>
                        {b.label}
                      </span>
                      <span className="tnum flex-none font-mono text-[0.86rem] font-600 text-ink">
                        {b.display}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </figure>
        </Reveal>

        <CT600DragDrop />
      </div>

      <article className="mx-auto max-w-2xl px-5 sm:px-0">
        <Section index={5} title="Supplementary pages">
          <p>
            Most companies need none. The supplementary pages cover special situations.
            Acorn needs no supplementary page this year - its{' '}
            <Term slug="dla">director's loan</Term> is not overdrawn and there is no R&amp;D
            claim. (Next week's overdrawn loan brings a CT600A into play.)
          </p>
        </Section>
      </article>

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SimpleTable
          caption="Supplementary pages"
          sub="and whether Acorn needs them"
          cols={['Page', 'Topic', 'For Acorn?']}
          rows={suppPages.map((s) => [s.page, s.topic, s.acorn])}
        />
      </div>

      <article className="mx-auto max-w-2xl px-5 sm:px-0">
        <Section index={6} id="software" title="CATO is closing - pick your software">
          <p>
            HMRC's free combined service, <Term slug="cato">CATO</Term>, closes on{' '}
            <strong>31 March 2026</strong>. From 1 April 2026 you need commercial filing
            software for the CT600. (Companies House{' '}
            <Term slug="webfiling">WebFiling</Term> stays free for accounts.) If you used
            CATO before, download your old filings before it closes.
          </p>
        </Section>
      </article>

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SimpleTable
          caption="Budget filing software"
          sub="indicative prices, May 2026"
          cols={['Software', 'Price', 'Files', 'Verdict']}
          rows={softwareOptions.map((s) => [s.name, s.price, s.files, s.verdict])}
        />
      </div>

      <article className="mx-auto max-w-2xl px-5 sm:px-0">
        <Section index={7} id="gateway" title="Government Gateway prerequisites">
          <p>
            Before any software can file for you, set up a{' '}
            <Term slug="government-gateway">Government Gateway</Term> account (choose{' '}
            Organisation), then enrol the company for Corporation Tax using its{' '}
            <Term slug="utr">UTR</Term> and registered-office postcode.
          </p>
          <Callout kind="warning" title="The activation code takes 7-10 days">
            HMRC <strong>posts</strong> a one-time activation code to the registered
            office. It cannot be emailed or fast-tracked. Do not leave enrolment until the
            last week.
          </Callout>
        </Section>

        <Section index={8} title="The filing workflow">
          <p>The steps are similar across all the budget tools.</p>
          <ol className="my-4 space-y-2.5">
            {workflow.map((step, i) => (
              <li key={i} className="flex gap-3 text-[0.95rem] text-ink-soft">
                <span className="tnum mt-0.5 font-mono text-xs font-700 text-salmon-deep">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </Section>

        <Section index={9} id="paying" title="Paying the corporation tax">
          <p>
            Filing the return does not pay the tax - you pay separately. For Acorn's{' '}
            <strong>£8,831</strong>, a Faster Payment from the Starling account to HMRC,
            quoting the 17-character CT payment reference, on or before 1 January 2027, is
            the cleanest method.
          </p>
        </Section>
      </article>

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SimpleTable
          caption="Ways to pay"
          sub="quote the CT payment reference"
          cols={['Method', 'Timing']}
          rows={paymentMethods.map((p) => [p.method, p.timing])}
        />
      </div>

      <article className="mx-auto max-w-2xl px-5 sm:px-0">
        <Callout kind="warning" title="Interest runs on late tax">
          Interest accrues from 1 January 2027 if the payment lands late, at the Bank of
          England base rate plus 4 percentage points (around 7.75% in May 2026). It is not
          a fixed penalty, but it adds up.
        </Callout>

        <Section index={10} title="Companies House and the confirmation statement">
          <p>
            Acorn files <Term slug="filleted-accounts">filleted</Term> accounts at
            Companies House by <strong>31 December 2026</strong>, free through{' '}
            <Term slug="webfiling">WebFiling</Term> or via the CT software. Separately,
            every company files a{' '}
            <Term slug="confirmation-statement">confirmation statement</Term> at least once
            a year (£34 online), confirming the registered office, directors, shares and
            people with significant control. It is admin, not tax.
          </p>
        </Section>

        <Section index={11} id="penalties" title="Late-filing penalties">
          <p>
            Two separate regimes apply. The HMRC penalties{' '}
            <strong>doubled from 1 April 2026</strong>. Flat penalties apply even if no
            tax is due.
          </p>
        </Section>
      </article>

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          <SimpleTable
            caption="HMRC (CT600)"
            sub="from 1 April 2026"
            cols={['How late', 'Penalty']}
            rows={htmlPenalties.map((p) => [p.late, p.penalty])}
          />
          <SimpleTable
            caption="Companies House"
            sub="private company"
            cols={['How late', 'Penalty']}
            rows={chPenalties.map((p) => [p.late, p.penalty])}
          />
        </div>
      </div>

      <article className="mx-auto max-w-2xl px-5 sm:px-0">
        <Callout kind="example" title="A late filing costs">
          File the CT600 four months late and the flat penalties are £200 plus a further
          £200 at three months - £400 in total. If the tax was also paid late, interest
          from 1 January 2027 runs on top.
        </Callout>

        <Callout kind="warning" title="The errors that catch people">
          Filing the return but forgetting to pay the tax. Leaving Gateway enrolment too
          late for the posted activation code. Sending filleted accounts to HMRC (they want
          the full set). Assuming filing one place files the other - they are separate.
        </Callout>

        <div className="py-6">
          <Quiz questions={QUESTIONS} />
        </div>

        <Callout kind="tip" title="Keep your records six years">
          Both the Companies Act and HMRC require six years of records from the period end:
          the Xero data, bank statements, the computation, the filed CT600 and the iXBRL
          files. Save the HMRC acknowledgement (with its IRmark) as proof of filing.
        </Callout>
      </article>

      <WeekNav slug="week-04" />
    </Page>
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
  rows: ReactNode[][]
  foot?: ReactNode[]
}) {
  return (
    <Reveal>
      <figure className="my-4 h-full overflow-hidden rounded-2xl border border-line bg-paper-raised shadow-card">
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
                    className={`px-4 py-2.5 font-600 ${i === 0 ? 'text-left' : 'text-left'}`}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, ri) => (
                <tr key={ri} className="border-b border-line/50 align-top">
                  {r.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-4 py-2.5 ${
                        ci === 0 ? 'font-600 text-ink' : 'text-ink-soft'
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
                    <td key={ci} className="px-4 py-2.5 text-ink">
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
