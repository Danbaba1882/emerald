import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailmComponent } from './emailm.component';

describe('EmailmComponent', () => {
  let component: EmailmComponent;
  let fixture: ComponentFixture<EmailmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
