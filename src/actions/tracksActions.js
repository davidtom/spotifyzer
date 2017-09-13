import {ApiUrl} from "../components/PageAssets/ApiUrl"
import {headers} from '../auth/AuthFunctions'

export function fetchTopTracks(timeRange="medium_term"){
  return (dispatch) => {
    dispatch({type: "LOADING_TOP_TRACKS"})
    return fetch(`${ApiUrl}tracks/top?time_range=${timeRange}`, {headers: headers()})
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
      payload: {tracks: json.recent_tracks,
                analysis: json.time_analysis
                }
      })
    )
  }
}

export function updateTracksTopTimeRange(timeRange){
  return {type: "UPDATE_TRACKS_TOP_TIME_RANGE", payload: timeRange}
}

export function selectTime(data){
  return {type: "SELECT_TIME", payload: data}
}
