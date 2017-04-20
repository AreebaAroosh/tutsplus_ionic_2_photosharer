import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PickerPage } from './picker-page';

@NgModule({
  declarations: [
    PickerPage,
  ],
  imports: [
    IonicPageModule.forChild(PickerPage),
  ],
  exports: [
    PickerPage
  ]
})
export class PickerPageModule {}
