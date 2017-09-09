export default (state={
  loading: false,
  loadingLibrary: false,
  genresList:[],
  artistsTotal: null,
  selection: {
    genre: null,
    artists: []
    }
  }, action) => {
  switch(action.type){
    case ("LOADING_GENRES"):
      return Object.assign({}, state, {loading: true})
    case ("GENRES_LOADING_LIBRARY"):
      return Object.assign({}, state, {loadingLibrary: true})
    case ("FETCH_GENRES"):
      return Object.assign({}, state, {loading: false,
                                      loadingLibrary: false,
                                      genresList: action.payload.genres,
                                      artistsTotal: action.payload.artistsTotal})
    case ("SELECT_GENRE"):
      return Object.assign({}, state, {selection: {genre: action.payload.name, artists: action.payload.artists}})
    case ("UPDATE_LIBRARY"):
      return Object.assign({}, state, {genresList: [], artistsTotal: null, selection: {genre: null, artists: []}})
    default:
      return state
  }
}
