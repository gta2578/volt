import { SET_FILTER } from "../actionTypes";
import { TODO_FILTERS } from "../../constants";

const initialState = TODO_FILTERS.ALL;

const todoFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default todoFilter;