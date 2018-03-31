import React from 'react'
import { Link, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { translate } from 'react-i18next'

import { Card, CardFooter, CardFooterItem } from 'bloomer'

import EntryHeader from '../Entry/Header'
import EntryContent from '../Entry/Content'

const ReplyForm = ({
  messages,
  messageKey,
  data,
  handleDataChange,
  handleDataReset,
  handleDataSubmit,
  isProcessing,
  t
}) => {
  let message = messages.list[messageKey]

  return message.hasOwnProperty('replied') ? (
    <Redirect to="/view/messages" push />
  ) : (
    <Card tag="form">
      <EntryHeader entry={message} />

      <EntryContent
        entry={message}
        replyFormProps={{ data, handleDataChange, isProcessing }}
      />

      <CardFooter>
        <CardFooterItem
          tag="a"
          hasTextColor="black"
          onClick={e => handleDataSubmit(e, message)}
        >
          {t('form.reply.button.submit')}
        </CardFooterItem>
        <CardFooterItem
          hasTextColor="black"
          render={props => <Link to="/view/messages" {...props} />}
        >
          {t('form.reply.button.reset')}
        </CardFooterItem>
      </CardFooter>
    </Card>
  )
}

const mapStatesToProps = ({ entriesBySection }) => ({
  messages: entriesBySection.messages.entries
})

export default withRouter(connect(mapStatesToProps)(translate()(ReplyForm)))
