import {ApiUrl} from "../components/PageAssets/ApiUrl"
import {headers} from '../auth/AuthFunctions'

function fetchTopArtists(){
  return (dispatch) => {
    dispatch({type: "LOADING_TOP_ARTISTS"})
    return fetch(`${ApiUrl}artists/top`, {headers: headers()})
    .then(resp => resp.json())
    .then(json => dispatch({
      type:"FETCH_TOP_ARTISTS",
      payload: {artists: json}
      })
    )
  }
}

export {fetchTopArtists}
