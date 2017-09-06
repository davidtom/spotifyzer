import React from "react"
import {Loader} from 'semantic-ui-react'

export const DimmerLoader = ({status}) => (
  <Loader active={status}>Loading</Loader>
)
