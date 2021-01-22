import React from 'react'
import { Container, HeroFooter, Tabs, TabList } from 'bloomer'
import { useTranslation } from 'react-i18next'
import TabLink from './TabLink'

const HeaderHeroFooter = ({ authed }) => {
  const { t } = useTranslation()

  return (
    <HeroFooter>
      <Container>
        <Tabs isBoxed isFullWidth>
          {authed ? (
            <TabList>
              <TabLink exact to="/view/messages">
                {t('header.tabs.messages')}
              </TabLink>
              <TabLink exact to="/view/replies">
                {t('header.tabs.replies')}
              </TabLink>
            </TabList>
          ) : (
            <TabList>
              <TabLink to="/submit/message">{t('header.tabs.send')}</TabLink>
              <TabLink to="/view/replies">{t('header.tabs.replies')}</TabLink>
            </TabList>
          )}
        </Tabs>
      </Container>
    </HeroFooter>
  )
}

export default HeaderHeroFooter
