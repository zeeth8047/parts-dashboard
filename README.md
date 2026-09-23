# PartsPulse

A parts inventory dashboard demo built with React + Vite — a nod to industrial parts
e-commerce sites (couplings, bearings, gears, and more). It features a searchable,
filterable inventory table, summary stat cards, and a stock-by-category bar chart.

## Features

- **Searchable, filterable parts table** — full-text search by name or SKU, plus
  filters by category and stock status (In Stock / Low Stock / Out of Stock)
- **Summary stat cards** — total SKUs, low-stock count, out-of-stock count, and
  total inventory value
- **Stock-by-category bar chart** — hand-rolled SVG chart (no chart library needed)
- **Mock dataset** — 40 industrial parts across 10 categories
  (`src/data/parts.js`), with stock status derived from stock vs. reorder level
- **Responsive layout** with plain CSS (no UI framework)

## Getting started

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

The production build is written to `dist/`.

## Project structure

```
parts-pulse/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Layout, filter state, page composition
│   ├── App.css             # All styling (plain CSS)
│   ├── components/
│   │   ├── StatCards.jsx   # Summary stat cards
│   │   ├── StockChart.jsx  # Stock-by-category SVG bar chart
│   │   └── PartsTable.jsx  # Inventory table with status badges
│   └── data/
│       └── parts.js        # Mock parts dataset + status helper
└── README.md
```

## Notes

- All data is mock data defined in `src/data/parts.js` — there is no backend.
- The chart is a hand-rolled SVG component, so the app has zero chart-library
  dependencies beyond React itself.
