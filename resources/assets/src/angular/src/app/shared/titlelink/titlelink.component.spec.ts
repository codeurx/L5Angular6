import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlelinkComponent } from './titlelink.component';

describe('TitlelinkComponent', () => {
  let component: TitlelinkComponent;
  let fixture: ComponentFixture<TitlelinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitlelinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlelinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
