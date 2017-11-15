import React from 'react'
import feather from 'feather-icons'

const Icon = ({ name, size, ...rest }) => (
  <span
    className={`icon ${size ? `is-${size}` : ``}`}
    dangerouslySetInnerHTML={{ __html: feather.toSvg(name) }}
    {...rest}
  />
)

export default Icon
