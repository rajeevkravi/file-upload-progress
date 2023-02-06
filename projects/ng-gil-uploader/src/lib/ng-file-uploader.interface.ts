import { Subscription } from "rxjs";

export interface FileUploadModel {
    data: File;
    state: string;
    uploadedUrl: string | any;
    inProgress: boolean;
    progress: number;
    canRetry: boolean;
    canCancel: boolean;
    sub?: Subscription;
  }