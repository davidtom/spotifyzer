import {combineReducers} from "redux";
import genresReducer from "./genres_reducer"

export default combineReducers({
  genres: genresReducer
});
