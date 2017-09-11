export default (state={
  loading: false,
  topTracks:[],
  recentTracks: [],
  timeSelection: {
    time: null,
    tracks: []
    }
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
      return Object.assign({}, state, {loading: false,
                                      recentTracks: action.payload.tracks,
                                      })
    case ("SELECT_TIME"):
      return Object.assign({}, state, {timeSelection: {time: action.payload.time, tracks: action.payload.tracks}})
    default:
      return state
  }
}
