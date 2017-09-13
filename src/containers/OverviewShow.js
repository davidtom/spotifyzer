import React from "react";
import { Redirect } from 'react-router-dom';
import {bindActionCreators} from "redux"
import { connect } from 'react-redux';
import {fetchOverview, updateLibrary} from "../actions/overviewActions"
import OverviewChart from '../components/Overview/OverviewChart'
import {ContentLoader, LibraryLoader} from '../components/PageAssets/Loaders'
import {LastLibraryUpdate} from '../components/PageAssets/Messages'
import {Container, Divider} from 'semantic-ui-react'

class OverviewShow extends React.Component{
  constructor(){
    super()

    this.state = {
      redirect: false
    }
  }

  componentDidMount(){
    // Only fetch data from API if data does not already exist in store
    if(!this.props.tracks){this.props.fetchOverview()}
  }

  componentWillReceiveProps(nextProps){
    //If next props don't include track data, set a polling interval
    if (nextProps.loadingLibrary){
      clearInterval(window.fetchOverviewInterval)
      window.fetchOverviewInterval = setInterval(this.props.fetchOverview, 5000)
    } else {
      clearInterval(window.fetchOverviewInterval)
    }
  }

  componentWillUnmount(){
    // on dismount, clear the interval so its not running in the background
    clearInterval(window.fetchOverviewInterval)
  }

  updateLibrary = () => {
    const prompt = "Are you sure you want to update your library?"
    if (window.confirm(prompt)){
      // Clear overview and genre state, redirect to "/" to allow remount and
      // therefore another fetch that will update state to loading
      this.props.updateLibrary()
      this.setState({redirect: true})

    }
  }

  render(){
    return (
      <Container textAlign={"center"}>
        <Divider hidden/>
        <ContentLoader status={this.props.loading && !this.props.loadingLibrary}/>
        <LibraryLoader status={this.props.loadingLibrary}/>
        <OverviewChart data={{tracks: this.props.tracks,
                              artists: this.props.artists,
                              genres: this.props.genres}}/>
        <Divider hidden />

        {!this.props.loadingLibrary && <LastLibraryUpdate date={this.props.lastUpdate}
                            updateLibrary={this.updateLibrary}/>}

        {/*Redirect user to main page to force refresh if/when they update library*/}
        {this.state.redirect && <Redirect to={'/'}/>}
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.overview.loading,
    loadingLibrary: state.overview.loadingLibrary,
    tracks: state.overview.tracks,
    artists: state.overview.artists,
    genres: state.overview.genres,
    lastUpdate: state.overview.lastUpdate
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchOverview,
    updateLibrary
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(OverviewShow)
