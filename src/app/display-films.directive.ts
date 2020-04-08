import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDisplayFilms]'
})
export class DisplayFilmsDirective {

  
  @Input() set appDisplayFilms(condition: boolean){
    if (condition) {
      this.ctrRef.createEmbeddedView(this.tplRef);
    } else {
      this.ctrRef.clear;
    }
  }
  constructor(private tplRef: TemplateRef, private ctrRef: ViewContainerRef) { }
}
