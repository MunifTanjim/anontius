import React from 'react'
import { Card } from 'bloomer'

import EntryHeader from './Entry/Header'
import EntryContent from './Entry/Content'
import EntryFooter from './Entry/Footer'

const Entry = ({ entryKey, entry, section }) => (
  <Card style={{ marginBottom: '2em' }}>
    <EntryHeader entry={entry} />
    <EntryContent entry={entry} />
    <EntryFooter entry={entry} entryKey={entryKey} />
  </Card>
)

export default Entry
