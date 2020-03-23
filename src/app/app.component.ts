import { Component, OnInit } from '@angular/core';
//import * as p5 from 'p5';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  ngOnInit() {
    //this.createCanvas();
  }

/*  private p5;


  private createCanvas() {
    this.p5 = new p5(this.sketch);
  }

  private sketch(p: p5) {

    let gameObjects: GameObject[] = [];
    let toRemoveObjects : GameObject[] = [];

    p.setup = () => {
      p.frameRate(900);
      p.createCanvas(p.windowWidth, p.windowHeight).parent('canvas');
      gameObjects.push(new Square(p.mouseX, p.mouseY, p));
    };

    p.draw = () => {
      p.background("#262626")

      gameObjects.push(new Square(p.mouseX, p.mouseY, p));

      // Retire les objects morts de la liste
      toRemoveObjects.forEach(obj => {
        let index = gameObjects.indexOf(obj);
        delete gameObjects[index];
      });
      toRemoveObjects = [];
      
      // Supprime les gameobjects null
      gameObjects = gameObjects.filter(function (el) {
        return el != null;
      });

      // Update chaque object
      gameObjects.forEach(gameObject => {
        gameObject.update();
        if (gameObject.destroyed()) {
          toRemoveObjects.push(gameObject);
        }
      });

    };

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    }
  }



}

class GameObject {
  constructor() {
  }

  update(): void {
  }

  destroy(): void {
    this.destoyed = true;
  }
  private destoyed = false;
  public destroyed() : boolean {
    return this.destoyed;
  }

}

class Square extends GameObject{
  constructor(x: number, y: number, p) {
    super();
    this.x = x;
    this.y = y;
    this.p = p;
    this.liveTime = 0;

    let random: number = Math.random()

    this.direction = new p5.Vector(5 * (Math.random() - 0.5), 5 * (Math.random() - 0.5));

    this.sizeX = 2 + Math.random() * 2
    this.sizeY = this.sizeX
  }

  private x: number;
  private y: number;

  private direction: p5.Vector;
  private p;

  private liveTime: number;
  private liveTimeMax: number = 1000;

  private sizeX: number;
  private sizeY: number;

  update(): void {
    this.x += this.direction.x
    this.y += this.direction.y
    this.liveTime += this.p.deltaTime;

    if (this.liveTime >= this.liveTimeMax) {
      this.destroy();
    }
    this.draw();
  }

  draw(): void {
    this.p.noStroke();
    this.p.fill(this.p.color("#f47a9d"));
    this.p.rect(this.x - this.sizeX / 2, this.y - this.sizeY / 2, this.sizeX, this.sizeY);
  }
*/
}
