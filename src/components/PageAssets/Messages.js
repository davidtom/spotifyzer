import React from 'react'
import { SectionHeader, ArtistHeader } from './Headers'
import { Segment, Message, Button, Icon } from 'semantic-ui-react'

export const WelcomeMessage = (props) => {
    return (
      <Segment inverted vertical clearing padded>
        <SectionHeader title={"Select the buttons above to see information about your library."}/>
      </Segment>
    )
}

export const EmptySelectionInstruction = ({message}) => (
  <Segment inverted vertical clearing padded>
    <ArtistHeader name={message}/>
  </Segment>
)

export const EmptyPlayerInstruction = () => (
  <Segment inverted textAlign="center">
    <h2>Click an artist or track image to play it on Spotify!</h2>
  </Segment>
)

export const PageToolTip = ({message}) => (
  <Segment className="tooltip" secondary inverted textAlign="center">
    <p>{message}</p>
  </Segment>
)

export const LastLibraryUpdate = ({date, updateLibrary}) => {
  return (
    <Segment className='library-update-message' compact inverted>
      <div>
      <Message compact color='black' size="large"
        header='Your library data was last updated on:'
        content={date}/>
      </div>
      <Button inverted animated size='large' onClick={updateLibrary}>
        <Button.Content visible>Update</Button.Content>
        <Button.Content hidden><Icon inverted color='green' name='repeat' /></Button.Content>
      </Button>
    </Segment>
  )
}
