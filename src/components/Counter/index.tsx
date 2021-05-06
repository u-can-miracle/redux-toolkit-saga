import { useAppDispatch, useAppSelector } from 'hooks'
import { incrementAsync, decrementAsync } from 'redux/counter'
import { counterSelector } from 'redux/counter/selectors'

function Counter() {
  const count = useAppSelector(counterSelector)
  const dispatch = useAppDispatch()

  return (
    <div>
      <button
        onClick={() => dispatch(incrementAsync())}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrementAsync())}
      >
        Decrement
      </button>
      <div>Value: {count}</div>
    </div>
  )
}

export default Counter
