import anime from 'animejs'

const r = Math.sqrt(3)

export const animeMove = (dots, cb) => {
  if (dots.length < 2) return
  const origin = dots.reverse()[0]
  const path = dots.slice(1).map((d, i) => {
    return [d[0] - origin[0], (d[1] - origin[1]) * r]
  })
  let tl = anime.timeline({ autoplay: false })
  path.forEach(p => {
    tl = tl.add({
      targets: '.movingZi',
      translateX: p[0],
      translateY: p[1],
      easing: 'easeInOutExpo',
      duration: 600,
    })
  })
  tl = tl.add({
    targets: '.movingZi',
    translateX: 0,
    translateY: 0,
    duration: 0,
    complete() {
      cb()
    },
  })
  return tl
}
