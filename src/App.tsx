import * as React from 'react'
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
} from 'reactflow'
import type {Node, Edge} from 'reactflow'

const initialNodes: Node[] = [
  {
    id: '1',
    data: {label: 'Hello'},
    position: {x: 0, y: 0},
    type: 'input',
  },
  {
    id: '2',
    data: {label: 'World'},
    position: {x: 100, y: 100},
  },
]

const initialEdges: Edge[] = [
  {id: '1-2', source: '1', target: '2', label: 'to the', type: 'step'},
]

function Flow() {
  const [nodes, setNodes] = React.useState(initialNodes)
  const [edges, setEdges] = React.useState(initialEdges)

  return (
    <ReactFlow
      nodes={nodes}
      onNodesChange={changes =>
        setNodes(nodes => applyNodeChanges(changes, nodes))
      }
      edges={edges}
      onEdgesChange={changes =>
        setEdges(edges => applyEdgeChanges(changes, edges))
      }
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
