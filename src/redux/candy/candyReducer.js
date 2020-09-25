import { BUY_CANDY } from "./candyTypes";

const initialState = {
  noOfCandy: 30,
};

const candyReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CANDY:
      return {
        ...state,
        noOfCandy: state.noOfCandy - 1,
      };
    default:
      return state;
  }
};

export default candyReducer;
