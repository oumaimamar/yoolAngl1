import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRespComponent } from './home-resp.component';

describe('HomeRespComponent', () => {
  let component: HomeRespComponent;
  let fixture: ComponentFixture<HomeRespComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeRespComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
