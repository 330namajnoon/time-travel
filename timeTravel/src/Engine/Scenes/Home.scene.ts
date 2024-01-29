import { Animation, GameEngine, Scene, Sprite, Vector2, Vector6 } from "sm-game-engine";
import MotorFix from "../Scripts/SpaceShip/MotorFix";

export default class HomeScene extends Scene {
    initial: (app: GameEngine) => void = (app) => {
        const back01 = app.createImageEntity("back01", new Vector2(window.innerWidth / 2, window.innerHeight / 2), 0, new Vector2(0, 0), "LEFT_BOTTOM", [
            new Animation("back01", 100, [new Sprite(app.assets.find("img", "back01") as HTMLImageElement, new Vector6(0, 0, 700, 1240, 0, 0, window.innerWidth, window.innerHeight, window.innerWidth / 2, window.innerHeight / 2), 100)])
        ]);
        this.append("imageEntity", back01);

        const spaceShip = app.createImageEntity("Space ship", new Vector2(window.innerWidth / 2, window.innerHeight / 2), 0, new Vector2(0, 0), "RIGHT_BOTTOM", [
            new Animation("lidle", 100, [new Sprite(app.assets.find("img", "spaceShip") as HTMLImageElement, new Vector6(24, 240, 50, 50, 0, 0, 60, 60, 30, 30), 100)])
        ]);
        spaceShip.scripts.setScripts([MotorFix]);
        this.append("imageEntity", spaceShip);

    };
}