import React from 'react'
import { Card } from 'bloomer'

import EntryHeader from './Header'
import EntryContent from './Content'
import EntryFooter from './Footer'

const Entry = ({ entryKey, entry, section }) => (
  <Card style={{ marginBottom: '2em' }}>
    <EntryHeader entry={entry} />
    <EntryContent entry={entry} />
    <EntryFooter entry={entry} entryKey={entryKey} />
  </Card>
)

export default Entry
