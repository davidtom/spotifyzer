import {ApiUrl} from "../components/PageAssets/ApiUrl"
import {headers} from '../auth/AuthFunctions'

export function fetchOverview(){
  return (dispatch) => {
    dispatch({type: "LOADING_OVERVIEW"})
    return fetch(`${ApiUrl}library`, {headers: headers()})
    .then(resp => resp.json())
    .then(json => {
      // if api responds with a saving_library: true, data is being saved
      // update state to reflect that; if not, it has sent back data to save
      if (json.loading_library){
        return dispatch({type: "OVERVIEW_LOADING_LIBRARY"})
      } else {
        return dispatch({
        type:"FETCH_OVERVIEW",
        payload: {tracks: json.tracks,
                  artists: json.artists,
                  genres: json.genres}
        })
      }
    })
  }
}
