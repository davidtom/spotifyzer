import React from 'react'
import {SiteLogo} from '../PageAssets/Images'
import {SiteHeader} from '../PageAssets/Headers'
import {LoginButton, LogoutButton} from '../PageAssets/Buttons'
import {Menu} from 'semantic-ui-react'
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import {logoutUser} from "../../actions/authActions"

const SiteNavBar = ({logoutUser}) => {

  return (
    <Menu className="site-component" pointing secondary inverted>
      < SiteLogo />
      < SiteHeader />
      <Menu.Menu position='right'>
        <div>< LoginButton /></div>
        <div>< LogoutButton handleClick={logoutUser} /></div>
      </Menu.Menu>
    </Menu>
  );
};


// Connect to state so that logout button can dispatch an action to logout user
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logoutUser
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(SiteNavBar)
