export default (state=
  {loading: false,
  tracks: null,
  artists: null,
  genres: null
  }, action) => {
  switch(action.type){
    case ("LOADING_OVERVIEW"):
      return Object.assign({}, state, {loading: true})
    case ("FETCH_OVERVIEW"):
      return Object.assign({}, state, {loading: false,
                                        tracks: action.payload.tracks,
                                        artists: action.payload.artists,
                                        genres: action.payload.genres
                                      })
    default:
      return state
  }
}
