import React from "react"
import { Header } from 'semantic-ui-react'

const SiteHeader = () => (
  <Header size="huge" as="a" href="/">Spotifyzer</Header>
)

const PageHeader = (props) => (
  <Header id="page-header">{props.title}</Header>
)

const SectionHeader = (props) => (
  <Header id="section-header" size="huge" block onClick={props.onClick}>{props.title}</Header>
)

export {SiteHeader}
export {PageHeader}
export {SectionHeader}
