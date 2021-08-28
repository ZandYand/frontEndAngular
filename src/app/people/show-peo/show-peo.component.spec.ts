import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPeoComponent } from './show-peo.component';

describe('ShowPeoComponent', () => {
  let component: ShowPeoComponent;
  let fixture: ComponentFixture<ShowPeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPeoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
