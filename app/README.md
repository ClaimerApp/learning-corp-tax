# The Ledger — an interactive corporation tax course

An interactive web version of the five-week UK corporation tax & accounts
tutorial, following the fictional **Acorn Studio Ltd**. Built with Vite, React,
TypeScript, Tailwind and Framer Motion.

## Run it

```bash
cd app
npm install
npm run dev      # http://localhost:5173
```

```bash
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build
```

## What's here (all five weeks)

- **Home** — hero, the Acorn company card, the five-week syllabus, outcomes.
- **Week 1 · Books & the trial balance** — the five families, an interactive
  **DEAD CLIC** sorter, the **accounting-equation** balance, Acorn's full trial
  balance, a from-scratch **trial-balance sandbox**, the ten common mistakes,
  and a self-marked quiz.
- **Week 2 · Micro-entity accounts** — size classes, FRS 105 statements, and the
  headline **year-end-adjustments simulator** (profit settles to £47,365 / after
  tax £38,534; net assets £13,846).
- **Glossary** — ~55 plain-English terms, searchable. Bold terms in the course
  hover-link to their definition.
- **Week 3 · From accounting profit to taxable profit** — a live **tax-computation
  builder** (toggle the add-backs and AIA, watch TTP and tax settle on £46,478 /
  £8,831) and a **marginal-relief explorer** (drag TTP across the bands).
- **Week 4 · Filing the CT600** — the **deadline runway**, the CT600 box by box, and a
  **map-the-figures-to-the-box** interactive, plus iXBRL, Gateway, software and penalties.
- **Week 5 · A messier year** — an interactive **Xero file health check** (13 findings),
  a **s.455 calculator** for the overdrawn director's loan, and a three-gate **R&D test**,
  ending on the year-2 computation, CT600A and marginal relief.
- Progress (mark-week-complete) persisted in `localStorage`.

## Structure

```
src/
  data/        acorn figures + trial balance, glossary, course meta, sim datasets
  lib/         money formatting, localStorage progress hook
  components/
    layout/    Nav, Footer
    ui/        Term (glossary tooltip), Callout, Journal, LedgerTable, Quiz,
               Section, WeekHeader, WeekNav, AnimatedNumber, Reveal, Page
    interactive/  DeadClic, AccountingEquation, TrialBalanceSimulator
  pages/       Home, Week01, Week02, GlossaryPage, NotReady
```

Educational only — not tax advice. Figures are Acorn's; rates current to 28 May 2026.
