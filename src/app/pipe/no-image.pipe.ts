import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(image:string): string {
    if(!typeof image){
      return 'assets/img/Not-Found.png';
    }
    if(typeof image){
      return 'assets/img/qr-683354.svg'
    } else {
     return  'assets/img/Not-Found.png';
    }
  }
}
