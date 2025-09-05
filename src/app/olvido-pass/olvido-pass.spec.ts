import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlvidoPass } from './olvido-pass';

describe('OlvidoPass', () => {
  let component: OlvidoPass;
  let fixture: ComponentFixture<OlvidoPass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OlvidoPass]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlvidoPass);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
