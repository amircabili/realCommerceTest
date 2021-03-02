import { Directive,ElementRef,Input} from '@angular/core';

@Directive({
  selector: '[appInputOnlyEnglish]',
  host: {'(input)': 'onChange($event)'}
})
export class InputOnlyEnglishDirective {
  private count = "";
  private charactersRegex = /[^A-Za-z0-9/?:().,'\-\s]/gi;
  @Input() public input: any;

  constructor(private el: ElementRef) { }

  onChange($event) {
    this.count = this.check_regexp(this.el.nativeElement.value);
    this.el.nativeElement.value = this.count;
  }

  check_regexp(data) {
    var _validRegex = "";
    _validRegex = data.replace(this.charactersRegex, '');
    return _validRegex;

  }
}
