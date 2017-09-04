export default (state={loading: false, genresList:[], artistsTotal: null}, action) => {
  switch(action.type){
    case ("LOADING_GENRES"):
      return Object.assign({}, state, {loading: true})
    case ("FETCH_GENRES"):
      return Object.assign({}, state, {loading: false,
                                      genresList: action.payload.genres,
                                      artistsTotal: action.payload.artistsTotal})
    default:
      return state
  }
}
