import React from 'react'
import { Link } from 'react-router-dom'

import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { Card, CardFooter, CardFooterItem } from 'bloomer'

import EntryHeader from '../Entry/Header'
import EntryContent from '../Entry/Content'

const AnswerForm = ({
  messages,
  messageKey,
  data,
  config,
  handleDataChange,
  handleDataReset,
  handleDataSubmit,
  isProcessing
}) => {
  let message = messages.list[messageKey]

  return message.hasOwnProperty('replied') ? (
    <Redirect to="/show/messages" push />
  ) : (
    <Card tag="form">
      <EntryHeader entry={message} />

      <EntryContent
        entry={message}
        replyFormProps={{ data, handleDataChange, config, isProcessing }}
      />

      <CardFooter>
        <CardFooterItem onClick={e => handleDataSubmit(e, message)}>
          {config.buttonText.submit}
        </CardFooterItem>
        <CardFooterItem
          render={props => <Link to="/show/messages" {...props} />}
        >
          Cancel
        </CardFooterItem>
      </CardFooter>
    </Card>
  )
}

const mapStatesToProps = ({ entriesBySection }) => ({
  messages: entriesBySection.messages.entries
})

export default withRouter(connect(mapStatesToProps)(AnswerForm))
