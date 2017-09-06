import React from 'react';
import {Route} from "react-router-dom"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import SiteNavBar from "../components/NavBars/SiteNavBar"
import {currentUser} from "../actions/authActions"
import AuthSwitch from '../auth/AuthSwitch'
import withAuthorization from '../auth/AuthHOC'
import DashboardPage from "./DashboardPage"
import {Grid} from 'semantic-ui-react'



const loginPlaceholder = () => {return <h1>This page will ask you to log in or something</h1>}
// TODO: failure alert should be a status given on the main page, not its own page
const failureAlert = () => {return <h1>Error with login - please try again</h1>}


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
            <Route exact path="/login" component={loginPlaceholder} />
            <Route exact path="/authorized" component={AuthSwitch} />
            <Route exact path="/login/failure" component={failureAlert} />
            <Route path="/dashboard" component={DashboardPage} />
          </Grid.Column>
        </Grid.Row>

      </Grid>
    );
  }
}

// <Route path ='/dashboard' render={(props)=>(
//     withAuthorization(DashboardPage, props)
//   )} />


// <Route path="/dashboard" component={DashboardPage} />


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
