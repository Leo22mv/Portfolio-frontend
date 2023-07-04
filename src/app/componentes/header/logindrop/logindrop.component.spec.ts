import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogindropComponent } from './logindrop.component';

describe('LogindropComponent', () => {
  let component: LogindropComponent;
  let fixture: ComponentFixture<LogindropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogindropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogindropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
