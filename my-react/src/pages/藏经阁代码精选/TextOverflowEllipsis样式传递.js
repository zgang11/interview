import React from 'react';
import _ from 'lodash'

export const TextOverflowEllipsis = ({width, title, style, children}) => {
  const allStyle = _.merge({
    display: 'inline-block',
    maxWidth: `${width}em`,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }, style)
  return (
    <span style={allStyle} title={title || children}>{children}</span>
  )
}
