import React from "react"
import { Header, Image, Loader, Segment } from 'semantic-ui-react'

// NOTE: ALL OF THESE NEED TO UPDATED

const TextLoader = () => (
  <Loader active size='large' inline='centered'>Loading</Loader>
)

const ContentEndAlert = () => (
   <Segment color='red' textAlign='center'>No Additional Content to Load</Segment>
)

export {TextLoader}
export {ContentEndAlert}
