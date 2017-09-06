import React from "react";
import {bindActionCreators} from "redux"
import { connect } from 'react-redux';
import {fetchOverview} from "../actions/overviewActions"
import OverviewChart from '../components/Overview/OverviewChart'
import {DimmerLoader} from '../components/PageAssets/Loaders'
import {Container, Divider} from 'semantic-ui-react'

class OverviewShow extends React.Component{

  componentWillReceiveProps(nextProps){
    // wait for authorization to complete (and jwt token to be saved) before
    // fetching data
    // NOTE: should I use this same paradigm for other pages?
    if (!this.props.auth.isLoggedIn && nextProps.auth.isLoggedIn){
      this.props.fetchOverview()
    }
  }

  render(){
    return (
      <Container textAlign={"center"}>
        <Divider hidden/>
        <DimmerLoader status={this.props.loading}/>
        <OverviewChart data={this.props.data}/>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.overview.loading,
    data: {
      tracks: state.overview.tracks,
      artists: state.overview.artists,
      genres: state.overview.genres
    },
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchOverview
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(OverviewShow)
