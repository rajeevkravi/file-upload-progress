import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgFileUploaderComponent } from './ng-file-uploader.component';



@NgModule({
  declarations: [
    NgFileUploaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgFileUploaderComponent
  ]
})
export class NgFileUploaderModule { }
