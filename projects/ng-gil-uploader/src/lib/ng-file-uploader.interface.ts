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

export interface Config {
  multiple: boolean;
  nameLimit: number;
  accept: string;
  maxFileSize: number;
}

export interface FileInputInterface {
  file : File;
  url : string | any;
  inProgress?: boolean;
  canRetry?: boolean;
  canCancel?: boolean;
  progress?: number;

}