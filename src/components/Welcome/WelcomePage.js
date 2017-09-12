import React from "react";
import { PageHeader, SectionHeader } from '../PageAssets/Headers'
import {Segment, Container} from 'semantic-ui-react'

class WelcomePage extends React.Component{

  render(){
    return(
      <Segment className="site-component" textAlign="center">

        <div id="welcome-background-container">
        
          <Container id="welcome-text" text textAlign="center">
            <PageHeader title={'Welcome to Spotifyzer!'}/>
            <p>Analyze your Spotify library to uncover your listening habits and favorite music.</p>
            <p>Get started by logging in with Spotify above.</p>
          </Container>

        </div>

      </Segment>
    )
  }
}

export default WelcomePage;
