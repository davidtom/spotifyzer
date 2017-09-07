import React from 'react'
import { Message, Container, Divider } from 'semantic-ui-react'

export const WelcomeMessage = (props) => {

    return (
      <Container textAlign={"center"}>
        <Divider hidden/>
        <p>SUP</p>
      </Container>
    )
}

export const failedLoginMessage = () => (
  <Message negative>
    <Message.Header>'Log in failed'</Message.Header>
    <p>'Please try again.'</p>
  </Message>
)
