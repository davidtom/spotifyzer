import React from "react";
import { Route, Switch } from 'react-router-dom';
import {bindActionCreators} from "redux"
import { connect } from 'react-redux';
import AnalysisMenu from '../components/AnalysisMenu'
import GenresPage from "./GenresPage"
import {Segment} from 'semantic-ui-react'

const DashboardPage = ({match}) =>
  <Segment className="site-component" textAlign="center">
    <AnalysisMenu mainUrl={match.url}/>
    <Switch>
    <Route exact path={match.url} render={() => (
      <h3>This is where basic info and instructions will be?</h3>
    )}/>
    <Route path={`${match.url}/genres`} component={GenresPage} />
    </Switch>
  </Segment>;
;

export default DashboardPage
