export default (state={
  loading: false,
  isLoggedIn: false,
  user: {
    username: null,
    spotify_url: null},
  error: false,
  }, action) => {
  switch(action.type){
    case ("LOADING_AUTHORIZATION"):
      return Object.assign({}, state, {loading: true})
    case ("FETCH_AUTHORIZATION"):
      return Object.assign({}, state, {loading: false,
                                      user: action.payload.user,
                                      isLoggedIn: true})
    case ("FAIL_AUTHORIZATION"):
      return Object.assign({}, state, {error: true})
    case ("LOGOUT_USER"):
      localStorage.removeItem("jwt")
      return Object.assign({}, state, {isLoggedIn: false, user:{username: null, spotify_url: null}})
    default:
      return state
  }
}
