import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mas } from './mas';

describe('Mas', () => {
  let component: Mas;
  let fixture: ComponentFixture<Mas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
