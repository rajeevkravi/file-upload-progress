import { Subscription } from "rxjs";
import { FileInputInterface } from "./ng-file-uploader.interface";

export class FileModel {
    data: File;
    state: string;
    url: string | any;
    inProgress: boolean;
    progress: number;
    canRetry: boolean;
    canCancel: boolean;
    sub?: Subscription;

    constructor(data: FileInputInterface) {
        this.data = data.file;
        this.url = data.url;
        this.inProgress = true;
        this.progress = 0;
        this.canRetry = false;
        this.canCancel = false;

    }
}
