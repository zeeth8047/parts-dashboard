// Mock inventory dataset — 40 industrial parts across 10 categories.
// Stock status is derived from stock vs reorderLevel:
//   stock === 0            -> "Out of Stock"
//   stock <= reorderLevel  -> "Low Stock"
//   otherwise              -> "In Stock"

export const CATEGORIES = [
  'Couplings',
  'Bearings',
  'Gears',
  'Seals',
  'Belts',
  'Chains',
  'Motors',
  'Fasteners',
  'Valves',
  'Filters',
]

export const STATUSES = ['In Stock', 'Low Stock', 'Out of Stock']

export function getStatus(part) {
  if (part.stock === 0) return 'Out of Stock'
  if (part.stock <= part.reorderLevel) return 'Low Stock'
  return 'In Stock'
}

export const parts = [
  // Couplings
  { sku: 'CPL-1001', name: 'Jaw Coupling 25mm Bore', category: 'Couplings', stock: 48, reorderLevel: 10, price: 32.5 },
  { sku: 'CPL-1002', name: 'Flexible Elastomer Coupling', category: 'Couplings', stock: 8, reorderLevel: 12, price: 45.99 },
  { sku: 'CPL-1003', name: 'Rigid Shaft Coupling 40mm', category: 'Couplings', stock: 64, reorderLevel: 15, price: 21.75 },
  { sku: 'CPL-1004', name: 'Oldham Coupling Assembly', category: 'Couplings', stock: 0, reorderLevel: 8, price: 58.2 },

  // Bearings
  { sku: 'BRG-2001', name: '6204 Deep Groove Ball Bearing', category: 'Bearings', stock: 120, reorderLevel: 30, price: 9.85 },
  { sku: 'BRG-2002', name: 'Tapered Roller Bearing 32208', category: 'Bearings', stock: 22, reorderLevel: 25, price: 27.4 },
  { sku: 'BRG-2003', name: 'Pillow Block Bearing UCP206', category: 'Bearings', stock: 56, reorderLevel: 12, price: 18.9 },
  { sku: 'BRG-2004', name: 'Thrust Ball Bearing 51106', category: 'Bearings', stock: 0, reorderLevel: 10, price: 14.3 },

  // Gears
  { sku: 'GR-3001', name: 'Spur Gear 20T Module 2', category: 'Gears', stock: 75, reorderLevel: 20, price: 24.6 },
  { sku: 'GR-3002', name: 'Helical Gear Pair 45/90T', category: 'Gears', stock: 12, reorderLevel: 15, price: 89.0 },
  { sku: 'GR-3003', name: 'Worm Gear Reducer 40:1', category: 'Gears', stock: 9, reorderLevel: 6, price: 210.75 },
  { sku: 'GR-3004', name: 'Bevel Gear Set 1:2 Ratio', category: 'Gears', stock: 31, reorderLevel: 8, price: 132.4 },

  // Seals
  { sku: 'SEL-4001', name: 'Nitrile Oil Seal 30x47x7', category: 'Seals', stock: 210, reorderLevel: 50, price: 3.2 },
  { sku: 'SEL-4002', name: 'Viton O-Ring Kit 120pc', category: 'Seals', stock: 44, reorderLevel: 20, price: 16.8 },
  { sku: 'SEL-4003', name: 'Mechanical Shaft Seal 25mm', category: 'Seals', stock: 6, reorderLevel: 10, price: 47.5 },
  { sku: 'SEL-4004', name: 'PTFE Gasket Sheet 3mm', category: 'Seals', stock: 0, reorderLevel: 5, price: 62.0 },

  // Belts
  { sku: 'BLT-5001', name: 'V-Belt B-52 Industrial', category: 'Belts', stock: 96, reorderLevel: 25, price: 11.25 },
  { sku: 'BLT-5002', name: 'Timing Belt HTD 8M-1280', category: 'Belts', stock: 15, reorderLevel: 18, price: 29.9 },
  { sku: 'BLT-5003', name: 'Flat Polyurethane Belt 25mm', category: 'Belts', stock: 52, reorderLevel: 12, price: 19.4 },
  { sku: 'BLT-5004', name: 'Round Belt 6mm Green', category: 'Belts', stock: 78, reorderLevel: 20, price: 6.75 },

  // Chains
  { sku: 'CHN-6001', name: 'Roller Chain 40-1 10ft', category: 'Chains', stock: 40, reorderLevel: 10, price: 34.9 },
  { sku: 'CHN-6002', name: 'Double Pitch Chain 2040', category: 'Chains', stock: 7, reorderLevel: 10, price: 41.6 },
  { sku: 'CHN-6003', name: 'Leaf Chain BL634 15ft', category: 'Chains', stock: 18, reorderLevel: 8, price: 95.25 },
  { sku: 'CHN-6004', name: 'Chain Link Connector Set', category: 'Chains', stock: 150, reorderLevel: 40, price: 4.5 },

  // Motors
  { sku: 'MTR-7001', name: 'AC Induction Motor 1.5kW', category: 'Motors', stock: 11, reorderLevel: 5, price: 389.0 },
  { sku: 'MTR-7002', name: 'DC Gear Motor 12V 100RPM', category: 'Motors', stock: 33, reorderLevel: 10, price: 54.75 },
  { sku: 'MTR-7003', name: 'Stepper Motor NEMA 23', category: 'Motors', stock: 4, reorderLevel: 8, price: 42.9 },
  { sku: 'MTR-7004', name: 'Servo Motor 400W with Drive', category: 'Motors', stock: 0, reorderLevel: 3, price: 315.5 },

  // Fasteners
  { sku: 'FST-8001', name: 'Hex Bolt M10x50 Grade 8.8 (box)', category: 'Fasteners', stock: 320, reorderLevel: 100, price: 18.5 },
  { sku: 'FST-8002', name: 'Stainless Nut M8 A2 (bag)', category: 'Fasteners', stock: 280, reorderLevel: 100, price: 12.9 },
  { sku: 'FST-8003', name: 'Socket Head Cap Screw M6x25', category: 'Fasteners', stock: 95, reorderLevel: 120, price: 9.75 },
  { sku: 'FST-8004', name: 'Nyloc Nut M12 Assortment', category: 'Fasteners', stock: 0, reorderLevel: 60, price: 14.2 },

  // Valves
  { sku: 'VLV-9001', name: 'Ball Valve 1" Brass', category: 'Valves', stock: 62, reorderLevel: 15, price: 22.8 },
  { sku: 'VLV-9002', name: 'Solenoid Valve 24V 1/2"', category: 'Valves', stock: 9, reorderLevel: 12, price: 68.4 },
  { sku: 'VLV-9003', name: 'Gate Valve 2" Stainless', category: 'Valves', stock: 14, reorderLevel: 6, price: 124.9 },
  { sku: 'VLV-9004', name: 'Check Valve Spring 3/4"', category: 'Valves', stock: 47, reorderLevel: 12, price: 17.65 },

  // Filters
  { sku: 'FLT-10001', name: 'Hydraulic Spin-On Filter', category: 'Filters', stock: 85, reorderLevel: 25, price: 13.4 },
  { sku: 'FLT-10002', name: 'Air Filter Cartridge 254mm', category: 'Filters', stock: 13, reorderLevel: 15, price: 21.9 },
  { sku: 'FLT-10003', name: 'Oil Filter Element 10 Micron', category: 'Filters', stock: 58, reorderLevel: 20, price: 8.6 },
  { sku: 'FLT-10004', name: 'Fuel Water Separator 50 Micron', category: 'Filters', stock: 0, reorderLevel: 12, price: 26.3 },
]
