import {ApiUrl} from "../components/PageAssets/ApiUrl"
import {headers} from '../auth/AuthFunctions'

export function fetchTopTracks(){
  return (dispatch) => {
    dispatch({type: "LOADING_TOP_TRACKS"})
    return fetch(`${ApiUrl}tracks/top`, {headers: headers()})
    .then(resp => resp.json())
    .then(json => dispatch({
      type:"FETCH_TOP_TRACKS",
      payload: {tracks: json}
      })
    )
  }
}

export function fetchRecentTracks(){
  return (dispatch) => {
    dispatch({type: "LOADING_RECENT_TRACKS"})
    return fetch(`${ApiUrl}tracks/recent`, {headers: headers()})
    .then(resp => resp.json())
    .then(json => dispatch({
      type:"FETCH_RECENT_TRACKS",
      payload: {tracks: json}
      })
    )
  }
}
