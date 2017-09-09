import React from 'react'
import { PageHeader } from './Headers'
import { Segment, Message, Button, Icon } from 'semantic-ui-react'

export const WelcomeMessage = (props) => {
    return (
      <Segment inverted vertical clearing padded>
        <PageHeader title={"Select the buttons above to see information about your library"}/>
      </Segment>
    )
}

export const LastLibraryUpdate = ({date, updateLibrary}) => {
  return (
    <Segment className='library-update-message' compact inverted>
      <div>
      <Message compact color='black' size="small"
        header='Your library data was last updated on:'
        content={date}/>
      </div>
      <Button inverted animated size='small' onClick={updateLibrary}>
        <Button.Content visible>Update</Button.Content>
        <Button.Content hidden><Icon inverted color='green' name='repeat' /></Button.Content>
      </Button>
    </Segment>
  )
}
