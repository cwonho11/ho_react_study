import './App.css';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type:"INCREMENT", payload:{ num: 5 } });
  }
  const decrement = () => {
    dispatch({ type: "DECREMENT", payload: { num: 3 } });
  }

  return (
    <div className='counter'>
      <h1>{count}</h1>
      <div className='btn-area'>
        <button onClick={increase}>증가!</button>
        <button onClick={decrement}>감소!!</button>
      </div>
      <Box />
    </div>
  );
}

export default App;
