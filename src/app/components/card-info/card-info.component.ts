import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {
  @Input('location') location:string;
  @Input('wayOut') wayOut:string;
  @Input('arrival') arrival:string;
  @Input('person') person:number;
  @Output()close: EventEmitter<boolean> = new EventEmitter();
  image: any;
  constructor() { }

  ngOnInit(): void {
  }
  closed(){
    this.close.emit(false);
  }

  link() {
    window.open('https://www.linkedin.com/in/juan-hatum-varela-b1481b15b/', '_blank');
  }
}
