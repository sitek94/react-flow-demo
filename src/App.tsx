import * as React from 'react'
import type {Edge, Node} from 'reactflow'
import ReactFlow, {
  Background,
  Controls,
  MarkerType,
  useEdgesState,
  useNodesState,
} from 'reactflow'
import {BudgetNode} from './BudgetNode'

const nodeTypes = {
  budgetNode: BudgetNode,
}

const initialNodes: Node[] = [
  {
    id: 'budget',
    type: 'budgetNode',
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
    position: {x: 150, y: 400},
    data: {
      label: '- $100',
    },
    style: {
      border: '3px solid red',
    },
  },
  {
    id: 'income',
    position: {x: 350, y: 200},
    data: {
      label: '+ $100',
    },
    style: {
      border: '3px solid green',
    },
  },
]

const initialEdges: Edge[] = [
  {
    id: 'budget-expense',
    source: 'budget',
    target: 'expense',
    markerEnd: {
      type: MarkerType.Arrow,
    },
  },
  {
    id: 'budget-expense2',
    source: 'budget',
    target: 'expense2',
    markerEnd: {
      type: MarkerType.Arrow,
    },
  },
  {
    id: 'income-budget',
    source: 'income',
    target: 'budget',
    markerEnd: {
      type: MarkerType.Arrow,
    },
  },
]

function Flow() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes)
  const [edges, , onEdgesChange] = useEdgesState(initialEdges)

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
    >
      <Background />
      <Controls />
    </ReactFlow>
  )
}

export function App() {
  return (
    <div style={{height: '100vh'}}>
      <Flow />
    </div>
  )
}
