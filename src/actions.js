import ActionTypes from "./actionTypes";

const actions = {
  [ActionTypes.Increment]: context => {
    context.commit("increment");
  }
};

export default actions;
