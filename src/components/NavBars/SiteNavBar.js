import React from 'react'
import { NavLink } from 'react-router-dom';
import {SiteLogo} from '../PageAssets/Images'
import {SiteHeader} from '../PageAssets/Headers'
import {LoginButton, ProfileDropdown} from '../PageAssets/Buttons'
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import {logoutUser} from "../../actions/authActions"
import {Grid} from 'semantic-ui-react'

const SiteNavBar = (props) => {

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column width={11}>
          < SiteLogo />
          <NavLink to={`${props.match.url}`}>< SiteHeader /></NavLink>
        </Grid.Column>
        <Grid.Column width={4} floated='right' verticalAlign='middle'>
          {props.auth.isLoggedIn ?
            < ProfileDropdown user={props.auth.user} handleClick={props.logoutUser} />
            :
            < LoginButton />}
        </Grid.Column>
      </Grid.Row>

    </Grid>
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
