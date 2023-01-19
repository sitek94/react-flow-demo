import React, {memo} from 'react'
import {Handle, HandleType, Position} from 'reactflow'

export const BudgetNode = memo(props => {
  console.log(props)
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div>Budget</div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  )
})
