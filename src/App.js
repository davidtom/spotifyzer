import React from 'react';
import {Route} from "react-router-dom"
import { Redirect } from 'react-router'
// import {bindActionCreators} from "redux"
// import {connect} from "react-redux"
import {Button} from "semantic-ui-react"




const button = () => { return <Button as="a" href="http://localhost:3000/api/v1/login">Log in</Button>}
const alert = () => {return <h1>Log In Successful!</h1>}
const failureAlert = () => {return <h1>Error with login - please try again</h1>}


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Route exact path="/login" component={button} />
        <Route exact path="/login/failure" component={failureAlert} />
        <Route exact path="/success" component={alert} />
      </div>
    );
  }
}

export default App;
// export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
