import React from 'react'
import { NavLink } from 'react-router-dom';
import {DashboardButton} from '../PageAssets/Buttons'

const DashboardNavBar = ({mainUrl}) => {
  return (
    <div>
      <NavLink to={`${mainUrl}`}><DashboardButton text={"Overview"}/></NavLink>
      <NavLink to={`${mainUrl}/genres`}><DashboardButton text={"Genres"}/></NavLink>
      <NavLink to={`${mainUrl}/artists`}><DashboardButton text={"Top Artists"}/></NavLink>
      <NavLink to={`${mainUrl}/tracks`}><DashboardButton text={"Top Tracks"}/></NavLink>
    </div>
  );
};

export default DashboardNavBar
