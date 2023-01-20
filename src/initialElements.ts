import colors from 'tailwindcss/colors'
import {MarkerType, Node} from 'reactflow'

export type BudgetNodeType = typeof budgetNode
export type IncomeNodeType = ReturnType<typeof createIncomeNode>
export type ExpenseNodeType = ReturnType<typeof createExpenseNode>
export type NodeType = BudgetNodeType | IncomeNodeType | ExpenseNodeType

let id = 0

const budgetNode = {
  id: 'budget',
  type: 'budget' as const,
  position: {x: 250, y: 300},
  data: {
    label: 'Budget',
  },
}

export const createIncomeNode = (amount = 0) => ({
  id: `income-${id++}`,
  type: 'income' as const,
  position: {x: 250, y: 25},
  data: {
    label: 'income',
    amount,
  },
  style: {
    width: 100,
  },
})

export const createExpenseNode = (amount = 0) => ({
  id: `expense-${id++}`,
  type: 'expense' as const,
  position: {x: 250, y: 500},
  data: {
    label: 'expense',
    amount: -amount,
  },
  style: {
    width: 100,
  },
})

export const initialNodes: NodeType[] = [
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

export const generateEdges = (nodes: Node[]) => {
  let edges = []

  const incomeNodes = nodes.filter(node => node.type === 'income')
  const expenseNodes = nodes.filter(node => node.type === 'expense')

  for (const incomeNode of incomeNodes) {
    edges.push({
      id: `edge-${id++}`,
      source: incomeNode.id,
      target: budgetNode.id,
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 10,
        height: 10,
        color: colors.green[500],
      },
      style: {
        strokeWidth: 2,
        stroke: colors.green[500],
      },
    })
  }

  for (const expenseNode of expenseNodes) {
    edges.push({
      id: `edge-${id++}`,
      source: budgetNode.id,
      target: expenseNode.id,
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 10,
        height: 10,
        color: colors.red[500],
      },
      style: {
        strokeWidth: 2,
        stroke: colors.red[500],
      },
    })
  }

  return edges
}

export const initialEdges = generateEdges(initialNodes)
