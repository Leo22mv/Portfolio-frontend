import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoPortadaComponent } from './portada.component';

describe('FotoPortadaComponent', () => {
  let component: FotoPortadaComponent;
  let fixture: ComponentFixture<FotoPortadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoPortadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotoPortadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
