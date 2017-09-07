import React from 'react';
import {Route} from "react-router-dom"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import SiteNavBar from "../components/NavBars/SiteNavBar"
import {currentUser} from "../actions/authActions"
import AuthSwitch from '../auth/AuthSwitch'
import DashboardPage from "./DashboardPage"
import {failedLoginMessage} from '../components/PageAssets/Messages'
import {Grid} from 'semantic-ui-react'

class App extends React.Component {

  componentWillMount(){
    if (localStorage.getItem('jwt')) {
      this.props.currentUser()
    }
  }

  render() {
    return (
      <Grid centered>

        <Grid.Row>
          <Grid.Column stretched>
            <Route path="/" component={SiteNavBar} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={15}>
            < failedLoginMessage />
            <Route exact path="/authorized" component={AuthSwitch} />
            <Route path="/" render={(props) => {
                return this.props.auth.isLoggedIn ? <DashboardPage {...props}/> : <loginPlaceholder/>
              }} />
          </Grid.Column>
        </Grid.Row>

      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    currentUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
