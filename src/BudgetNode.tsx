import {Handle, Position, useNodes} from 'reactflow'
import {isTransactionNode} from './TransactionNode'
import {NodeType} from './initialElements'

export function BudgetNode() {
  const nodes = useNodes<NodeType>()

  const budget = nodes.reduce((acc, node) => {
    if (isTransactionNode(node)) {
      acc += node.data.amount
    }
    return acc
  }, 0)

  return (
    <div className="p-1 w-[100px] text-right border-2 rounded-md shadow text-gray-500 bg-gray-50 border-gray-500">
      <Handle type="source" position={Position.Bottom} className="invisible" />
      <div>{budget}</div>
      <Handle type="target" position={Position.Top} className="invisible" />
    </div>
  )
}
