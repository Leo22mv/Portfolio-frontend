import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreEditableComponent } from './nombre-editable.component';

describe('NombreEditableComponent', () => {
  let component: NombreEditableComponent;
  let fixture: ComponentFixture<NombreEditableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NombreEditableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NombreEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
