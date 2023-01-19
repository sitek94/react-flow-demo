import * as React from 'react'
import ReactFlow, {
  Controls,
  ControlButton,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
} from 'reactflow'
import type {Node, Edge} from 'reactflow'

type ValueNode = Node<{value: number; label: string}>

const getDefaultProps = () => ({
  id: getId(),
  position: {x: 100, y: 100},
})

// It's fine for demo purposes 🙈
const getId = () => Math.random().toString() + Date.now().toString()

const createExpenseNode = ({
  value,
  position,
}: {value: number} & Pick<Node, 'position'>): ValueNode => ({
  ...getDefaultProps(),
  data: {value, label: `- $${Math.abs(value)}`},
  position,
  style: {
    // Red colors
    background: '#f44336',
    color: '#fff',
    border: '1px solid #f44336',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    fontFamily: 'sans-serif',
    width: '95px',
  },
})

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
  createExpenseNode({value: -100, position: {x: 300, y: 400}}),
  createExpenseNode({value: -200, position: {x: 400, y: 400}}),
  createExpenseNode({value: -200, position: {x: 200, y: 400}}),
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
        <ControlButton
          onClick={() =>
            setNodes([
              ...nodes,
              createExpenseNode({
                value: 100,
                position: {x: 300, y: 300},
              }),
            ])
          }
        >
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
