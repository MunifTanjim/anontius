import React from 'react'
import { CardContent, Content, Message, MessageBody } from 'bloomer'

import ReplyTextArea from '../ReplyTextArea'

const EntryContent = ({ entry, replyFormProps }) => (
  <CardContent>
    <Content>
      {entry.message.split('\n').map((line, i) => <p key={i}>{line}</p>)}
    </Content>
    {entry.reply ? (
      <Message>
        <MessageBody>
          {entry.reply.split('\n').map((line, i) => <p key={i}>{line}</p>)}
        </MessageBody>
      </Message>
    ) : replyFormProps ? (
      <ReplyTextArea {...replyFormProps} />
    ) : null}
  </CardContent>
)

export default EntryContent
