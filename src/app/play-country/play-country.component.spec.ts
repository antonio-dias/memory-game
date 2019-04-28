import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayCountryComponent } from './play-country.component';

describe('PlayCountryComponent', () => {
  let component: PlayCountryComponent;
  let fixture: ComponentFixture<PlayCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
