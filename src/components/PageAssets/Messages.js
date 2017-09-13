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

export const PageToolTip = ({message, dropdown}) => (
  <Segment className="tooltip" secondary inverted textAlign="center">
    <div className="tiptext">{message}{dropdown}</div>
  </Segment>
)

export const LastLibraryUpdate = ({date, updateLibrary}) => {

  // Define function to get today's date formatted to match the date coming from
  // backend
  const dateToday = function(){
    var today = new Date()
    var dd = today.getDate()
    var mm = today.getMonth()+1 //January is 0
    var yyyy = today.getFullYear()
    if(dd<10) {dd = '0'+dd}
    if(mm<10) {mm = '0'+mm}

    // return in format: "2017-09-13"
    today = yyyy + '-' + mm + '-' + dd;
    return today;
  }

  return (
    <Segment className='library-update-message' compact inverted>
      <div>
      <Message compact color='black' size="large"
        header='Your library data was last updated on:'
        content={date}/>
      </div>
      {/*Prevent users from updating more than once per day*/}
      {dateToday() === date ?
        <p>You may update your library again tomorrow!</p>
        :
        <Button inverted animated size='large' onClick={updateLibrary}>
        <Button.Content visible>Update</Button.Content>
        <Button.Content hidden><Icon inverted color='green' name='repeat' /></Button.Content>
        </Button>
      }
    </Segment>
  )
}
