import React from "react"
import { Header } from 'semantic-ui-react'

export const SiteHeader = () => (
  <Header id="site-header" size="huge" as="a" href="/">Spotifyzer</Header>
)

export const PageHeader = (props) => (
  <Header id="page-header" size="huge">{props.title}</Header>
)

export const SectionHeader = (props) => (
  <Header className="section-header" size="large">{props.title}</Header>
)

export const ArtistHeader = (props) => (
  <Header size="large">{props.name}</Header>
)

export const TrackHeader = (props) => (
  <div>
  <Header size="large">{props.name}</Header>
  <Header size="medium">{props.artists} - {props.album}</Header>
  </div>
)

export const PositionHeader = (props) => (
  <Header size="large">{props.position}</Header>
)
