import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRingsComponent } from './home-rings.component';

describe('HomeRingsComponent', () => {
  let component: HomeRingsComponent;
  let fixture: ComponentFixture<HomeRingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
