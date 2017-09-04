import React from "react"
import { Header } from 'semantic-ui-react'

const SiteHeader = () => (
  <Header id="site-header" size="huge" as="a" href="/">Spotifyzer</Header>
)

const PageHeader = (props) => (
  <Header id="page-header" size="huge">{props.title}</Header>
)

const SectionHeader = (props) => (
  <Header class="section-header" size="large">{props.title}</Header>
)

const ArtistHeader = (props) => (
  <Header size="large">{props.name}</Header>
)


export {SiteHeader}
export {PageHeader}
export {SectionHeader}
export {ArtistHeader}
