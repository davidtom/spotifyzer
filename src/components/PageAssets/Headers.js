import React from "react"
import { Header } from 'semantic-ui-react'

const SiteHeader = () => (
  <Header size="huge" as="a" href="/">Spotifyzer</Header>
)

const PageHeader = (props) => (
  <Header id="page-header" size="huge">{props.title}</Header>
)


export {SiteHeader}
export {PageHeader}
