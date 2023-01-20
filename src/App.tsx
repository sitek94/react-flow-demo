import * as React from 'react'
import ReactFlow, {
  Background,
  Controls,
  Node,
  useEdgesState,
  useNodesState,
} from 'reactflow'
import {generateEdges, initialEdges, initialNodes} from './initialElements'
import {BudgetNode} from './BudgetNode'
import {TransactionNode} from './TransactionNode'
import {AddTransactionsPanel} from './AddTransactionsPanel'

const nodeTypes = {
  budget: BudgetNode,
  transaction: TransactionNode,
}

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const addNode = (node: Node) => {
    const newNodes = [...nodes, node]

    setNodes(newNodes)
    setEdges(generateEdges(newNodes))
  }

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
    >
      <AddTransactionsPanel addNode={addNode} />
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
