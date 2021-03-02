import { Directive, ElementRef, Input} from '@angular/core';


@Directive({
  selector: '[appInputSwiftChara]' ,
  host: {'(input)': 'onChange($event)'}
})
export class InputSwiftCharaDirective {

  private count = '';
  private charactersRegex = /[^A-Za-z0-9/?:().,'\-\s]/gi;
  @Input() public input: any;
  $event: any;

  constructor(private el: ElementRef) { }


  onChange($event) {
    this.count = this.check_regexp(this.el.nativeElement.value);
    this.el.nativeElement.value = this.count;
  }

  check_regexp(data) {
    let validRegex = '';
    validRegex = data.replace(this.charactersRegex, '');
    validRegex = validRegex.toUpperCase();
    return validRegex;

  }

}
