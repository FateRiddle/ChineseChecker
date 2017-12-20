import React from 'react'

const r = Math.sqrt(3)

const Circle = ({ scale = 1, x, y, zi = 0 }) => {
  const fillColor = zi === 0 ? 'white' : 'red'
  return (
    <circle
      cx={`calc(16 + ${x * scale})`}
      cy={`calc(18 + ${y * r * scale})`}
      r={`${0.8 * scale}`}
      fill={fillColor}
    />
  )
}

export default Circle
