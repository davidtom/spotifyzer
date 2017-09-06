import {combineReducers} from "redux";
import overviewReducer from "./overview_reducer"
import genresReducer from "./genres_reducer"
import artistsReducer from "./artists_reducer"
import tracksReducer from "./tracks_reducer"
import userReducer from "./user_reducer"

export default combineReducers({
  overview: overviewReducer,
  genres: genresReducer,
  artists: artistsReducer,
  tracks: tracksReducer,
  user: userReducer
});
