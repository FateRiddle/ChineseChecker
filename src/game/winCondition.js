export const IsVictory = cells => {
  const positions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let pos of positions) {
    const symbol = cells[pos[0]]
    let winner = symbol
    for (let i of pos) {
      if (cells[i] !== symbol) {
        winner = null
        break
      }
    }
    if (winner != null) return true
  }

  return false
}
