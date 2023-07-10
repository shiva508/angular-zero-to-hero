import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appBetterHeilightDynamicHostBinding]',
})
export class BetterHeilightDynamicHostBindingDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() heilightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string =
    this.defaultColor;

  constructor() {}
  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mousehover(eventData: Event) {
    this.backgroundColor = this.heilightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }
}
