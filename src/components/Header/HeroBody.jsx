import React from 'react'
import { Switch } from 'react-router-dom'
import { Columns, Container, HeroBody } from 'bloomer'

import { SimpleRoute } from '../../utils/router'

import TitleBlock from './TitleBlock'

const HeaderHeroBody = () => (
  <HeroBody>
    <Container hasTextAlign="centered">
      <Columns isVCentered>
        <Switch>
          <SimpleRoute path="/:action/:block?" component={TitleBlock} />
        </Switch>
      </Columns>
    </Container>
  </HeroBody>
)

export default HeaderHeroBody
