import React from "react";
import {bindActionCreators} from "redux"
import { connect } from 'react-redux';
import {fetchGenres} from "../actions/genresActions"
import {PageHeader} from '../components/PageAssets/Headers'
import {DimmerLoader} from '../components/PageAssets/Loaders'
import {GenresChart} from '../components/GenresChart'
import {Segment} from 'semantic-ui-react'

class GenresPage extends React.Component{

  componentDidMount(){
    // Only fetch data from API if data does not already exist in store
    !this.props.data.genresList.length ? this.props.fetchGenres() : null
  }

  displayLoading(){
    return this.props.loading && <DimmerLoader/>
  }

  render(){
    return (
      <Segment basic>
        <PageHeader title={"Genres"}/>
        {this.displayLoading()}
        <GenresChart data={this.props.data}/>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.genres.loading,
    data: {
      genresList: state.genres.genresList,
      genresTotal: state.genres.genresTotal
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchGenres
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(GenresPage)
