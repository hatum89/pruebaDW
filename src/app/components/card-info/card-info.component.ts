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

  constructor() { }

  ngOnInit(): void {
  }
  closed(){
    this.close.emit(false);
  }
}
