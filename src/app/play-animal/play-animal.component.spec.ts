import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayAnimalComponent } from './play-animal.component';

describe('PlayAnimalComponent', () => {
  let component: PlayAnimalComponent;
  let fixture: ComponentFixture<PlayAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
