import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCandy } from "../redux";

function HooksCandyContainer() {
  const noOfCandy = useSelector((state) => state.candy.noOfCandy);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Candy - {noOfCandy}</h2>
      <button onClick={() => dispatch(buyCandy())}>Buy Cake</button>
    </div>
  );
}

export default HooksCandyContainer;
