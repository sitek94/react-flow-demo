import {Handle, Node, Position, useReactFlow} from 'reactflow'
import React from 'react'
import clsx from 'clsx'

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

  const isIncome = type === 'income'
  const isExpense = type === 'expense'

  return (
    <>
      <input
        className={clsx(
          'w-full text-right border-2 rounded-md shadow focus:outline-none',
          isIncome && 'text-green-500 bg-green-50 border-green-500',
          isExpense && 'text-red-500 bg-red-50 border-red-500',
        )}
        type="number"
        defaultValue={data.amount}
        onChange={onChange}
      />

      {isIncome && (
        <Handle
          type="source"
          position={Position.Bottom}
          className="invisible"
        />
      )}
      {isExpense && (
        <Handle type="target" position={Position.Top} className="invisible" />
      )}
    </>
  )
}
