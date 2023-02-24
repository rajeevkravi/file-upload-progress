import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Config, FileUploadModel } from './ng-file-uploader.interface';
import { FileModel } from './ng-file-uploader.model';

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
   * config
   */
  @Input()
  config: Config;

  /**
   * uploaded list
   */
  uploadedList: Array<FileModel> = [];

  /**
   * auto save
   */
  autoSave = true;

  /**
   * emit the values
   */
  @Output()
  onUpload: EventEmitter<FileModel[]> = new EventEmitter<FileModel[]>();

  /**
   * constructor to load all dependencies
   */
  constructor() {}

  /**
   * rea file
   */
  readURL(event: any) {
    for (let index = 0; index < event.target.files.length; index++) {
      const file = event.target.files[index];
      this.generateUploadListModel(file)
    }
  }

  /**
   * push file as model
   */
  generateUploadListModel(file: File) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      const data = {
        file: file,
        url: reader.result,
        progress: 0,
      }
      this.uploadedList.push(new FileModel(data));
      this.emitValues();
    };

  }

  /**
   * emit vaklues
   */
  private emitValues() {
    if (this.autoSave) {
      this.onUpload.emit(this.uploadedList);
    }
  }

  //remove added files
  removeAddedFile(index: number) {
    this.uploadedList.splice(index, 1);
    this.emitValues();
  }
}
