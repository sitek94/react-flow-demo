import type {Node} from 'reactflow'
import {Panel} from 'reactflow'
import {createExpenseNode, createIncomeNode} from './utils'

export function AddTransactionsPanel({
  addNode,
}: {
  addNode: (node: Node) => void
}) {
  return (
    <Panel position="top-left" className="flex gap-2">
      <button
        className="p-2 bg-green-500 text-white rounded shadow"
        onClick={() => addNode(createIncomeNode())}
      >
        Add Income
      </button>
      <button
        className="p-2 bg-red-500 text-white rounded shadow"
        onClick={() => addNode(createExpenseNode())}
      >
        Add Expense
      </button>
    </Panel>
  )
}
