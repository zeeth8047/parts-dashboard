import { parts, getStatus } from '../data/parts.js'

function formatCurrency(value) {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

export default function StatCards() {
  const totalSkus = parts.length
  const lowStockCount = parts.filter((p) => getStatus(p) === 'Low Stock').length
  const outOfStockCount = parts.filter((p) => getStatus(p) === 'Out of Stock').length
  const inventoryValue = parts.reduce((sum, p) => sum + p.stock * p.price, 0)

  const cards = [
    { label: 'Total SKUs', value: totalSkus, tone: 'blue' },
    { label: 'Low Stock', value: lowStockCount, tone: 'amber' },
    { label: 'Out of Stock', value: outOfStockCount, tone: 'red' },
    { label: 'Inventory Value', value: formatCurrency(inventoryValue), tone: 'green' },
  ]

  return (
    <section className="stat-cards">
      {cards.map((card) => (
        <div key={card.label} className={`stat-card tone-${card.tone}`}>
          <span className="stat-label">{card.label}</span>
          <span className="stat-value">{card.value}</span>
        </div>
      ))}
    </section>
  )
}
