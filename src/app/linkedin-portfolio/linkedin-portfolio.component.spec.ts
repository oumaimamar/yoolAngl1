import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinPortfolioComponent } from './linkedin-portfolio.component';

describe('LinkedinPortfolioComponent', () => {
  let component: LinkedinPortfolioComponent;
  let fixture: ComponentFixture<LinkedinPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinkedinPortfolioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedinPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
