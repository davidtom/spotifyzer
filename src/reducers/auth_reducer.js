export default (state={
  isLoggedIn: false,
  user: {
    username: null,
    spotify_url: null,
    profile_img_url: null},
  error: false,
  }, action) => {
  switch(action.type){
    case ("UPDATE_AUTHORIZATION"):
      return Object.assign({}, state, {
                                      user: action.payload.user,
                                      isLoggedIn: true})
    case ("LOGOUT_USER"):
      localStorage.removeItem("jwt")
      return Object.assign({}, state, {isLoggedIn: false, user:{username: null, spotify_url: null, profile_img_url: null}})
    default:
      return state
  }
}
