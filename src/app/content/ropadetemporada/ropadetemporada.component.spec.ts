import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopadetemporadaComponent } from './ropadetemporada.component';

describe('RopadetemporadaComponent', () => {
  let component: RopadetemporadaComponent;
  let fixture: ComponentFixture<RopadetemporadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RopadetemporadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RopadetemporadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
