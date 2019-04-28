import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayFruitComponent } from './play-fruit.component';

describe('PlayFruitComponent', () => {
  let component: PlayFruitComponent;
  let fixture: ComponentFixture<PlayFruitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayFruitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayFruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
