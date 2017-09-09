import {ApiUrl} from "../components/PageAssets/ApiUrl"
import {headers} from '../auth/AuthFunctions'

export function fetchGenres(){
  return (dispatch) => {
    dispatch({type: "LOADING_GENRES"})
    return fetch(`${ApiUrl}genres`, {headers: headers()})
    .then(resp => resp.json())
    .then(json => {
      // if api responds with a full_library: false, data is being saved
      // update state to reflect that; if not, it has sent back data to save
      if (json.loading_library){
        return dispatch({type: "GENRES_LOADING_LIBRARY"})
      } else {
        return dispatch({
          type:"FETCH_GENRES",
          payload: {genres: json.artists_by_genre, artistsTotal: json.total_artists}
        })
      }
    })
  }
}

export function selectGenre(data){
  return {type: "SELECT_GENRE", payload: data}
}

export function genreUpdateLibrary(){
  return {type: "GENRE_UPDATE_LIBRARY"}
}
