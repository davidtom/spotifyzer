import React from 'react'
import { NavLink } from 'react-router-dom';
import {DashboardButton} from '../PageAssets/Buttons'
import {Divider} from 'semantic-ui-react'


const DashboardNavBar = ({mainUrl}) => {
  return (
    <div>
      <NavLink to={`${mainUrl}overview`}><DashboardButton text={"Overview"}/></NavLink>
      <NavLink to={`${mainUrl}genres`}><DashboardButton text={"Genres"}/></NavLink>
      <NavLink to={`${mainUrl}artists`}><DashboardButton text={"Top Artists"}/></NavLink>
      <NavLink to={`${mainUrl}tracks`}><DashboardButton text={"Top Tracks"}/></NavLink>
      <NavLink to={`${mainUrl}recent`}><DashboardButton text={"Recent Tracks"}/></NavLink>
      <Divider hidden />
    </div>
  );
};

export default DashboardNavBar
