import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequeteApiComponent } from './requete-api.component';

describe('RequeteApiComponent', () => {
  let component: RequeteApiComponent;
  let fixture: ComponentFixture<RequeteApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequeteApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequeteApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
