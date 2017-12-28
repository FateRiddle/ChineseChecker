import { boardSpots } from './constant'

export const _equal = (p1, p2) => {
  if (p1 && p2) {
    return p1[0] === p2[0] && p1[1] === p2[1]
  }
  return false
}

export const _hasZi = (position, zis) => {
  let hasZi = false
  for (let zi of zis) {
    if (_equal(position, zi)) {
      hasZi = true
      break
    }
  }
  return hasZi
}

// 辅助函数  3, -2 => [2,1,0,-1]
const _arrayFrom = (a, b, step = 1) => {
  let arr = []
  if (a < b - 1) {
    for (let i = a + step; i < b; i += step) {
      arr.push(i)
    }
  } else if (a > b + 1) {
    for (let i = a - step; i > b; i -= step) {
      arr.push(i)
    }
  }
  return arr
}

//辅助函数
const _closest = (position, zis) => {
  const [x, y] = position
  if (zis.length === 0) {
    return position
  }
  const newZis = zis
    .map(zi => [zi[0], zi[1], Math.abs(zi[0] - x) + Math.abs(zi[1] - y)])
    .sort((z1, z2) => z1[2] > z2[2])
  let result = newZis[0]
  return [result[0], result[1]]
}

const _noBetween = (p1, p2, zis) => {
  const [x1, y1] = p1
  const [x2, y2] = p2
  let spots = []
  if (y1 === y2) {
    const arr = _arrayFrom(x1, x2, 2)
    spots = arr.map(a => [a, y1])
  } else {
    const arr1 = _arrayFrom(x1, x2)
    const arr2 = _arrayFrom(y1, y2)
    spots = arr1.map((a, i) => [a, arr2[i]])
  }
  let noBtw = true
  if (spots.length > 0) {
    spots.forEach(p => {
      if (_hasZi(p, zis)) {
        noBtw = false
      }
    })
  }
  return noBtw
}

//计算一步可能到达点
const _onePossible = (position, zis) => {
  const [x, y] = position
  let result = []

  //找到跳点
  let group = []
  let hopSpots = []
  //横的
  group[0] = zis.filter(z => z[0] > x && z[1] === y)
  group[1] = zis.filter(z => z[0] < x && z[1] === y)
  //00, 11, 22
  group[2] = zis.filter(z => z[0] > x && z[0] - x === z[1] - y)
  group[3] = zis.filter(z => z[0] < x && z[0] - x === z[1] - y)
  //00, -11, -22
  group[4] = zis.filter(z => z[0] > x && x + y === z[0] + z[1])
  group[5] = zis.filter(z => z[0] < x && x + y === z[0] + z[1])

  group.forEach(line => {
    if (line.length > 0) {
      hopSpots.push(_closest(position, line))
    }
  })
  //可以跳到的位置
  let landSpots = hopSpots.map(p => [p[0] * 2 - x, p[1] * 2 - y])
  // console.log(landSpots, hopSpots)
  landSpots = landSpots.filter(
    (p, i) => !_hasZi(p, zis) && _hasZi(p, boardSpots) && _noBetween(p, hopSpots[i], zis)
  )
  result = [...result, ...landSpots]

  return result
}
//合并两个数组，并去重（两个数组本身都没有重复）
const _mergeArr = (arr1, arr2) => {
  const newArr2 = arr2.filter(a2 => {
    let isNew = true
    arr1.forEach(a1 => {
      if (_equal(a1, a2)) {
        isNew = false
      }
    })
    return isNew
  })
  return [...arr1, ...newArr2]
}

//所有可能跳到的位置
export const _possibleSpots = (position, zis) => {
  //可以移动到的位置
  const [x, y] = position
  let moveSpots = [
    [x - 2, y],
    [x + 2, y],
    [x - 1, y - 1],
    [x + 1, y - 1],
    [x - 1, y + 1],
    [x + 1, y + 1],
  ]
  moveSpots = moveSpots.filter(p => !_hasZi(p, zis))

  let spots = _onePossible(position, zis)
  if (spots.length === 0) {
    return moveSpots
  }
  // return spots
  let newSpots = spots
    .map(p => _onePossible(p, zis))
    .reduce((arr1, arr2) => [...arr1, ...arr2], [])
  newSpots = _mergeArr(spots, newSpots).filter(p => !_equal(p, position))
  while (newSpots.length > spots.length) {
    spots = [...newSpots]
    newSpots = spots
      .map(p => _onePossible(p, zis))
      .reduce((arr1, arr2) => [...arr1, ...arr2], [])
    newSpots = _mergeArr(spots, newSpots).filter(p => !_equal(p, position))
  }

  return [...moveSpots, ...spots]
}
