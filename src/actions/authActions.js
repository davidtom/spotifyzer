import {ApiUrl} from "../components/PageAssets/ApiUrl"
import {headers} from '../auth/AuthFunctions'

export function fetchAuthorization(code){
  return (dispatch) => {
    // dispatch({type: "LOADING_AUTHORIZATION"})
    return fetch(`${ApiUrl}users?code=${code}`, {
      method: 'POST',
      headers: headers()
      })
    .then(resp => resp.json())
    .then(json => {
      // Save JWT token in local storage, then update store
      localStorage.setItem("jwt", json.jwt);
      return dispatch({type:"FETCH_AUTHORIZATION", payload: {user: json.user}
      })}
    )
  }
}

export function failAuthorization(){
  return {type: "FAIL_AUTHORIZATION"}
}

export function currentUser(){
  return (dispatch) => {
    // dispatch({type: "LOADING_AUTHORIZATION"})
    return fetch(`${ApiUrl}auth`, {headers: headers()})
    .then(resp => resp.json())
    .then(json => {
      if (!json.error){
        return dispatch({type:"FETCH_AUTHORIZATION", payload: {user: json}})
      }
    })
  }
}

export function logoutUser(){
  return {type: "LOGOUT_USER"}
}
