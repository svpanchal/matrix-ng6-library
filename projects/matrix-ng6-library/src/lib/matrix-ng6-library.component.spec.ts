import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixNg6LibraryComponent } from './matrix-ng6-library.component';

describe('MatrixNg6LibraryComponent', () => {
  let component: MatrixNg6LibraryComponent;
  let fixture: ComponentFixture<MatrixNg6LibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrixNg6LibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrixNg6LibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
