import React, { Component } from 'react'
import Circle from './Circle'
import { boardSpots, boardOutier } from '../constant'
import { _possibleSpots, _equal } from '../util'
class Board extends Component {
  hasZi = (position, zis) => {
    let _hasZi = 0
    for (let zi of zis) {
      if (_equal(zi, position)) {
        _hasZi = 1
        break
      }
    }
    return _hasZi
  }

  onRightClick = e => {
    e.preventDefault()
    const { moves, G } = this.props
    if (G.activeZi) {
      moves.putBack()
    }
  }

  render() {
    const { G, moves } = this.props
    const otherZis = G.activeZi ? G.zis.filter(zi => !_equal(zi, G.activeZi)) : G.zis
    const possibleSpots = G.activeZi ? _possibleSpots(G.activeZi, otherZis) : []

    return (
      <div className="w-50 bg-gold">
        <svg
          viewBox="0 0 32 36"
          style={{ background: 'gold' }}
          onContextMenu={this.onRightClick}
        >
          <polygon
            points={boardOutier}
            stroke="black"
            strokeWidth=".5"
            fill="transparent"
            strokeLinejoin="round"
          />
          {boardSpots.map((position, index) => {
            return (
              <Circle
                key={index}
                position={position}
                hasZi={this.hasZi(position, G.zis)}
                activeZi={G.activeZi}
                isPossible={this.hasZi(position, possibleSpots)}
                moves={moves}
              />
            )
          })}
        </svg>
      </div>
    )
  }
}

export default Board

// export default class TicTacToeBoard extends React.Component {
//   onClick = id => {
//     const { moves, endTurn } = this.props
//     if (this.isActive(id)) {
//       moves.clickCell(id)
//       endTurn()
//     }
//   }

//   isActive = id => {
//     const { G } = this.props
//     if (G.winner !== null) return false
//     return G.cells[id] == null
//   }

//   render() {
//     let tbody = []
//     for (let i = 0; i < 3; i++) {
//       let cells = []
//       for (let j = 0; j < 3; j++) {
//         const id = 3 * i + j
//         cells.push(
//           <td
//             key={id}
//             className={this.isActive(id) ? 'active' : ''}
//             onClick={() => this.onClick(id)}
//           >
//             {this.props.G.cells[id]}
//           </td>
//         )
//       }
//       tbody.push(<tr key={i}>{cells}</tr>)
//     }

//     let winner = ''
//     if (this.props.G.winner !== null) {
//       winner = <div id="winner">Winner: {this.props.G.winner}</div>
//     }

//     return (
//       <div>
//         <table id="board">
//           <tbody>{tbody}</tbody>
//         </table>
//         {winner}
//       </div>
//     )
//   }
// }
