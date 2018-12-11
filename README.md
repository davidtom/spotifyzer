# Spotifyzer
* Analyze a Spotify user's library and listening habits
* ~View live site [here](https://spotifyzer-fe.herokuapp.com/) (please be patient while Heroku wakes up)~ down temporarily - please see demo below instead
* Relies on a Rails API back end ([repo](https://github.com/davidtom/spotifyzer-api))
* [Video demo](https://www.youtube.com/watch?v=6HGACQsPdjM&feature=youtu.be)

## Features
* Authorizes users through [Spotify's Web API Authorization](https://developer.spotify.com/web-api/authorization-guide/) to access a user's saved tracks
* Provides basic overview of saved library
* Users are able to view their top artists and top tracks (determined by Spotify's [affinity](https://developer.spotify.com/web-api/get-users-top-artists-and-tracks/) measure) over three time ranges: past 4 weeks, past 4 months, or past several years
* Utilizes d3.js to provide interactive visualizations for:
  * User's 50 most recently played tracks, grouped by hour in a bar chart
  * Genres of all saved artists, displayed in a bubble chart
* Embedded Spotify player allows users to listen to artists and tracks directly on the page
* Redux provides persistent state across all app pages

## Architecture
* This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)
* See ```src/components/PageAssets/ApiUrl``` to configure API URL
