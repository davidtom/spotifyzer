import {ApiUrl} from "../components/PageAssets/ApiUrl"

function fetchTopTracks(){
  return (dispatch) => {
    dispatch({type: "LOADING_TOP_TRACKS"})
    return fetch(`${ApiUrl}tracks/top`)
    .then(resp => resp.json())
    .then(json => dispatch({
      type:"FETCH_TOP_TRACKS",
      payload: {tracks: json}
      })
    )
  }
}

export {fetchTopTracks}
