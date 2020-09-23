import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of Ice Cream - {props.noOfIceCream}</h2>
      <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  );
}

const mapStateToProp = (state) => {
  return {
    noOfIceCream: state.iceCream.noOfIceCream,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProp, mapDispatchToProp)(IceCreamContainer);
