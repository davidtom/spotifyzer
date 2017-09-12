import React from 'react'
import { NavLink } from 'react-router-dom';
import {DashboardButton, PlayerToggle} from '../PageAssets/Buttons'
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import {toggleVisibility} from "../../actions/playerActions"
import {Divider} from 'semantic-ui-react'


const DashboardNavBar = (props) => {
  const mainUrl = props.mainUrl
  return (
    <div>
      <PlayerToggle onClick={props.toggleVisibility} visible={props.visible}/>
      <NavLink to={`${mainUrl}overview`}><DashboardButton text={"Overview"}/></NavLink>
      <NavLink to={`${mainUrl}genres`}><DashboardButton text={"Genres"}/></NavLink>
      <NavLink to={`${mainUrl}artists`}><DashboardButton text={"Top Artists"}/></NavLink>
      <NavLink to={`${mainUrl}tracks`}><DashboardButton text={"Top Tracks"}/></NavLink>
      <NavLink to={`${mainUrl}recent`}><DashboardButton text={"Recent Tracks"}/></NavLink>
      <Divider hidden />
    </div>
  );
};

// Connect to redux so PlayerToggle can update the state of toggle button and player
const mapStateToProps = (state) => {
  return {
    visible: state.player.visible
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    toggleVisibility
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardNavBar)
