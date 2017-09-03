import React from 'react'
import { NavLink } from 'react-router-dom';
import {Button} from 'semantic-ui-react'

const AnalysisMenu = ({mainUrl}) => {
  return (
    <div>
      <NavLink to={`${mainUrl}`}><Button basic inverted color='grey'>Home</Button></NavLink>
      <NavLink to={`${mainUrl}/genres`}><Button basic inverted color='grey'>Genres</Button></NavLink>
      <Button basic inverted color='grey'>Top Artists</Button>
      <Button basic inverted color='grey'>Top Tracks</Button>
    </div>
  );
};

export default AnalysisMenu
