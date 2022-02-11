import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLogoPartComponent } from './header-logo-part.component';

describe('HeaderLogoPartComponent', () => {
  let component: HeaderLogoPartComponent;
  let fixture: ComponentFixture<HeaderLogoPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLogoPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLogoPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
