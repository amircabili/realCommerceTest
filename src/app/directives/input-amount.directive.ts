import { Directive, ElementRef, Input} from '@angular/core';


@Directive({
  selector: '[appInputAmount]' ,
  host: {'(input)': 'onChange($event)'}
})
export class InputAmountDirective {

  private count = '';
  private charactersRegex = /[^0-9.,\s]/gi;
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
    validRegex = validRegex.replace(/,/g, '');
    validRegex = validRegex.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const indexPoint1 = validRegex.indexOf('.');
    if (indexPoint1 !== -1) {
      validRegex = validRegex.substring(0, indexPoint1 + 3);
    }
    return validRegex;
  }

}
