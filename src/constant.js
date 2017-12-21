const r = Math.sqrt(3)

const outier = [
  [0, 8 * r + 2.4],
  [4 + 0.8, 4 * r + 1.4],
  [12 + 2.4, 4 * r + 1.4],
  [8 + 1.8, 0],
  [12 + 2.4, -4 * r - 1.4],
  [4 + 0.8, -4 * r - 1.4],
  [0, -8 * r - 2.4],
  [-4 - 0.8, -4 * r - 1.4],
  [-12 - 2.4, -4 * r - 1.4],
  [-8 - 1.8, 0],
  [-12 - 2.4, 4 * r + 1.4],
  [-4 - 1, 4 * r + 1.4],
]

export const boardOutier = outier
  .map(o => [o[0] + 16, o[1] + 18])
  .reduce((x, y) => x + ' ' + y, '')

export const boardSpots = [
  [0, 8],
  [-1, 7],
  [1, 7],
  [-2, 6],
  [0, 6],
  [2, 6],
  [-3, 5],
  [-1, 5],
  [1, 5],
  [3, 5],
  [-12, 4],
  [-10, 4],
  [-8, 4],
  [-6, 4],
  [-4, 4],
  [-2, 4],
  [0, 4],
  [2, 4],
  [4, 4],
  [6, 4],
  [8, 4],
  [10, 4],
  [12, 4],
  [-11, 3],
  [-9, 3],
  [-7, 3],
  [-5, 3],
  [-3, 3],
  [-1, 3],
  [1, 3],
  [3, 3],
  [5, 3],
  [7, 3],
  [9, 3],
  [11, 3],
  [-10, 2],
  [-8, 2],
  [-6, 2],
  [-4, 2],
  [-2, 2],
  [0, 2],
  [2, 2],
  [4, 2],
  [6, 2],
  [8, 2],
  [10, 2],
  [-9, 1],
  [-7, 1],
  [-5, 1],
  [-3, 1],
  [-1, 1],
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [9, 1],
  [-8, 0],
  [-6, 0],
  [-4, 0],
  [-2, 0],
  [0, 0],
  [2, 0],
  [4, 0],
  [6, 0],
  [8, 0],
  [-9, -1],
  [-7, -1],
  [-5, -1],
  [-3, -1],
  [-1, -1],
  [1, -1],
  [3, -1],
  [5, -1],
  [7, -1],
  [9, -1],
  [-10, -2],
  [-8, -2],
  [-6, -2],
  [-4, -2],
  [-2, -2],
  [0, -2],
  [2, -2],
  [4, -2],
  [6, -2],
  [8, -2],
  [10, -2],
  [-11, -3],
  [-9, -3],
  [-7, -3],
  [-5, -3],
  [-3, -3],
  [-1, -3],
  [1, -3],
  [3, -3],
  [5, -3],
  [7, -3],
  [9, -3],
  [11, -3],
  [-12, -4],
  [-10, -4],
  [-8, -4],
  [-6, -4],
  [-4, -4],
  [-2, -4],
  [0, -4],
  [2, -4],
  [4, -4],
  [6, -4],
  [8, -4],
  [10, -4],
  [12, -4],
  [0, -8],
  [-1, -7],
  [1, -7],
  [-2, -6],
  [0, -6],
  [2, -6],
  [-3, -5],
  [-1, -5],
  [1, -5],
  [3, -5],
]

export const initialPosition = [
  [0, 8],
  [-1, 7],
  [1, 7],
  [-2, 6],
  [0, 6],
  [2, 6],
  [-3, 5],
  [-1, 5],
  [1, 5],
  [3, 5],
]
