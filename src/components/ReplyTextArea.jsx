import React from 'react'
import { Field, Control, Label } from 'bloomer'
import { useTranslation } from 'react-i18next'
import TextArea from '../components/TextArea'

const ReplyTextArea = ({ handleDataChange, isProcessing, data }) => {
  const { t } = useTranslation()

  return (
    <Field>
      <Label>Reply</Label>
      <Control>
        <TextArea
          rows={4}
          placeholder={t('form.reply.placeholder')}
          value={data}
          handleChange={handleDataChange}
          isProcessing={isProcessing}
        />
      </Control>
    </Field>
  )
}

export default ReplyTextArea
