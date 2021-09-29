import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFileManagerComponent } from './custom-file-manager.component';

describe('CustomFileManagerComponent', () => {
  let component: CustomFileManagerComponent;
  let fixture: ComponentFixture<CustomFileManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomFileManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFileManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
