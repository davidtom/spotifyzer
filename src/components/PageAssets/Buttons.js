import React from 'react'
import {ProfileImage} from './Images'
import { Button, Dropdown } from 'semantic-ui-react'

export const LoginButton = () => (
  <Button size="large" icon="spotify" content="Login with Spotify" color="green" as="a" href="http://localhost:3000/api/v1/login"  className="log-in-out"/>
)

export const LogoutButton = ({handleClick}) => (
  <Button size="large" content="Logout" color="green" onClick={handleClick} as="a" href="/" className="log-in-out"/>
)

// Define components for custom dropdown: trigger (profile image and text)
const trigger = (user) => {
  const img_url = user.profile_img_url || "http://i.imgur.com/6Onxeu9.png"
  return (
  <span className="profile-name">
    <ProfileImage url={img_url} /> {user.username}
  </span>
)}

const options = (user, handleClick) => [
  { key: 'account', text: 'Account', as: 'a', href:`${user.spotify_url}`, target: '_blank'},
  { key: 'logout', text: 'Logout', as: 'a', href: '/', onClick: handleClick}
]

export const ProfileDropdown = ({user, handleClick}) => (
  <Dropdown trigger={trigger(user)} options={options(user, handleClick)} icon={null}/>
)

export const DashboardButton = ({text, selected=false}) => {
  return <Button inverted size="huge" active={selected}>{text}</Button>
}
