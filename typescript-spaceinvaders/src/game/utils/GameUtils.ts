import { Point } from "./Point";
import { Rectangle } from "./Rectangle";
import { Bullet } from "./../entities/Bullet";
import { Entity } from "./../entities/Entity";

export class GameUtils {

    public static getCurrentSpeed(level: number): number {
        return Math.max(4, 19 - level);
    }

    public static getEnemyPath(): Array<Point> {
        let enemyPath: Array<Point> = new Array<Point>();
        enemyPath.push( new Point( -10, 0 ) );
        enemyPath.push( new Point( -10, 0 ) );
        enemyPath.push( new Point( 0, 5 ) );
        enemyPath.push( new Point( 10, 0 ) );
        enemyPath.push( new Point( 10, 0 ) );
        enemyPath.push( new Point( 10, 0 ) );
        enemyPath.push( new Point( 10, 0 ) );
        enemyPath.push( new Point( 0, 5 ) );
        enemyPath.push( new Point( -10, 0 ) );
        enemyPath.push( new Point( -10, 0 ) );
        return enemyPath;
    }

    public static isCollision(bullet: Entity, entity: Entity): boolean {
        let bulletRec: Rectangle = new Rectangle(bullet.x - 3, bullet.y - 5, 6, 10);
        let entityRec: Rectangle = new Rectangle(entity.x - 9, entity.y - 9, 18, 18);

        return bulletRec.intersects(entityRec);
    }
}