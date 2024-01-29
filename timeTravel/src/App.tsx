import { useEffect } from 'react'
import './App.css'
import { Asset, GameEngine } from 'sm-game-engine'
import HomeScene from './Engine/Scenes/Home.scene'
import { SERVER_URL } from './env';

function App() {

  useEffect(() => {
    const gameEngine = new GameEngine({
      canvas: window.document.createElement("canvas"),
      width: window.innerWidth,
      heigth: window.innerHeight,
      root: window.document.getElementById("engine") as HTMLDivElement
    });

    gameEngine.start(
      [
        new Asset("back01", "image",SERVER_URL + "/Assets/Sprites/background01.jpeg"),
        new Asset("spaceShip", "image",SERVER_URL + "/Assets/Sprites/space-ship.png")
      ],
      [{ name: "home", scene: HomeScene }],
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
