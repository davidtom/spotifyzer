export function selectItem(uri){
  console.log(uri)
    return {type: "SELECT_ITEM", payload: {uri}}
  }

export function toggleVisibility(){
    return {type: "TOGGLE_VISIBILITY"}
  }
