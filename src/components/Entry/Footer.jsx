import React from 'react'
import { Link } from 'react-router-dom'
import { CardFooter, CardFooterItem } from 'bloomer'
import { translate } from 'react-i18next'

const EntryFooter = ({ entry, entryKey, t }) => (
  <CardFooter>
    {!entry.reply && !entry.replied ? (
      <CardFooterItem
        hasTextColor="black"
        render={props => <Link to={`/submit/reply/${entryKey}`} {...props} />}
      >
        {t('entry.reply')}
      </CardFooterItem>
    ) : null}
  </CardFooter>
)

export default translate()(EntryFooter)
