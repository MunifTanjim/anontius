import React from 'react'

import MessageForm from './Forms/Message'
import ReplyForm from './Forms/Reply'

import { formConfig } from '../config'

const Form = ({ type, messageKey, ...props }) =>
  type === 'reply' ? (
    <ReplyForm messageKey={messageKey} config={formConfig[type]} {...props} />
  ) : (
    <MessageForm config={formConfig[type]} {...props} />
  )

export default Form
