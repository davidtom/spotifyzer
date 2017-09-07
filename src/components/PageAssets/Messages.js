import React from 'react'
import { Message } from 'semantic-ui-react'

export const failedLoginMessage = () => (
  <Message negative>
    <Message.Header>'Log in failed'</Message.Header>
    <p>'Please try again.'</p>
  </Message>
)
