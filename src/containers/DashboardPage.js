import React from "react";
import { Route, Switch } from 'react-router-dom';
import DashboardNavBar from '../components/NavBars/DashboardNavBar'
import OverviewShow from "./OverviewShow"
import GenresShow from "./GenresShow"
import ArtistsShow from "./ArtistsShow"
import TracksShow from "./TracksShow"
import {Segment} from 'semantic-ui-react'
import {WelcomeMessage} from '../components/PageAssets/Messages'

const DashboardPage = ({match}) => {
  return (
    <Segment className="site-component" textAlign="center">
      <DashboardNavBar mainUrl={match.url}/>
      <Switch>
      <Route path={`${match.url}/`} component={WelcomeMessage}/>
      <Route path={`${match.url}overview`} component={OverviewShow}/>
      <Route path={`${match.url}genres`} component={GenresShow} />
      <Route path={`${match.url}artists`} component={ArtistsShow} />
      <Route path={`${match.url}tracks`} component={TracksShow} />
      </Switch>
    </Segment>
  )
}

export default DashboardPage
