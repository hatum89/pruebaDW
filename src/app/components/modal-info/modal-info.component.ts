import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {AstronautInterface} from '../../../interfaces/astronaut-interface';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.scss']
})
export class ModalInfoComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: AstronautInterface,
              private matDialog: MatDialog) { }

  ngOnInit(): void {
  }
  closeDialog(): void {
    this.matDialog.closeAll();
  }
}
