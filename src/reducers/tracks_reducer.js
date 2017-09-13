export default (state={
  loading: false,
  topTracks:[],
  topTimeRange: 'medium_term',
  recentTracks: [],
  recentTrackAnalysis: {
    hours: null,
    minutes: null,
    perHour: null
  },
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
    case ("UPDATE_TRACKS_TOP_TIME_RANGE"):
      return Object.assign({}, state, {topTimeRange: action.payload})
    case ("LOADING_RECENT_TRACKS"):
      return Object.assign({}, state, {loading: true})
    case ("FETCH_RECENT_TRACKS"):
      return Object.assign({}, state, {loading: false,
                                      recentTracks: action.payload.tracks,
                                      recentTrackAnalysis: {
                                        hours: action.payload.analysis.hours,
                                        minutes: action.payload.analysis.minutes,
                                        perHour: action.payload.analysis.per_hour
                                      }
                                      })
    case ("SELECT_TIME"):
      return Object.assign({}, state, {timeSelection: {time: action.payload.time, tracks: action.payload.tracks}})
    default:
      return state
  }
}
