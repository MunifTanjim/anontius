import React from 'react'
import { Navbar, NavbarItem, NavbarBrand } from 'bloomer'

import Icon from '../components/Icon'

import AppTitle from './Navbar/AppTitle'
import DashButton from './Navbar/DashButton'
import HomeButton from './Navbar/HomeButton'

import { appTitle, social, homeURL } from '../config'

const StyledNavbar = ({ authed }) => (
  <Navbar isMarginless>
    <NavbarBrand style={{ width: '100%' }}>
      <AppTitle title={appTitle} />
      {Object.keys(social).map(platform => (
        <NavbarItem
          key={platform}
          href={social[platform]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name={platform} />
        </NavbarItem>
      ))}
      <DashButton authed={authed} />
      <HomeButton url={homeURL} />
    </NavbarBrand>
  </Navbar>
)

export default StyledNavbar
