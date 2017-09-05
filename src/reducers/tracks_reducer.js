export default (state={
  loading: false,
  topTracks:[],
  }, action) => {
  switch(action.type){
    case ("LOADING_TOP_TRACKS"):
      return Object.assign({}, state, {loading: true})
    case ("FETCH_TOP_TRACKS"):
      return Object.assign({}, state, {loading: false,
                                      topTracks: action.payload.tracks,
                                      })
    default:
      return state
  }
}
