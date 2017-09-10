export default (state={
  loading: false,
  topTracks:[],
  recentTracks: []
  }, action) => {
  switch(action.type){
    case ("LOADING_TOP_TRACKS"):
      return Object.assign({}, state, {loading: true})
    case ("FETCH_TOP_TRACKS"):
      return Object.assign({}, state, {loading: false,
                                      topTracks: action.payload.tracks,
                                      })
    case ("LOADING_RECENT_TRACKS"):
      return Object.assign({}, state, {loading: true})
    case ("FETCH_RECENT_TRACKS"):
      console.log(action)
      return Object.assign({}, state, {loading: false,
                                      recentTracks: action.payload.tracks,
                                      })
    default:
      return state
  }
}
