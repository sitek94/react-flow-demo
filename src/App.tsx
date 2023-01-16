import ReactFlow, {Background, Controls} from 'reactflow'

function Flow() {
  return (
    <ReactFlow>
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
