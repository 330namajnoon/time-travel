import { useEffect } from 'react'
import './App.css'
import { GameEngine } from 'sm-game-engine'
import HomeScene from './Engine/Scenes/Home.scene'

function App() {

  useEffect(() => {
    const gameEngine = new GameEngine({
      canvas: window.document.createElement("canvas"),
      width: window.innerWidth,
      heigth: window.innerHeight,
      root: window.document.getElementById("engine") as HTMLDivElement 
    });

    gameEngine.start(
      [],
      [{name:"home", scene: HomeScene}],
      (error) => {
        if (!error) {
          gameEngine.scenes.render("home");
        }
      }
    )
  });

  return (
    <div id='engine'></div>
  )
}

export default App
