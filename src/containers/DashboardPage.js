import React from "react";
import { Route, Switch } from 'react-router-dom';
// import {bindActionCreators} from "redux"
// import { connect } from 'react-redux';
import DashboardNavBar from '../components/NavBars/DashboardNavBar'
import OverviewShow from "./OverviewShow"
import GenresShow from "./GenresShow"
import {Segment} from 'semantic-ui-react'

const DashboardPage = ({match}) =>
  <Segment className="site-component" textAlign="center">
    <DashboardNavBar mainUrl={match.url}/>
    <Switch>
    <Route exact path={match.url} component={OverviewShow}/>
    <Route path={`${match.url}/genres`} component={GenresShow} />
    </Switch>
  </Segment>;
;

export default DashboardPage
