import React from 'react'
import { Hero } from 'bloomer'

import HeaderHeroBody from './HeroBody'
import HeaderHeroFooter from './HeroFooter'

import { accentColor } from '../../config'

const Header = ({ authed }) => (
  <Hero isColor={accentColor} tag="header">
    <HeaderHeroBody />
    <HeaderHeroFooter authed={authed} />
  </Hero>
)

export default Header
