import React from 'react'
import Circle from './Circle'
import { spots, outierPoints } from '../constant'
// const C = ({ p }) => <circle cx={p[0]} cy={p[1]} fill="red" r={1} />
const Board = () => (
  <div className="w-50 bg-gold">
    <svg viewBox="0 0 32 36" style={{ background: 'gold' }}>
      <polygon
        points={outierPoints}
        stroke="black"
        strokeWidth=".5"
        fill="transparent"
        strokeLinejoin="round"
      />
      {spots.map((points, index) => (
        <Circle key={index} x={points[0]} y={points[1]} scale={1} />
      ))}
    </svg>
  </div>
)

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
