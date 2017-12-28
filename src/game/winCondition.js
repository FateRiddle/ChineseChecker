const equal = (a, b) => {
  const [x1, y1, z1] = a
  const [x2, y2, z2] = b
  if (x1 === x2 && y1 === y2 && z1 === z2) return true
  return false
}

const belong = (zi, zis) => {
  if (zis.find(z => equal(z, zi))) {
    return true
  }
  return false
}

export const getWinner = zis => {
  const p1FinalPosition = [
    [0, -8, '0'],
    [-1, -7, '0'],
    [1, -7, '0'],
    [-2, -6, '0'],
    [0, -6, '0'],
    [2, -6, '0'],
    [-3, -5, '0'],
    [-1, -5, '0'],
    [1, -5, '0'],
    [3, -5, '0'],
  ]
  const p2FinalPosition = [
    [0, 8, '1'],
    [-1, 7, '1'],
    [1, 7, '1'],
    [-2, 6, '1'],
    [0, 6, '1'],
    [2, 6, '1'],
    [-3, 5, '1'],
    [-1, 5, '1'],
    [1, 5, '1'],
    [3, 5, '1'],
  ]
  const win1 = p1FinalPosition.every(p => belong(p, zis))
  const win2 = p2FinalPosition.every(p => belong(p, zis))
  if (win1) {
    return '0' // 玩家1赢了
  }
  if (win2) {
    return '1' // 玩家2赢了
  }
  return null
}
