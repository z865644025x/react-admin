import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { iRootState, Dispatch } from '../../store'
import { Button } from 'antd'

export const TodoListForRedux = () => {
  const dolphins = useSelector((state: iRootState) => state.dolphins)
  const sharks = useSelector((state: iRootState) => state.sharks)
  const dispatch = useDispatch<Dispatch>()

  const IDolphins: any = dispatch.dolphins;
  const ISharks: any = dispatch.sharks;

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ width: 220 }}>
        <h3>Dolphins</h3>
        <h1>{dolphins}</h1>
        <Button onClick={() => IDolphins.increment}>+1</Button>
        <Button onClick={() => IDolphins.incrementAsync}>Async +1</Button>
      </div>
      <div style={{ width: 300 }}>
        <h3>Sharks</h3>
        <h1>{sharks}</h1>
        <Button onClick={() => ISharks.increment(1)}>+1</Button>
        <Button onClick={() => ISharks.incrementAsync(1)}>
          Async +1
				</Button>
        <Button
          onClick={() =>
            dispatch({ type: 'sharks/incrementAsync', payload: 2 })
          }
        >
          Async +2
				</Button>
      </div>
      <p>Using Rematch Models</p>
    </div>
  )
}

