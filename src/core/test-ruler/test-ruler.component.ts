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
  contWidth;
  cont2Width;

  vpHeight: any = 0;
  heightSubtraction = 200;
  contHeight;
  cont2Height;

  changeSubscription$;

  changeObserver = {
    next: x => console.log('Viewport change detected'),
    complete: () => this.setSize()
  };

  constructor(private vr: ViewportRuler) {
    
  }

  ngOnInit() {
    this.setSize();
    this.vr.change().subscribe(() => {
      this.setSize();
    });
  }

  setSize() {
    console.log(this.vr.getViewportSize());

    this.vpWidth = this.vr.getViewportSize().width;
    this.contWidth = this.vpWidth - this.widthSubtraction;
    this.cont2Width = this.contWidth - 40;

    this.vpHeight = this.vr.getViewportSize().height;
    this.contHeight = this.vpHeight - this.heightSubtraction;
    this.cont2Height = this.contHeight/4;

    console.log(this.vpWidth, this.vpHeight);
  }

}