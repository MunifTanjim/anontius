import React from 'react'
import { Field, Control, Label } from 'bloomer'

import TextArea from '../components/TextArea'

const ReplyTextArea = ({ config, handleDataChange, isProcessing, data }) => (
  <Field>
    <Label>Answer</Label>
    <Control>
      <TextArea
        rows={4}
        placeholder={config.placeholder}
        value={data}
        handleChange={handleDataChange}
        isProcessing={isProcessing}
      />
    </Control>
  </Field>
)

export default ReplyTextArea
