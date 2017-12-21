import React, { Component } from 'react'
import { _equal } from '../util'

const r = Math.sqrt(3)

class Circle extends Component {
  state = {
    moveHint: false,
  }

  handleClick = () => {
    const { position, hasZi, isPossible, moves } = this.props
    if (hasZi !== 0) {
      moves.pick(position)
    } else {
      moves.move(position, isPossible)
    }
  }

  render() {
    const { scale = 1, position, hasZi = 0, activeZi, isPossible } = this.props
    const isActive = _equal(position, activeZi)
    const fillColor = hasZi === 0 ? 'white' : isActive ? 'orange' : 'red'
    const [x, y] = position
    return (
      <circle
        className={hasZi === 0 ? '' : 'hasZi'}
        onClick={this.handleClick}
        cx={`calc(16 + ${x * scale})`}
        cy={`calc(18 + ${y * r * scale})`}
        r={`${0.8 * scale}`}
        fill={fillColor}
        stroke={activeZi && isPossible ? 'gray' : ''}
        strokeWidth=".1"
        strokeDasharray=".3"
      />
    )
  }
}

export default Circle
