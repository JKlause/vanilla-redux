import React from 'react';
import { useStoreState, useDispatch } from '../store';
import Article from './Article';

export default function App() {
  const state = useStoreState();
  const dispatch = useDispatch();

  return (
    <>
      <input type="number" value={state.count} onChange={({ target }) => dispatch({ type: 'set', payload: +target.value })}/>
      <button onClick={() => dispatch({ type: 'decrement' })}>- {state.count}</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+ {state.count}</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>

      <Article />
    </>
  );
}
