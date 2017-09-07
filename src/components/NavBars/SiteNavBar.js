import React from 'react'
import { NavLink } from 'react-router-dom';
import {SiteLogo} from '../PageAssets/Images'
import {SiteHeader} from '../PageAssets/Headers'
import {LoginButton, ProfileDropdown} from '../PageAssets/Buttons'
import {Menu} from 'semantic-ui-react'
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import {logoutUser} from "../../actions/authActions"

const SiteNavBar = (props) => {

  return (
    <Menu className="site-component" pointing secondary inverted>
      < SiteLogo />
      <NavLink to={`${props.match.url}`}>< SiteHeader /></NavLink>
      <Menu.Menu position='right'>
        {props.auth.isLoggedIn ?
          <div>< ProfileDropdown user={props.auth.user} handleClick={props.logoutUser} /></div>
          :
          <div>< LoginButton /></div>}
      </Menu.Menu>
    </Menu>
  );
};

// Connect to redux so that nav bar knows log in status
const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

// Connect to redux logout button can dispatch an action to logout user
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logoutUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteNavBar)
