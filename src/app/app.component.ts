import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;

  ngOnInit(): void {
    //this.ctx = this.canvas.nativeElement.getContext('2d');
    //this.ctx.fillStyle = "red";
    //this.ctx.fillRect(5, 150, 10, 200);
    //console.log("init");
  }

}


