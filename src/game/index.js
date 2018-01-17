import Game from 'boardgame.io/game'
import { _equal } from '../util'
import { init2P } from '../constant'
import { getWinner } from './winCondition'

const ChineseChecker = Game({
  setup: numPlayers => ({
    activeZi: null,
    zis: [...init2P[0], ...init2P[1]],
    moving: false,
  }),

  moves: {
    pick(G, ctx, zi) {
      // 如果没有子，或者已经处于选中状态
      if (zi[2] == null || G.activeZi) {
        return G
      }
      return { ...G, activeZi: zi }
    },
    putBack(G, ctx) {
      if (G.activeZi) {
        return { ...G, activeZi: null }
      }
      return G
    },
    move(G, ctx, position, isPossible) {
      if (!isPossible) {
        return G
      }
      //删除旧位置，添加新位置
      let newZis = G.zis.filter(z => !_equal(z, G.activeZi))
      newZis = [...newZis, [position[0], position[1], G.activeZi[2]]]
      return { ...G, activeZi: null, zis: newZis }
    },
    toggleMoving(G, ctx) {
      return { ...G, moving: !G.moving }
    },
  },

  victory: (G, ctx) => {
    return getWinner(G.zis)
  },

  // flow: (ctx, action, G) => {
  //   switch (action.type) {
  //     case 'RESTART':
  //       return {
  //         ...ctx,
  //         turn: 0,
  //         currentPlayer: '0',
  //         winner: null,
  //       }
  //     default:
  //       return ctx
  //   }
  // },
})

export default ChineseChecker
