export default (state=
  {loading: false,
  loadingLibrary: false,
  tracks: null,
  artists: null,
  genres: null,
  lastUpdate: null
  }, action) => {
  switch(action.type){
    case ("LOADING_OVERVIEW"):
      return Object.assign({}, state, {loading: true})
    case ("OVERVIEW_LOADING_LIBRARY"):
      return Object.assign({}, state, {loadingLibrary: true})
    case ("FETCH_OVERVIEW"):
      return Object.assign({}, state, {loading: false,
                                        loadingLibrary: false,
                                        tracks: action.payload.tracks,
                                        artists: action.payload.artists,
                                        genres: action.payload.genres,
                                        lastUpdate: action.payload.lastUpdate
                                      })
    case ("UPDATE_LIBRARY"):
      return Object.assign({}, state, {tracks:null, artists: null, genres: null})
    default:
      return state
  }
}
