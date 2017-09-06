import React from "react";
import { Route, Switch } from 'react-router-dom';
// import {bindActionCreators} from "redux"
// import { connect } from 'react-redux';
import DashboardNavBar from '../components/NavBars/DashboardNavBar'
import OverviewShow from "./OverviewShow"
import GenresShow from "./GenresShow"
import ArtistsShow from "./ArtistsShow"
import TracksShow from "./TracksShow"
import {Segment} from 'semantic-ui-react'

const DashboardPage = ({match}) => {

  return (
    <Segment className="site-component" textAlign="center">
      <DashboardNavBar mainUrl={match.url}/>
      <Switch>
      <Route exact path={match.url} component={OverviewShow}/>
      <Route path={`${match.url}/genres`} component={GenresShow} />
      <Route path={`${match.url}/artists`} component={ArtistsShow} />
      <Route path={`${match.url}/tracks`} component={TracksShow} />
      </Switch>
    </Segment>
  )
}

export default DashboardPage
