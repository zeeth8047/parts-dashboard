import { getStatus } from '../data/parts.js'

export default function PartsTable({ parts }) {
  if (parts.length === 0) {
    return <p className="empty-state">No parts match your search. Try adjusting the filters.</p>
  }

  return (
    <div className="table-wrapper">
      <table className="parts-table">
        <thead>
          <tr>
            <th>SKU</th>
            <th>Part Name</th>
            <th>Category</th>
            <th className="num">Stock</th>
            <th className="num">Unit Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {parts.map((part) => {
            const status = getStatus(part)
            const statusClass = status.toLowerCase().replace(/ /g, '-')
            return (
              <tr key={part.sku}>
                <td className="mono">{part.sku}</td>
                <td>{part.name}</td>
                <td>{part.category}</td>
                <td className="num">{part.stock}</td>
                <td className="num">${part.price.toFixed(2)}</td>
                <td>
                  <span className={`status-badge ${statusClass}`}>{status}</span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
