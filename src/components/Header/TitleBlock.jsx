import React from 'react'
import { Column, Title } from 'bloomer'
import { translate } from 'react-i18next'

const TitleBlock = ({ match, t }) => {
  let { action, block } = match.params
  return (
    <Column>
      <Title isSize={1}>
        {t(`header.title.${action}${block ? `.${block}` : ''}`)}
      </Title>
    </Column>
  )
}

export default translate()(TitleBlock)
