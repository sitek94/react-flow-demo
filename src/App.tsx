import * as React from 'react'
import ReactFlow, {
  Controls,
  ControlButton,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
} from 'reactflow'
import type {Node, Edge} from 'reactflow'

function createNewNode() {
  return {
    // It's fine for demo purposes 🙈
    id: Math.random().toString() + Date.now().toString(),
    data: {label: 'New node'},
    position: {x: 100, y: 100},
  }
}

const initialNodes: Node[] = [
  {
    id: '1',
    data: {label: 'Hello'},
    position: {x: 100, y: 200},
    type: 'input',
  },
  {
    id: '2',
    data: {label: 'World'},
    position: {x: 100, y: 300},
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
      <Controls>
        <ControlButton onClick={() => setNodes([...nodes, createNewNode()])}>
          <span role="img" aria-label="add node">
            📦
          </span>
        </ControlButton>
      </Controls>
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
