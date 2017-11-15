import React from 'react'
import { Button } from 'bloomer'

import TextArea from '../../components/TextArea'

import { Container } from 'bloomer'

import { accentColor } from '../../utils/config'

const Form = ({
  data,
  config,
  handleDataChange,
  handleDataReset,
  handleDataSubmit,
  isProcessing
}) => (
  <Container tag="form" style={{ maxWidth: '35em' }}>
    <TextArea
      rows={6}
      placeholder={config.placeholder}
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
        {config.buttonText.submit}
      </Button>
      <Button
        isSize="large"
        isColor={accentColor}
        isStatic={isProcessing}
        disabled={isProcessing}
        onClick={handleDataReset}
        style={{ margin: '0.5em' }}
      >
        {config.buttonText.reset}
      </Button>
    </Container>
  </Container>
)

export default Form
