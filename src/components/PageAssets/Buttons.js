import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const LoginButton = () => (
  <Button icon="spotify" content="Login with Spotify" color="green" as="a" href="http://localhost:3000/api/v1/login" size="large" />
)

export {LoginButton}
