import React from 'react'
import { Switch } from 'react-router-dom'
import { Columns, Container, HeroBody } from 'bloomer'

import { SimpleRoute } from '../../utils/router'

import TitleBlock from './TitleBlock'

import { headerConfig } from '../../utils/config'

const HeaderHeroBody = () => (
  <HeroBody>
    <Container hasTextAlign="centered">
      <Columns isVCentered>
        <Switch>
          <SimpleRoute
            path="/show/:blk"
            component={TitleBlock}
            config={headerConfig.show}
          />
          <SimpleRoute
            path="/submit/:blk"
            component={TitleBlock}
            config={headerConfig.submit}
          />
          <SimpleRoute
            path="/login"
            component={TitleBlock}
            config={headerConfig.login}
          />
        </Switch>
      </Columns>
    </Container>
  </HeroBody>
)

export default HeaderHeroBody
