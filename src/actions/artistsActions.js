import {ApiUrl} from "../components/PageAssets/ApiUrl"

function fetchTopArtists(){
  return (dispatch) => {
    dispatch({type: "LOADING_TOP_ARTISTS"})
    return fetch(`${ApiUrl}artists/top`)
    .then(resp => resp.json())
    .then(json => dispatch({
      type:"FETCH_TOP_ARTISTS",
      payload: {artists: json}
      })
    )
  }
}

export {fetchTopArtists}
