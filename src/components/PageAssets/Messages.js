import React from 'react'
import { PageHeader } from './Headers'
import { Segment } from 'semantic-ui-react'

export const WelcomeMessage = (props) => {

    return (
      <Segment inverted vertical clearing padded>
        <PageHeader title={"Select the buttons above to see information about your library"}/>
      </Segment>
    )
}
