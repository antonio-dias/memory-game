import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayFootballComponent } from './play-football.component';

describe('PlayFootballComponent', () => {
  let component: PlayFootballComponent;
  let fixture: ComponentFixture<PlayFootballComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayFootballComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayFootballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
