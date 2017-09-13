import {ApiUrl} from "../components/PageAssets/ApiUrl"
import {headers} from '../auth/AuthFunctions'

export function fetchTopArtists(timeRange="medium_term"){
  return (dispatch) => {
    dispatch({type: "LOADING_TOP_ARTISTS"})
    return fetch(`${ApiUrl}artists/top?time_range=${timeRange}`, {headers: headers()})
    .then(resp => resp.json())
    .then(json => dispatch({
      type:"FETCH_TOP_ARTISTS",
      payload: {artists: json}
      })
    )
  }
}

export function updateArtistsTopTimeRange(timeRange){
  return {type: "UPDATE_ARTISTS_TOP_TIME_RANGE", payload: timeRange}
}
