import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationMailComponent } from './notification-mail.component';

describe('NotificationMailComponent', () => {
  let component: NotificationMailComponent;
  let fixture: ComponentFixture<NotificationMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationMailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
