import React from 'react';
import {Route} from "react-router-dom"
// import {bindActionCreators} from "redux"
// import {connect} from "react-redux"
import SiteNavBar from "../components/NavBars/SiteNavBar"
import DashboardPage from "./DashboardPage"



const loginPlaceholder = () => {return <h1>This page will ask you to log in or something</h1>}
// TODO: failure alert should be a status given on the main page, not its own page
const failureAlert = () => {return <h1>Error with login - please try again</h1>}


class App extends React.Component {

  render() {
    return (
      <div>
        <Route path="/" component={SiteNavBar} />
        <Route exact path="/login" component={loginPlaceholder} />
        <Route exact path="/login/failure" component={failureAlert} />
        <Route path="/dashboard" component={DashboardPage} />
      </div>
    );
  }
}

export default App;
// Will need this eventually: app will need access to store for user auth
// export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
