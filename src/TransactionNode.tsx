import {Handle, Node, Position, useReactFlow} from 'reactflow'
import React from 'react'

export interface TransactionNodeProps extends Node {
  type: 'income' | 'expense'
  data: {
    amount: number
  }
}

export const isTransactionNode = (node: Node): node is TransactionNodeProps =>
  node.type === 'income' || node.type === 'expense'
export function TransactionNode({id, type, data}: TransactionNodeProps) {
  const {setNodes} = useReactFlow()

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNodes(nodes =>
      nodes.map(node => {
        if (node.id === id) {
          node.data.amount = Number(event.target.value)
        }

        return node
      }),
    )
  }

  return (
    <div
      style={{
        textAlign: 'right',
        width: 150,
        height: 20,
        padding: 10,
        border: '1px solid #aaa',
        display: 'flex',
        gap: 2,
      }}
    >
      <input type="number" defaultValue={data.amount} onChange={onChange} />

      {type === 'income' && <Handle type="source" position={Position.Bottom} />}
      {type === 'expense' && <Handle type="target" position={Position.Top} />}
    </div>
  )
}
