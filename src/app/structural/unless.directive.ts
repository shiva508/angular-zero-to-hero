import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]',
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRf.createEmbeddedView(this.templateRef);
    } else {
      this.vcRf.clear();
    }
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRf: ViewContainerRef
  ) {}
}
