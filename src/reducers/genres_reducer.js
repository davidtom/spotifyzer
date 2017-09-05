export default (state={loading: false, genresList:[], artistsTotal: null, selectedArtists: []}, action) => {
  switch(action.type){
    case ("LOADING_GENRES"):
      return Object.assign({}, state, {loading: true})
    case ("FETCH_GENRES"):
      return Object.assign({}, state, {loading: false,
                                      genresList: action.payload.genres,
                                      artistsTotal: action.payload.artistsTotal})
    case ("SELECT_GENRE_ARTISTS"):
      return Object.assign({}, state, {selectedArtists: action.payload})
    default:
      return state
  }
}
