import {Directive, ElementRef, OnInit, Renderer2, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appInputSearch]',
  host: {
    '[style.border-radius]': '"4px"',
    '[style.border]': '"none"',
    '[style.background-color]': '"#F6F6F6"',
    '[style.padding]': '"12px 24px"',
    '[style.font-size]': '"18px"',
    '[placeholder]': "'Search'"
  }
})
export class InputSearchDirective implements OnInit {

  constructor(private elementRef: ElementRef, private vc: ViewContainerRef) {}

  public ngOnInit() {
  }

}
