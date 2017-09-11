import React from "react";
import { Route, Switch } from 'react-router-dom';
import DashboardNavBar from '../components/NavBars/DashboardNavBar'
import OverviewShow from "./OverviewShow"
import GenresShow from "./GenresShow"
import ArtistsShow from "./ArtistsShow"
import TracksShow from "./TracksShow"
import RecentShow from "./RecentShow"
import {WelcomeMessage} from '../components/PageAssets/Messages'
import SpotifyPlayer from 'react-spotify-player';
import {Segment, Button, Sidebar} from 'semantic-ui-react'

class DashboardPage extends React.Component {

  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render(){
    const match = this.props.match
    return (
      <Segment className="site-component" textAlign="center">
        <DashboardNavBar mainUrl={match.url}/>
        <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Segment} animation='push' direction='bottom' visible={this.state.visible} inverted>
            <SpotifyPlayer
              uri="spotify:artist:5INjqkS1o8h1imAzPqGZBb"
              size={{width:'90%', height: 300}}
              view={'list'}
              theme={'black'}
              />
        </Sidebar>
        <Sidebar.Pusher as={"div"} className="pusher">
        <Switch>
          <Route path={`${match.url}/`} component={WelcomeMessage}/>
          <Route path={`${match.url}overview`} component={OverviewShow}/>
          <Route path={`${match.url}genres`} component={GenresShow} />
          <Route path={`${match.url}artists`} component={ArtistsShow} />
          <Route path={`${match.url}tracks`} component={TracksShow} />
          <Route path={`${match.url}recent`} component={RecentShow} />
        </Switch>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      </Segment>
    )
  }
}

export default DashboardPage
