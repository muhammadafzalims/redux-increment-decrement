import { useState } from "react";
import { increment,decrement } from "./redux/action";
import { useSelector, useDispatch } from "react-redux";

export function Counter() {

    const counter=useSelector(state=>state.count)

    const dispatch=useDispatch();
    function dec(){
        dispatch(decrement())

    }

    function inc(){
        dispatch(increment());
    }

  return (
    <>
    <div className="Container text-center">
      <h2>Counter app</h2>
     
      <button onClick={dec}>-</button>
      <input type="text" value={counter}/>
      <button onClick={inc}>+</button>
    </div>
     
    </>
  );
}
