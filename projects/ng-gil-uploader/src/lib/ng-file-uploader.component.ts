import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileUploadModel } from './ng-file-uploader.interface';

/**
 * component to handle the file upload
 */
@Component({
  selector: 'lib-ng-gil-uploader',
  templateUrl: './ng-file-uploader.component.html',
  styleUrls: ['./ng-file-uploader.component.scss']
})
export class NgFileUploaderComponent {
/**
   * label to show in the button
   */
@Input() buttonLabel = 'Drop your image here, or ';

/**
 * browse label
 */
@Input() browseLabel = 'Browse';

/**
 * supporting files
 */
@Input() supportingFormats = ['JPG, JPEG', 'GIF', 'PDF'];

/**
 * is multiple
 */
@Input() isMultiple = true;

/**
 * show thumbnails
 */
@Input() showThumbnails = false;

/**
 * uploaded list
 */
uploadedList: Array<FileUploadModel> = [];

/**
 * emit the values
 */
@Output()
onUpload : EventEmitter<FileUploadModel[]> = new EventEmitter<FileUploadModel[]>();

imageUrl: string | any = '';
imageName: string | any = '';

/**
 * constructor to load all dependencies
 */
constructor() {

}

/**
 * rea file
 */
readURL(event: any) {

  // const file = URL.createObjectURL(event.target.files[0]);
  console.log(event.target.files)
  for (let index = 0; index < event.target.files.length; index++) {
    const file = event.target.files[index];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(file);
    reader.onload = (_event) => {
      this.uploadedList.push({
        data: file,
        state: 'in',
        uploadedUrl: reader.result,
        inProgress: false,
        progress: 0,
        canRetry: false,
        canCancel: true,
      });

      this.emitValues();
    };
  }
}

/**
 * emit vaklues
 */
emitValues() {
  this.onUpload.emit(this.uploadedList);
}

//remove added files
removeAddedFile(index : number) {
  this.uploadedList.splice(index, 1);
  this.emitValues();
}
}
