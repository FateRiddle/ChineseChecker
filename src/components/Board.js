import React, { Component } from 'react'
import Circle from './Circle'
import Zi from './Zi'
import { boardSpots, boardOutier } from '../constant'
import { _possiblePath, _equal, _hasZi } from '../util'

class Board extends Component {
  componentWillReceiveProps = nextProps => {
    const deepEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b)
    if (!deepEqual(this.props.G.zis, nextProps.G.zis)) {
      // console.log('hahaha')
    }
  }

  componentDidMount = () => {}

  getPositionInfo = position => {
    const { zis } = this.props.G
    if (_hasZi(position, zis)) {
      return zis.find(z => _equal(z, position))
    }
    return [...position, null]
  }

  onRightClick = e => {
    e.preventDefault()
    const { moves, G } = this.props
    if (G.activeZi) {
      moves.putBack()
    }
  }

  restartGame = () => {
    const { _initial, restore } = this.props
    restore({ ..._initial, _initial: _initial })
  }

  render() {
    const { G, moves, endTurn, ctx } = this.props

    return (
      <div className="w-75 mw7">
        <svg
          viewBox="0 0 32 36"
          style={{ background: 'gold' }}
          onContextMenu={this.onRightClick}
        >
          {// show winner and restart option when game ends
          ctx.winner && (
            <g>
              <Zi position={[-13, -9, ctx.winner]} />
              <text x="4.5" y="3" style={{ fontSize: '2px' }}>
                wins!
              </text>
              <rect
                x="3"
                y="4"
                rx=".4"
                width="5"
                height="2"
                stroke="black"
                fill="Bisque"
                strokeWidth="0.1"
              />
              <text
                className="pointer"
                onClick={this.restartGame}
                x="3.8"
                y="5.3"
                style={{ fontSize: '1px' }}
              >
                restart
              </text>
            </g>
          )}
          <polygon
            points={boardOutier}
            stroke="black"
            strokeWidth=".5"
            fill="transparent"
            strokeLinejoin="round"
          />
          {boardSpots.map((position, index) => {
            const otherZis = G.activeZi
              ? G.zis.filter(zi => !_equal(zi, G.activeZi))
              : G.zis
            const possiblePaths = G.activeZi ? _possiblePath(G.activeZi, otherZis) : []
            const possibleSpots = possiblePaths.map(p => p[0])
            const path = possiblePaths.find(p => _equal(p[0], position))
            return (
              <Circle
                key={index}
                position={position}
                ctx={ctx} //判断是否pointer光标
                G={G} // 判断是否描边指示可行位置activeZi, moving
                isPossible={_hasZi(position, possibleSpots)} //此位置是否可能移动到
                path={path}
                moves={{ ...moves, endTurn }}
              />
            )
          })}
          {G.zis.map((position, index) => {
            return (
              <Zi
                key={index}
                position={position} //如有子，带有该位置子信息：[1,2,playerID]
                ctx={ctx}
                activeZi={G.activeZi}
                moves={{ ...moves, endTurn }}
              />
            )
          })}
        </svg>
        <span className="dib ma3">
          Click to pick a piece & move. Right click to cancel selection.
        </span>
        <span>
          <span
            className="dib h1 w1 br-pill mh2"
            style={{
              background: ctx.currentPlayer === '0' ? 'lightCoral' : 'darkTurquoise',
            }}
          />
          turn
        </span>
      </div>
    )
  }
}

export default Board
