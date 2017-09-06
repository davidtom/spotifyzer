import {ApiUrl} from "../components/PageAssets/ApiUrl"

function fetchUser(code, redirectCallback){
  return (dispatch) => {
    dispatch({type: "LOADING_USER"})
    return fetch(`${ApiUrl}login_callback?code=${code}`)
    .then(resp => resp.json())
    .then(json => {
      localStorage.setItem("jwt", json.jwt);
      return dispatch({type:"FETCH_USER", payload: {user: json.user, auth: {isLoggedIn: true, error: null}}
      })}
    )
    .then(redirectCallback)
  }
}

// function selectGenre(data){
//   return {type: "SELECT_GENRE", payload: data}
// }

export {fetchUser}
// export {selectGenre}
