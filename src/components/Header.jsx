import React from 'react'
import { Hero } from 'bloomer'

import HeaderHeroBody from './Header/HeroBody'
import HeaderHeroFooter from './Header/HeroFooter'

const Header = ({ authed }) => (
  <Hero isColor="primary" tag="header">
    <HeaderHeroBody />
    <HeaderHeroFooter authed={authed} />
  </Hero>
)

export default Header
