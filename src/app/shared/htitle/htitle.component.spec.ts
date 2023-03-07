import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTitleComponent } from './htitle.component';

describe('HTitleComponent', () => {
  let component: HTitleComponent;
  let fixture: ComponentFixture<HTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
