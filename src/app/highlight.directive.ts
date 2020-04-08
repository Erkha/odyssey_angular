import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {}

  @HostBinding('style.fontSize') myFontSize: string;
  @HostBinding('style.color') myFontColor: string;

  @HostListener('mouseenter') mouseEnterEvent(eventData :Event){
    this.myFontSize = 'larger';
    this.myFontColor = 'red';
  }
  @HostListener('mouseleave') mouseLeaveEvent(eventData :Event){
    this.myFontSize = 'initial';
    this.myFontColor = 'initial';
  }

}
