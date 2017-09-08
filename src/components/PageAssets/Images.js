import React from 'react'
import { Image } from 'semantic-ui-react'

export const SiteLogo = () => (
  <Image shape='rounded' height="70" width="70" verticalAlign="middle" spaced floated="left" src='./spotifyzer-logo.png'/>
)

export const ProfileImage = ({url}) => (
  <Image avatar src={url}/>
)
