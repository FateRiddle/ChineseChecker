const Server = require('boardgame.io/server')
const ChineseChecker = require('../src/game')

const app = Server({ game: ChineseChecker })
app.use(KoaStatic('build/index.html'))
app.listen(8000)
