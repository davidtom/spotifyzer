export default (state={
  loading: false,
  topArtists:[],
  topTimeRange: 'medium_term'
  }, action) => {
  switch(action.type){
    case ("LOADING_TOP_ARTISTS"):
      return Object.assign({}, state, {loading: true})
    case ("FETCH_TOP_ARTISTS"):
      return Object.assign({}, state, {loading: false,
                                      topArtists: action.payload.artists,
                                      })
    case ("UPDATE_ARTISTS_TOP_TIME_RANGE"):
      return Object.assign({}, state, {topTimeRange: action.payload})
    default:
      return state
  }
}
