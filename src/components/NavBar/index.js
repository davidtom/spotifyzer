import React from 'react'
import {SiteLogo} from '../PageAssets/Images'
import {SiteHeader} from '../PageAssets/Headers'
import {LoginButton} from '../PageAssets/Buttons'
import {Menu} from 'semantic-ui-react'

const NavBar = () => {

  return (
    <Menu className="site-component" pointing secondary inverted>
      < SiteLogo />
      < SiteHeader />
      <Menu.Menu position='right'>
        <div>< LoginButton /></div>
      </Menu.Menu>
    </Menu>
  );
};

export default NavBar
