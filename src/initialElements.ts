import {MarkerType, Node} from 'reactflow'

let id = 0

const budgetNode = {
  id: 'budget',
  type: 'budget' as const,
  position: {x: 250, y: 300},
  data: {
    label: 'Budget',
  },
}

const createIncomeNode = (amount = 0) => ({
  id: `income-${id++}`,
  type: 'income' as const,
  position: {x: 250, y: 25},
  data: {
    amount,
  },
})

const createExpenseNode = (amount = 0) => ({
  id: `expense-${id++}`,
  type: 'expense' as const,
  position: {x: 250, y: 500},
  data: {
    amount,
  },
})

export const initialNodes = [
  budgetNode,
  {
    ...createExpenseNode(200),
    position: {x: 180, y: 450},
  },
  {
    ...createIncomeNode(1000),
    position: {x: 220, y: 150},
  },
]

const generateEdges = (nodes: Node[]) => {
  let edges = []

  const incomeNodes = nodes.filter(node => node.type === 'income')
  const expenseNodes = nodes.filter(node => node.type === 'expense')

  for (const incomeNode of incomeNodes) {
    edges.push({
      id: `edge-${id++}`,
      source: incomeNode.id,
      target: budgetNode.id,
      markerEnd: {
        type: MarkerType.Arrow,
        width: 20,
        height: 20,
        color: 'green',
      },
      style: {
        strokeWidth: 2,
        stroke: 'green',
      },
    })
  }

  for (const expenseNode of expenseNodes) {
    edges.push({
      id: `edge-${id++}`,
      source: budgetNode.id,
      target: expenseNode.id,
      markerEnd: {
        type: MarkerType.Arrow,
        width: 20,
        height: 20,
        color: 'red',
      },
      style: {
        strokeWidth: 2,
        stroke: 'red',
      },
    })
  }

  return edges
}

export const initialEdges = generateEdges(initialNodes)
