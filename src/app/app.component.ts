import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

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
}

  /*
  private p5;


  private createCanvas() {
    this.p5 = new p5(this.sketch);
  }

  private sketch(p: p5) {

    let gameObjects: GameObject[] = [];
    let toRemoveObjects : GameObject[] = [];
    let filterCounter = 0;

    p.setup = () => {
      p.frameRate(900);
      p.createCanvas(p.windowWidth, p.windowHeight).parent('canvas');
      gameObjects.push(new Square(p.mouseX, p.mouseY, p));
    };

    p.draw = () => {
      p.background("#262626")
      filterCounter ++;
      if (!(filterCounter % 30)) gameObjects.push(new Square(p.mouseX, p.mouseY, p));

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

*/


/*
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

class Utils {
  static getRandomBetween<T, Array>(array: T[]) : T {
    return array[Math.floor(Math.random() * array.length)]
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

    //this.direction = new p5.Vector(5 * (Math.random() - 0.5), 5 * (Math.random() - 0.5));
    this.direction = Utils.getRandomBetween([new p5.Vector(-1, 0), new p5.Vector(1, 0), new p5.Vector(0, 1), new p5.Vector(0, -1)]),


    this.sizeX = 8 + Math.random() * 2
    this.sizeY = this.sizeX
    this.color = this.p.color(100 + Math.random() * 155, 100 +  Math.random() * 155, 100 + Math.random() * 155)
    this.speed = 3;
  }

  private x: number;
  private y: number;
  private speed: number;
  private color: p5.Color;
  private direction: p5.Vector;
  private p;

  private liveTime: number;
  private liveTimeMax: number = 8000;

  private sizeX: number;
  private sizeY: number;

  update(): void {
    this.x += this.direction.x * this.speed;
    this.y += this.direction.y * this.speed;
    this.liveTime += this.p.deltaTime;

    if (Math.random() < 0.005) this.changeDirection();

    if (this.liveTime >= this.liveTimeMax) {
      this.destroy();
    }

    this.draw();
  }

  changeDirection() {
    this.direction = Utils.getRandomBetween([new p5.Vector(-1, 0), new p5.Vector(1, 0), new p5.Vector(0, 1), new p5.Vector(0, -1)]);
  }

  draw(): void {
    this.p.noStroke();
    this.p.fill(this.p.color(20));
    this.p.rect(this.x - this.sizeX / 2, this.y - this.sizeY / 2, this.sizeX, this.sizeY)
  }*/


