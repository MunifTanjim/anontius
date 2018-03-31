import React from 'react'
import { Navbar, NavbarItem, NavbarBrand } from 'bloomer'

import Icon from '../../components/Icon'

import Title from './Title'
import DashButton from './DashButton'
import HomeButton from './HomeButton'

import { appTitle, social, homeURL } from '../../config'

const StyledNavbar = ({ authed }) => (
  <Navbar>
    <NavbarBrand style={{ width: '100%' }} isMarginless>
      <Title title={appTitle} />
      {Object.keys(social).map(
        platform =>
          social[platform] ? (
            <NavbarItem
              key={platform}
              href={social[platform]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name={platform} />
            </NavbarItem>
          ) : null
      )}
      <DashButton authed={authed} />
      <HomeButton url={homeURL} />
    </NavbarBrand>
  </Navbar>
)

export default StyledNavbar
