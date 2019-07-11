import { combineReducers } from "redux";
import generalReducer, { IGeneralState } from "./generalReducer";

export interface IStore {
  storeState: IGeneralState;
}

export default combineReducers({
  storeState: generalReducer
});
