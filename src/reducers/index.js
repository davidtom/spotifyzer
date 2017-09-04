import {combineReducers} from "redux";
import overviewReducer from "./overview_reducer"
import genresReducer from "./genres_reducer"

export default combineReducers({
  overview: overviewReducer,
  genres: genresReducer
});
