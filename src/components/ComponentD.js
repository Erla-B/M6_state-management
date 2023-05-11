import React, {useContext} from 'react'
import { CountContext } from '../App';

function ComponentD() {
  const countContext = useContext(CountContext)
  return (
    <div className='component'>
      <span className='component-name'>Component D </span>  <span className='count'>{countContext.countState}</span>
      <button className='button button-reset' onClick={() => countContext.countDispatch('reset')}>Reset</button>
      <button className='button button button-decrease' onClick={() => countContext.countDispatch('decrement')}>-</button>
      <button className='button button-increase' onClick={() => countContext.countDispatch('increment')}>+</button>
    </div>
  )
}

export default ComponentD