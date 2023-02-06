import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFileUploaderComponent } from './ng-file-uploader.component';

describe('NgGilUploaderComponent', () => {
  let component: NgFileUploaderComponent;
  let fixture: ComponentFixture<NgFileUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgFileUploaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgFileUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
