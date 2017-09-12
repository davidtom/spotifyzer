export default (state={
  uri: null,
  visible: false
  }, action) => {
  switch(action.type){
    case ("SELECT_ITEM"):
      console.log("reducer: action", action)
      return Object.assign({}, state, {uri: action.payload.uri, visible: true})
    case ("TOGGLE_VISIBILITY"):
      return Object.assign({}, state, {visible: !state.visible})
    default:
      return state
  }
}
