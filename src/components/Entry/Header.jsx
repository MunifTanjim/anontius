import React from 'react'
import { CardHeader, CardHeaderTitle } from 'bloomer'

import { formatDateTime } from '../../utils/datetime'

const EntryHeader = ({ entry }) => (
  <CardHeader>
    <CardHeaderTitle>{formatDateTime(entry.receivedAt)}</CardHeaderTitle>
  </CardHeader>
)

export default EntryHeader
