import {Edge, MarkerType, Node} from 'reactflow'

export const initialNodes: Node[] = [
  {
    id: 'budget',
    position: {x: 250, y: 300},
    data: {
      label: 'Budget',
    },
    style: {
      border: '1px solid #555',
    },
  },
  {
    id: 'expense',
    position: {x: 180, y: 450},
    data: {
      label: '- $100',
    },
    style: {
      border: '3px solid red',
    },
  },
  {
    id: 'income',
    position: {x: 220, y: 150},
    data: {
      label: '+ $100',
    },
    style: {
      border: '3px solid green',
    },
  },
]

export const initialEdges: Edge[] = [
  {
    id: 'budget-expense',
    source: 'budget',
    target: 'expense',
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
  },
  {
    id: 'income-budget',
    source: 'income',
    target: 'budget',
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
  },
]
