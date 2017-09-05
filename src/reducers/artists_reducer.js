export default (state={
  loading: false,
  topArtists:[],
  }, action) => {
  switch(action.type){
    case ("LOADING_TOP_ARTISTS"):
      return Object.assign({}, state, {loading: true})
    case ("FETCH_TOP_ARTISTS"):
      return Object.assign({}, state, {loading: false,
                                      topArtists: action.payload.artists,
                                      })
    default:
      return state
  }
}
