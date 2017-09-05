import React from "react"
import {Loader} from 'semantic-ui-react'

// NOTE: ALL OF THESE NEED TO UPDATED

const DimmerLoader = ({status}) => (
  <Loader active={status}>Loading</Loader>
)

export {DimmerLoader}
