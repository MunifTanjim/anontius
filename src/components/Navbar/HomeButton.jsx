import React from 'react'
import { Heading, NavbarItem } from 'bloomer'
import { useTranslation } from 'react-i18next'

import Icon from '../Icon'

const HomeButton = ({ url }) => {
  const { t } = useTranslation()

  return url ? (
    <NavbarItem href={url} target="_blank" rel="noopener noreferrer">
      <Heading
        tag="span"
        isHidden="touch"
        style={{ marginBottom: 0, marginRight: 8 }}
      >
        {t('navbar.home')}
      </Heading>
      <Icon name="home" />
    </NavbarItem>
  ) : null
}

export default HomeButton
