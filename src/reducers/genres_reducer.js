export default (state={
  loading: false,
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
    case ("FETCH_GENRES"):
      return Object.assign({}, state, {loading: false,
                                      genresList: action.payload.genres,
                                      artistsTotal: action.payload.artistsTotal})
    case ("SELECT_GENRE"):
      return Object.assign({}, state, {selection: {genre: action.payload.name, artists: action.payload.artists}})
    default:
      return state
  }
}
