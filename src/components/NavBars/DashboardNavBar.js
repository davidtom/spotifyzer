import React from 'react'
import { NavLink } from 'react-router-dom';
import {DashboardButton} from '../PageAssets/Buttons'

const DashboardNavBar = ({mainUrl}) => {
  return (
    <div>
      <NavLink to={`${mainUrl}`}><DashboardButton text={"Overview"}/></NavLink>
      <NavLink to={`${mainUrl}/genres`}><DashboardButton text={"Genres"}/></NavLink>
      <DashboardButton text={"Top Artists"}/>
      <DashboardButton text={"Top Tracks"}/>
    </div>
  );
};

export default DashboardNavBar
