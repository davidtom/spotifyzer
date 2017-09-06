import React from 'react'
import { Button } from 'semantic-ui-react'

const LoginButton = () => (
  <Button size="large" icon="spotify" content="Login with Spotify" color="green" as="a" href="http://localhost:3000/api/v1/login" />
)

const LogoutButton = ({handleClick}) => (
  <Button size="large" content="Logout" color="green" onClick={handleClick}/>
)

const DashboardButton = ({text, selected=false}) => {

  return <Button inverted size="huge" active={selected}>{text}</Button>
}

export {LoginButton}
export {LogoutButton}
export {DashboardButton}
