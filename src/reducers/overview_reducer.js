export default (state=
  {loading: false,
  loadingLibrary: false,
  tracks: null,
  artists: null,
  genres: null
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
                                        genres: action.payload.genres
                                      })
    default:
      return state
  }
}
