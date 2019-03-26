import { Component, OnInit } from '@angular/core';
import { ViewportRuler } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-test-ruler',
  templateUrl: './test-ruler.component.html',
  styleUrls: ['./test-ruler.component.scss'],
  host: {
    'style': 'background-color: blue;'
  }
})
export class TestRulerComponent implements OnInit {
  vpWidth: any = 0;
  widthSubtraction = 50;
  contWidth = this.vpWidth - this.widthSubtraction;
  
  vpHeight: any = 0;
  heightSubtraction = 200;
  contHeight = this.vpHeight - this.heightSubtraction;

  constructor(private vr: ViewportRuler) { }

  ngOnInit() {
    console.log(this.vr.getViewportSize());
    this.vpWidth = this.vr.getViewportSize().width;
    this.contWidth = this.vpWidth - this.widthSubtraction;

    this.vpHeight = this.vr.getViewportSize().height;
    this.contHeight = this.vpHeight - this.heightSubtraction;

    console.log(this.vpWidth, this.vpHeight);
    console.log(TestRulerComponent.prototype);
  }

}