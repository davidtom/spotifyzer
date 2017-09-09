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
    if(!this.props.overview.tracks){this.props.fetchOverview()}
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
        <ContentLoader status={this.props.loading && !this.props.libraryLoading}/>
        <LibraryLoader status={this.props.libraryLoading}/>
        <OverviewChart data={this.props.overview}/>
        <Divider hidden />
        <LastLibraryUpdate date={this.props.overview.lastUpdate}
                            updateLibrary={this.updateLibrary}/>
        {this.state.redirect && <Redirect to={'/'}/>}
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.overview.loading,
    overview: state.overview,
    libraryLoading: state.overview.loadingLibrary
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchOverview,
    updateLibrary
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(OverviewShow)
