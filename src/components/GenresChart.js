import React from 'react';
import appendChart from './CreateGenreChart'

// TODO:
// BIG ONE: find a better way to display genres!! Bubble chart tutorial on Medium might be good
// Clean up folders and file names - all, but especially this file and CreateGenreChart
// Donut chart appending is super weird - fix this; ideally allowing clicking on genres button to re-render chart
// Clean up JSON data from api: don't need total count
// Continue developing donut chart from tutorial
// Stretch: add animation to donut chart creation

class GenresChart extends React.Component{

  componentWillReceiveProps(nextProps){
    if (nextProps.data.genresList.length){
      appendChart(nextProps.data)
    }
  }

  render(){
    return(
      <div id='data-container'>

      </div>
    )
  }
}

export {GenresChart}
