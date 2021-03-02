
import {Directive, ElementRef, Input, Renderer} from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[appCurrency]'
})
export class CurrencyDirective {



  constructor(public el: ElementRef, public renderer: Renderer) {}

  @Input() myHidden: boolean;

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    // Use renderer to render the emelemt with styles
    console.log(this.myHidden);
    if (this.myHidden) {
      console.log('hide');
      this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
    }
  }

}
