import React from 'react'
import { Button } from 'bloomer'
import { translate } from 'react-i18next'
import { Container } from 'bloomer'

import TextArea from '../../components/TextArea'

import { accentColor } from '../../config'

const Form = ({
  data,
  handleDataChange,
  handleDataReset,
  handleDataSubmit,
  isProcessing,
  t
}) => (
  <Container tag="form" style={{ maxWidth: '35em' }}>
    <TextArea
      rows={6}
      placeholder={t('form.message.placeholder')}
      value={data}
      handleChange={handleDataChange}
      isProcessing={isProcessing}
    />
    <Container isFluid hasTextAlign="centered">
      <Button
        isSize="large"
        isColor={accentColor}
        isStatic={isProcessing}
        disabled={isProcessing}
        onClick={handleDataSubmit}
        style={{ margin: '0.5em' }}
      >
        {t('form.message.button.submit')}
      </Button>
      <Button
        isSize="large"
        isColor={accentColor}
        isStatic={isProcessing}
        disabled={isProcessing}
        onClick={handleDataReset}
        style={{ margin: '0.5em' }}
      >
        {t('form.message.button.reset')}
      </Button>
    </Container>
  </Container>
)

export default translate()(Form)
