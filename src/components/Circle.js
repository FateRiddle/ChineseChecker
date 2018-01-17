import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { _equal } from '../util'
import { animeMove } from '../animation'

class Circle extends Component {
  static propTypes = {
    className: PropTypes.string,
    position: PropTypes.array.isRequired, // [x,y,who] e.g. [3,1,"1"]
    ctx: PropTypes.object,
    G: PropTypes.object,
    isPossible: PropTypes.bool,
    moves: PropTypes.objectOf(PropTypes.func),
    scale: PropTypes.number,
  }

  static defaultProps = {
    G: {},
    ctx: {},
    className: '',
  }

  handleClick = () => {
    const { position, isPossible, moves, ctx, G } = this.props
    if (ctx.winner) {
      return
    }
    if (G.activeZi && isPossible) {
      moves.toggleMoving()
      animeMove(this.props.path, () => {
        moves.toggleMoving()
        moves.move(position, isPossible)
        moves.endTurn()
      }).play()
    }
  }

  render() {
    const { scale = 1, position, G, isPossible, className } = this.props
    const [x, y] = position
    return (
      <circle
        className={isPossible ? `${className} pointer` : className}
        onClick={this.handleClick}
        cx={`calc(16 + ${x * scale})`}
        cy={`calc(18 + ${y * Math.sqrt(3) * scale})`}
        r={`${0.8 * scale}`}
        fill="white"
        stroke={G.activeZi && !G.moving && isPossible ? 'gray' : ''}
        strokeWidth=".1"
        strokeDasharray=".3"
      />
    )
  }
}

export default Circle
