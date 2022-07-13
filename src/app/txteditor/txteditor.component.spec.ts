import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxteditorComponent } from './txteditor.component';

describe('TxteditorComponent', () => {
  let component: TxteditorComponent;
  let fixture: ComponentFixture<TxteditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxteditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxteditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
