import * as React from 'react'
import ReactFlow, {
  Background,
  Controls,
  useEdgesState,
  useNodesState,
} from 'reactflow'
import {initialEdges, initialNodes} from './initialElements'
import {BudgetNode} from './BudgetNode'
import {TransactionNode} from './TransactionNode'

const nodeTypes = {
  budget: BudgetNode,
  income: props => <TransactionNode {...props} type="income" />,
  expense: props => <TransactionNode {...props} type="expense" />,
}

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
