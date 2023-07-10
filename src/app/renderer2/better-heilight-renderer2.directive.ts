import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHeilightRenderer2]',
})
export class BetterHeilightRenderer2Directive implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'backgroundColor',
      'yellow'
    );
  }
}
