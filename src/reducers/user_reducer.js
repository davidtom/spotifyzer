export default (state={
  loading: false,
  user: {
    username: null,
    spotify_url: null},
  auth: {
    isLoggedIn: false,
    error: null}
  }, action) => {
  switch(action.type){
    case ("LOADING_USER"):
      return Object.assign({}, state, {loading: true})
    case ("FETCH_USER"):
      return Object.assign({}, state, {loading: false,
                                      user: action.payload.user,
                                      auth: action.payload.auth})
    case ("SELECT_GENRE"):
      return Object.assign({}, state, {selection: {genre: action.payload.name, artists: action.payload.artists}})
    default:
      return state
  }
}
