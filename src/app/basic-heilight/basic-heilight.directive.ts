import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHeilight]',
})
export class BasicHeilightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
