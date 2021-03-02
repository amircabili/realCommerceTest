import { Directive, ElementRef, Input} from '@angular/core';


@Directive({
  selector: '[appFileUpload]' ,
  host: {'(input)': 'onChange($event)'}
})
export class FileUploadDirective  {
  @Input() public input: any;
  $event: any;

  constructor(private el: ElementRef) { }


  onChange($event) {
    const file = this.el.nativeElement.files[0];
    this.getFile(file).then((response) => {
      this.el.nativeElement.value = {
        fileName : file,
        data : response
      };
    })
      .catch((error) => {
        //
      });
  }

  getFile(file) {
    const promise = new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      // tslint:disable-next-line:only-arrow-functions
      reader.onload = function() {
        resolve(reader.result);
      };
      // tslint:disable-next-line:only-arrow-functions
      reader.onerror = function(error) {
        reject(error);
      };
    });
    return promise;
  }
}
