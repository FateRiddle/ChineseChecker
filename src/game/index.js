import Game from 'boardgame.io/game'
import { initialPosition } from '../constant'
import { _hasZi, _equal } from '../util'

const ChineseChecker = Game({
  G: {
    zis: initialPosition,
    activeZi: [0, 6],
    winner: null,
  },

  moves: {
    pick(G, ctx, position) {
      // 如果没有子，或者已经处于选中状态
      if (!_hasZi(position, G.zis) || G.activeZi) {
        return G
      }
      return { ...G, activeZi: position }
    },
    putBack(G, ctx) {
      if (G.activeZi) {
        return { ...G, activeZi: null }
      }
      return G
    },
    move(G, ctx, position, isPossible) {
      //如果有子，或者没有处于选中状态
      if (_hasZi(position, G.zis) || !G.activeZi || !isPossible) {
        return G
      }
      //删除旧位置，添加新位置
      let newZis = G.zis.filter(z => !_equal(z, G.activeZi))
      newZis = [...newZis, position]

      return { ...G, activeZi: null, zis: newZis }
    },
  },
})

export default ChineseChecker
