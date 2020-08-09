const { FETCH_EMAILS } = require("../types");

const emailsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_EMAILS:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

export default emailsReducer;
