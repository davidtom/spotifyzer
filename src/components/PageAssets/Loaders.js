import React from "react"
import {Dimmer, Loader} from 'semantic-ui-react'

// NOTE: ALL OF THESE NEED TO UPDATED

const DimmerLoader = () => (
  <Dimmer active>
    <Loader>Loading</Loader>
  </Dimmer>
)

export {DimmerLoader}
