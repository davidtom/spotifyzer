import {ApiUrl} from "../components/PageAssets/ApiUrl"

function fetchGenres(){
  return (dispatch) => {
    dispatch({type: "LOADING_GENRES"})
    return fetch(`${ApiUrl}genres`)
    .then(resp => resp.json())
    .then(json => dispatch({
      type:"FETCH_GENRES",
      payload: {genres: json.artists_by_genre, artistsTotal: json.total_artists}
      })
    )
  }
}

function selectGenreArtists(artists){
  return {type: "SELECT_GENRE_ARTISTS", payload: artists}
}

export {fetchGenres}
export {selectGenreArtists}
