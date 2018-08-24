import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesStagesComponent } from './types-stages.component';

describe('TypesStagesComponent', () => {
  let component: TypesStagesComponent;
  let fixture: ComponentFixture<TypesStagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypesStagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
