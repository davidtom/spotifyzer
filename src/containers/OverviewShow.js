import React from "react";
import {bindActionCreators} from "redux"
import { connect } from 'react-redux';
import {fetchOverview} from "../actions/overviewActions"
import {PageHeader} from '../components/PageAssets/Headers'
import OverviewChart from '../components/Overview/OverviewChart'
import {DimmerLoader} from '../components/PageAssets/Loaders'
import {Container, Divider} from 'semantic-ui-react'

class OverviewShow extends React.Component{

  componentDidMount(){
    // Only fetch data from API if data does not already exist in store
    if(!this.props.data.tracks){this.props.fetchOverview()}
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
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchOverview
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(OverviewShow)
