import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNombreComponent } from './input-nombre.component';

describe('InputNombreComponent', () => {
  let component: InputNombreComponent;
  let fixture: ComponentFixture<InputNombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputNombreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
