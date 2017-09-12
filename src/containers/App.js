import React from 'react';
import {Redirect} from "react-router"
import {Route} from "react-router-dom"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import SiteNavBar from "../components/NavBars/SiteNavBar"
import {currentUser} from "../actions/authActions"
import AuthSwitch from '../auth/AuthSwitch'
import DashboardPage from "./DashboardPage"
import SpotifyPlayer from 'react-spotify-player';
import {Grid, Sidebar, Segment} from 'semantic-ui-react'

class App extends React.Component {

  componentWillMount(){
    if (localStorage.getItem('jwt')) {
      this.props.currentUser()
    }
  }

  render() {
    return (
      <Grid centered>

        <Grid.Row verticalAlign="middle" stretched>
          <Grid.Column stretched>
            <Route path="/" render={(props) => <SiteNavBar {...props}/>} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={15}>

            <Sidebar.Pushable as={"div"}>

              <Sidebar as={Segment} animation='push' direction='left' visible={this.props.player.visible} inverted>
                <SpotifyPlayer
                  uri={this.props.player.uri}
                  size={{width:'90%', height: "300"}}
                  view={'list'}
                  theme={'black'}
                  />
              </Sidebar>

              <Sidebar.Pusher as={"div"} className="pusher">

                <Route exact path="/authorized" component={AuthSwitch} />
                <Route path="/" render={(props) => {
                    return this.props.auth.isLoggedIn ? <DashboardPage {...props}/> : <Redirect to={'/'} />
                  }} />

              </Sidebar.Pusher>

            </Sidebar.Pushable>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    player: state.player
    }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    currentUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
