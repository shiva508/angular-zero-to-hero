import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHeilightHostBinding]',
})
export class BetterHeilightHostBindingDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor() {}

  @HostListener('mouseenter') mousehover(eventData: Event) {
    this.backgroundColor = 'red';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'transparent';
  }
}
