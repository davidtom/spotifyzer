export default (state={
  selectedURI: null
  }, action) => {
  switch(action.type){
    case ("SELECT_ITEM"):
      return Object.assign({}, state, {selectedURI: action.payload.uri})
    default:
      return state
  }
}
