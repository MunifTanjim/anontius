import React from 'react'
import { Container, Button, Box } from 'bloomer'
import { translate } from 'react-i18next'

import Entry from '../components/Entry'

const EntryList = ({ entries, isUpdating, section, t }) => {
  let keys = entries.keys.filter(
    key => !entries.list[key].hasOwnProperty('replied')
  )

  return (
    <Container style={{ maxWidth: '35em' }}>
      {keys.map(key => (
        <Entry
          key={key}
          entryKey={key}
          entry={entries.list[key]}
          section={section}
        />
      ))}
      <Container isFluid hasTextAlign="centered">
        {isUpdating ? (
          <Button isLoading isSize="large" isColor="white" />
        ) : !keys.length ? (
          <Box>{t('entrylist.empty')}</Box>
        ) : null}
      </Container>
    </Container>
  )
}

export default translate()(EntryList)
