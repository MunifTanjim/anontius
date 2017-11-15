import React from 'react'
import { Link } from 'react-router-dom'
import { CardFooter, CardFooterItem } from 'bloomer'

const EntryFooter = ({ entry, entryKey }) => (
  <CardFooter>
    {!entry.reply && !entry.replied ? (
      <CardFooterItem
        hasTextColor="black"
        render={props => <Link to={`/submit/reply/${entryKey}`} {...props} />}
      >
        Reply
      </CardFooterItem>
    ) : null}
  </CardFooter>
)

export default EntryFooter
