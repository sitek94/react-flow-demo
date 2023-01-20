import {Handle, Position, useNodes} from 'reactflow'
import React from 'react'
import {isTransactionNode} from './TransactionNode'

export function BudgetNode() {
  const nodes = useNodes()

  const budget = nodes.reduce((acc, node) => {
    if (isTransactionNode(node)) {
      acc += node.data.amount
    }
    return acc
  }, 0)

  return (
    <div
      style={{
        textAlign: 'right',
        width: 150,
        height: 20,
        padding: 10,
        border: '1px solid #aaa',
      }}
    >
      <Handle type="source" position={Position.Bottom} />
      <div>{budget}</div>
      <Handle type="target" position={Position.Top} />
    </div>
  )
}
