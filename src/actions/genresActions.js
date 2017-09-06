import {ApiUrl} from "../components/PageAssets/ApiUrl"
import {headers} from '../auth/AuthFunctions'

export function fetchGenres(){
  return (dispatch) => {
    dispatch({type: "LOADING_GENRES"})
    return fetch(`${ApiUrl}genres`, {headers: headers()})
    .then(resp => resp.json())
    .then(json => dispatch({
      type:"FETCH_GENRES",
      payload: {genres: json.artists_by_genre, artistsTotal: json.total_artists}
      })
    )
  }
}

export function selectGenre(data){
  return {type: "SELECT_GENRE", payload: data}
}
