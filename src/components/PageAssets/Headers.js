import React from "react"
import { Header } from 'semantic-ui-react'

export const SiteHeader = () => (
  <Header id="site-header" size="huge">Spotifyzer</Header>
)

export const SectionHeader = (props) => (
  <Header size="large">{props.title}</Header>
)

export const PageHeader = (props) => (
  <Header size="huge">{props.title}</Header>
)

export const ArtistHeader = (props) => (
  <Header size="large">{props.name}</Header>
)

export const TrackHeader = (props) => (
  <div>
  <Header size="large">{props.name}</Header>
  <Header size="medium">{props.artists}</Header>
  </div>
)

export const PositionHeader = (props) => (
  <Header size="large">{props.position}</Header>
)
