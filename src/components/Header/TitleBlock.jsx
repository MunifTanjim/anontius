import React from 'react'
import { Column, Title, Subtitle } from 'bloomer'

const TitleBlock = ({ config, match }) => (
  <Column>
    <Title isSize={1}>
      {match.params.blk ? config[match.params.blk].title : config.title}
    </Title>
    <Subtitle>
      {match.params.blk ? config[match.params.blk].subtitle : config.subtitle}
    </Subtitle>
  </Column>
)

export default TitleBlock
