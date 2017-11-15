import React from 'react'
import { Control, TextArea } from 'bloomer'

import { accentColor } from '../utils/config'

const StyledTextArea = ({ value, handleChange, isProcessing, ...rest }) => (
  <Control isLoading={isProcessing}>
    <TextArea
      className={`is-${accentColor}`}
      isSize="medium"
      onChange={handleChange}
      value={value}
      {...rest}
    />
  </Control>
)

export default StyledTextArea
