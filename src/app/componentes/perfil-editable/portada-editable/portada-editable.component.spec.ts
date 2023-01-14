import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadaEditableComponent } from './portada-editable.component';

describe('PortadaEditableComponent', () => {
  let component: PortadaEditableComponent;
  let fixture: ComponentFixture<PortadaEditableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortadaEditableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortadaEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
