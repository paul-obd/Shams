import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBraceletComponent } from './home-bracelet.component';

describe('HomeBraceletComponent', () => {
  let component: HomeBraceletComponent;
  let fixture: ComponentFixture<HomeBraceletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBraceletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBraceletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
