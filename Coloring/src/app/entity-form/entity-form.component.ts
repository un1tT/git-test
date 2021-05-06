import {Component, Inject, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EntityListComponent} from '../entity-list/entity-list.component';
import {AppEntity} from '../entity-list/entity-list.constant';

@Component({
  selector: 'app-entity-form',
  templateUrl: './entity-form.component.html',
  styleUrls: ['./entity-form.component.scss']
})
export class EntityFormComponent implements OnInit {
  name = new FormControl('');
  description = new FormControl('');

  constructor(
    public dialogRef: MatDialogRef<EntityListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AppEntity) { }

  ngOnInit(): void {
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
