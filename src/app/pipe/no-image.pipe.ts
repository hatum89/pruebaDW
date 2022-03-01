import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(image:any): string {
    if(!image){
      return 'Not-Found';
    }
    if(image){
      return 'assets/img/qr-683354.svg'
    } else {
     return  '/Not-Found';
    }
  }
}
