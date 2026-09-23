import { parts, CATEGORIES } from '../data/parts.js'

const BAR_COLOR = '#2563eb'
const WIDTH = 760
const HEIGHT = 300
const PAD_LEFT = 48
const PAD_RIGHT = 16
const PAD_TOP = 16
const PAD_BOTTOM = 52

export default function StockChart() {
  const totals = CATEGORIES.map((category) => ({
    category,
    total: parts
      .filter((p) => p.category === category)
      .reduce((sum, p) => sum + p.stock, 0),
  }))

  const max = Math.max(...totals.map((t) => t.total), 1)
  const chartWidth = WIDTH - PAD_LEFT - PAD_RIGHT
  const chartHeight = HEIGHT - PAD_TOP - PAD_BOTTOM
  const slot = chartWidth / totals.length
  const barWidth = Math.min(44, slot * 0.62)

  return (
    <section className="chart-card">
      <h2>Stock by Category</h2>
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="chart" role="img" aria-label="Bar chart of total stock by category">
        {/* gridlines */}
        {[0, 0.25, 0.5, 0.75, 1].map((f) => {
          const y = PAD_TOP + chartHeight * (1 - f)
          return (
            <g key={f}>
              <line x1={PAD_LEFT} y1={y} x2={WIDTH - PAD_RIGHT} y2={y} className="gridline" />
              <text x={PAD_LEFT - 10} y={y + 4} textAnchor="end" className="tick-label">
                {Math.round(max * f)}
              </text>
            </g>
          )
        })}
        {totals.map((t, i) => {
          const barHeight = (t.total / max) * chartHeight
          const x = PAD_LEFT + slot * i + (slot - barWidth) / 2
          const y = PAD_TOP + chartHeight - barHeight
          return (
            <g key={t.category}>
              <rect x={x} y={y} width={barWidth} height={barHeight} rx={4} fill={BAR_COLOR} />
              <text x={x + barWidth / 2} y={y - 8} textAnchor="middle" className="tick-label">
                {t.total}
              </text>
              <text
                x={x + barWidth / 2}
                y={HEIGHT - 14}
                textAnchor="middle"
                className="tick-label category-label"
                transform={`rotate(-18 ${x + barWidth / 2} ${HEIGHT - 14})`}
              >
                {t.category}
              </text>
            </g>
          )
        })}
      </svg>
    </section>
  )
}
