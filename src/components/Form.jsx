import React from 'react'

import MessageForm from './Forms/Message'
import ReplyForm from './Forms/Reply'

const Form = ({ type, messageKey, ...props }) =>
  type === 'reply' ? (
    <ReplyForm messageKey={messageKey} {...props} />
  ) : (
    <MessageForm {...props} />
  )

export default Form
