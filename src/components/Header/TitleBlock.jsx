import React from 'react'
import { Column, Title } from 'bloomer'
import { useTranslation } from 'react-i18next'

const TitleBlock = ({ match }) => {
  const { t } = useTranslation()
  let { action, block } = match.params

  return (
    <Column>
      <Title isSize={1}>
        {t(`header.title.${action}${block ? `.${block}` : ''}`)}
      </Title>
    </Column>
  )
}

export default TitleBlock
