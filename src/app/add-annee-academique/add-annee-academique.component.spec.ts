import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnneeAcademiqueComponent } from './add-annee-academique.component';

describe('AddAnneeAcademiqueComponent', () => {
  let component: AddAnneeAcademiqueComponent;
  let fixture: ComponentFixture<AddAnneeAcademiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAnneeAcademiqueComponent]
    });
    fixture = TestBed.createComponent(AddAnneeAcademiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
