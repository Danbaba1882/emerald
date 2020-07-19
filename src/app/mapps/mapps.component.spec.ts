import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MappsComponent } from './mapps.component';

describe('MappsComponent', () => {
  let component: MappsComponent;
  let fixture: ComponentFixture<MappsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MappsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
