import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddActivityComponent } from './addd-activity.component';

describe('AdddActivityComponent', () => {
  let component: AdddActivityComponent;
  let fixture: ComponentFixture<AdddActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdddActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
