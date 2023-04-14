import { Component } from '@angular/core';
import { FileModel } from 'projects/ng-gil-uploader/src/lib/ng-file-uploader.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'file-uploader';

  onUpload(event : any) {
    console.log(event);
  }

  onRemove(event : FileModel) {
    console.log(event)
  }
}
