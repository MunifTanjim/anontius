import React from 'react'
import { Container, HeroFooter, Tabs, TabList } from 'bloomer'

import TabLink from './TabLink'

const HeaderHeroFooter = ({ authed }) => (
  <HeroFooter>
    <Container>
      <Tabs isBoxed isFullWidth>
        {authed ? (
          <TabList>
            <TabLink exact to="/show/messages">
              Messages
            </TabLink>
            <TabLink exact to="/show/replies">
              Replies
            </TabLink>
          </TabList>
        ) : (
          <TabList>
            <TabLink to="/submit/message">Send</TabLink>
            <TabLink to="/show/replies">Replies</TabLink>
          </TabList>
        )}
      </Tabs>
    </Container>
  </HeroFooter>
)

export default HeaderHeroFooter
