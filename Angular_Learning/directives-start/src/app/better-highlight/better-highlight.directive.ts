import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2, OnInit} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor : string = 'transparent';
  @Input() highlightedColor : string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor : string;

  constructor(private elementRef : ElementRef, private renderer : Renderer2) {

    //renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'blue')
  }
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseOver(eventData : Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'blue')
    this.backgroundColor = this.highlightedColor
  }

  @HostListener('mouseleave') mouseLeave(eventData : Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'transparent')
    this.backgroundColor = this.defaultColor;
  }
}
