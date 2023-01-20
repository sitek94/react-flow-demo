import {Handle, Position, useReactFlow, NodeProps} from 'reactflow'
import React from 'react'
import clsx from 'clsx'
import {TransactionData} from './utils'

export function TransactionNode({id, data}: NodeProps<TransactionData>) {
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

  const isIncome = data.type === 'income'
  const isExpense = data.type === 'expense'

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
