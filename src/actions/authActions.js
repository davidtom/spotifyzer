import {ApiUrl} from "../components/PageAssets/ApiUrl"
import {headers} from '../auth/AuthFunctions'

export function fetchAuthorization(code){
  return (dispatch) => {
    return fetch(`${ApiUrl}users?code=${code}`, {
      method: 'POST',
      headers: headers()
      })
    .then(resp => resp.json())
    .then(json => {
      // Save JWT token in local storage, then update auth in store
      localStorage.setItem("jwt", json.jwt);
      return dispatch({type:"UPDATE_AUTHORIZATION", payload: {user: json.user}
      })}
    )
  }
}

export function currentUser(){
  return (dispatch) => {
    return fetch(`${ApiUrl}auth`, {headers: headers()})
    .then(resp => resp.json())
    .then(json => {
      if (!json.error){
        return dispatch({type:"UPDATE_AUTHORIZATION", payload: {user: json}})
      }
    })
  }
}

export function logoutUser(){
  return {type: "LOGOUT_USER"}
}
