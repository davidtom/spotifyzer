import React from 'react'
import { Button } from 'semantic-ui-react'

export const LoginButton = () => (
  <Button size="large" icon="spotify" content="Login with Spotify" color="green" as="a" href="http://localhost:3000/api/v1/login" />
)

export const LogoutButton = ({handleClick}) => (
  <Button size="large" content="Logout" color="green" onClick={handleClick}/>
)

export const DashboardButton = ({text, selected=false}) => {

  return <Button inverted size="huge" active={selected}>{text}</Button>
}
