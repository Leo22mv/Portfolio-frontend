import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNombreComponent } from './edit-nombre.component';

describe('EditNombreComponent', () => {
  let component: EditNombreComponent;
  let fixture: ComponentFixture<EditNombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNombreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
