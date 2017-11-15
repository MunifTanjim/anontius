import React from 'react'
import { Hero } from 'bloomer'

import HeaderHeroBody from './Header/HeroBody'
import HeaderHeroFooter from './Header/HeroFooter'

import { accentColor } from '../utils/config'

const Header = ({ authed }) => (
  <Hero isColor={accentColor} tag="header">
    <HeaderHeroBody />
    <HeaderHeroFooter authed={authed} />
  </Hero>
)

export default Header
