import React from 'react'
import { Control, TextArea } from 'bloomer'

const StyledTextArea = ({
  value,
  handleChange,
  isProcessing,
  ...rest
}) => (
  <Control isLoading={isProcessing}>
    <TextArea
      isSize="medium"
      onChange={handleChange}
      value={value}
      {...rest}
    />
  </Control>
)

export default StyledTextArea
