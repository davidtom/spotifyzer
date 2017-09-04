import {ApiUrl} from "../components/PageAssets/ApiUrl"

function fetchOverview(){
  return (dispatch) => {
    dispatch({type: "LOADING_OVERVIEW"})
    return fetch(`${ApiUrl}library`)
    .then(resp => resp.json())
    .then(json => dispatch({
      type:"FETCH_OVERVIEW",
      payload: {tracks: json.tracks,
                artists: json.artists,
                genres: json.genres
                }
      })
    )
  }
}

export {fetchOverview}