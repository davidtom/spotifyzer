export default (state={loading: false, genresList:[], genresTotal: null}, action) => {
  switch(action.type){
    case ("LOADING_GENRES"):
      return Object.assign({}, state, {loading: true})
    case ("FETCH_GENRES"):
      return Object.assign({}, state, {loading: false,
                                      genresList: action.payload.genres,
                                      genresTotal: action.payload.total})
    default:
      return state
  }
}
