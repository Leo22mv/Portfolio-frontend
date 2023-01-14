import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilEditableComponent } from './perfil-editable.component';

describe('PerfilEditableComponent', () => {
  let component: PerfilEditableComponent;
  let fixture: ComponentFixture<PerfilEditableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilEditableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
