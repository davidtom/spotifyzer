import {ApiUrl} from "../components/PageAssets/ApiUrl"

function fetchGenres(){
  return (dispatch) => {
    dispatch({type: "LOADING_GENRES"})
    return fetch(`${ApiUrl}genres`)
    .then(resp => resp.json())
    .then(json => dispatch({
      type:"FETCH_GENRES",
      payload: {
        genres: json.artists_by_genre,
        total: json.artist_genres_total[0]["total"]}
      })
    )
  }
}

export {fetchGenres}
