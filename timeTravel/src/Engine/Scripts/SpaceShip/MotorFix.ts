import { Animation, ImageEntity, Script, Sprite, Vector2, Vector6 } from "sm-game-engine";

export default class MotorFix extends Script<ImageEntity> {
    motor!: ImageEntity;
    initial: () => void = () => {
        this.motor = this.app.createImageEntity("Space ship", new Vector2(window.innerWidth / 2, window.innerHeight / 2 + 24), 0, new Vector2(0, 0), "RIGHT_BOTTOM", [
            new Animation("muve", 20, [
                new Sprite(this.app.assets.find("img", "spaceShip") as HTMLImageElement, new Vector6(47, 450, 21, 44, 0, 0, 21, 44, 10, 0), 50),
                new Sprite(this.app.assets.find("img", "spaceShip") as HTMLImageElement, new Vector6(47, 450, 21, 44, 0, 0, 21, 20, 10, 0), 100),
            ])
        ]);
        this.app.entitys.append("imageEntity", this.motor);

        this.motor.animations.setCurrentAnimation("muve");
        this.motor.animations.getCurrentAnimation().play(true);
        this.motor.animations.getCurrentAnimation().getCurrentSprite().setCallBack((frame: number | boolean) => {
            console.log(frame)
        })
    };
}