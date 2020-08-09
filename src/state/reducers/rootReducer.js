import { combineReducers } from "redux";
import emailsReducer from "./emailsReducer";

const rootReducer = combineReducers({
  emails: emailsReducer,
});

export default rootReducer;
