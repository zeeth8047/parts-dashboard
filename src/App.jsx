import { useMemo, useState } from 'react'
import { parts, CATEGORIES, STATUSES, getStatus } from './data/parts.js'
import StatCards from './components/StatCards.jsx'
import StockChart from './components/StockChart.jsx'
import PartsTable from './components/PartsTable.jsx'

export default function App() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [status, setStatus] = useState('All')

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return parts.filter((part) => {
      const matchesSearch =
        q === '' ||
        part.name.toLowerCase().includes(q) ||
        part.sku.toLowerCase().includes(q)
      const matchesCategory = category === 'All' || part.category === category
      const matchesStatus = status === 'All' || getStatus(part) === status
      return matchesSearch && matchesCategory && matchesStatus
    })
  }, [search, category, status])

  return (
    <div className="app">
      <header className="app-header">
        <div>
          <h1>PartsPulse</h1>
          <p className="subtitle">Industrial parts inventory dashboard</p>
        </div>
      </header>

      <main>
        <StatCards />

        <StockChart />

        <section className="table-section">
          <h2>Inventory</h2>
          <div className="filters">
            <input
              type="search"
              placeholder="Search by name or SKU..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="filter-input"
              aria-label="Search parts"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="filter-select"
              aria-label="Filter by category"
            >
              <option value="All">All categories</option>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="filter-select"
              aria-label="Filter by stock status"
            >
              <option value="All">All statuses</option>
              {STATUSES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <span className="result-count">{filtered.length} of {parts.length} parts</span>
          </div>

          <PartsTable parts={filtered} />
        </section>
      </main>

      <footer className="app-footer">
        <p>PartsPulse demo — mock data, React + Vite</p>
      </footer>
    </div>
  )
}
