import React, { Component } from 'react'
import { _equal } from '../util'

class Circle extends Component {
  handleClick = () => {
    const { position, isPossible, moves, ctx = {}, activeZi } = this.props
    if (ctx.winner) {
      return
    }
    if (position[2] === ctx.currentPlayer) {
      moves.pick(position)
    } else if (position[2] == null && activeZi && isPossible) {
      moves.move(position, isPossible)
      moves.endTurn()
    }
  }

  getFillColor = () => {
    const { position, activeZi } = this.props
    const isActive = _equal(position, activeZi)
    switch (position[2]) {
      case '0':
        if (isActive) return 'crimson'
        return 'lightCoral'
      case '1':
        if (isActive) return 'lime'
        return 'darkTurquoise'
      default:
        return 'white'
    }
  }

  render() {
    const { scale = 1, position, activeZi, isPossible, ctx = {} } = this.props
    const [x, y] = position
    return (
      <circle
        className={`${
          (position[2] === ctx.currentPlayer && !ctx.winner) || isPossible
            ? 'pointer'
            : ''
        }`}
        onClick={this.handleClick}
        cx={`calc(16 + ${x * scale})`}
        cy={`calc(18 + ${y * Math.sqrt(3) * scale})`}
        r={`${0.8 * scale}`}
        fill={this.getFillColor()}
        stroke={activeZi && isPossible ? 'gray' : ''}
        strokeWidth=".1"
        strokeDasharray=".3"
      />
    )
  }
}

export default Circle
