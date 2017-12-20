import Client from 'boardgame.io/client'
import Board from './components/Board'
import ChineseChecker from './game'
import './App.css'

var App = Client({
  board: Board,
  game: ChineseChecker,
  // debug: false,
})

export default App
