import {combineReducers} from "redux";
import overviewReducer from "./overview_reducer"
import genresReducer from "./genres_reducer"
import artistsReducer from "./artists_reducer"
import tracksReducer from "./tracks_reducer"
import authReducer from "./auth_reducer"
import playerReducer from "./player_reducer"

export default combineReducers({
  overview: overviewReducer,
  genres: genresReducer,
  artists: artistsReducer,
  tracks: tracksReducer,
  auth: authReducer,
  player: playerReducer
});
