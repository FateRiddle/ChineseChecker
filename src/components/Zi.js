import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { _equal } from '../util'

class Zi extends Component {
  static propTypes = {
    className: PropTypes.string,
    position: PropTypes.array.isRequired, // [x,y,who] e.g. [3,1,"1"]
    ctx: PropTypes.object,
    activeZi: PropTypes.array,
    moves: PropTypes.objectOf(PropTypes.func),
    scale: PropTypes.number,
  }

  static defaultProps = {
    ctx: {},
    className: '',
  }

  handleClick = () => {
    const { position, moves, ctx } = this.props
    if (ctx.winner) {
      return
    }
    if (position[2] === ctx.currentPlayer) {
      moves.pick(position)
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
    const { scale = 1, position, activeZi, ctx, className } = this.props
    const [x, y] = position
    const isActive = _equal(position, activeZi)
    return (
      <circle
        className={`${className} ${isActive ? 'movingZi' : ''} ${
          position[2] === ctx.currentPlayer && !ctx.winner ? 'pointer' : ''
        }`}
        onClick={this.handleClick}
        cx={`calc(16 + ${x * scale})`}
        cy={`calc(18 + ${y * Math.sqrt(3) * scale})`}
        r={`${0.8 * scale}`}
        fill={this.getFillColor()}
      />
    )
  }
}

export default Zi
