import React from "react"
import {Loader} from 'semantic-ui-react'

export const ContentLoader = ({status}) => (
  <Loader inverted size='large' active={status}>Loading</Loader>
)

export const LibraryLoader = ({status}) => (
  <Loader inverted indeterminate size='large' active={status}>
    Spotifyzer is loading your library. This could take a while...
  </Loader>
)
