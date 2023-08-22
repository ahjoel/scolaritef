import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAnneeAcademiqueComponent } from './edit-annee-academique.component';

describe('EditAnneeAcademiqueComponent', () => {
  let component: EditAnneeAcademiqueComponent;
  let fixture: ComponentFixture<EditAnneeAcademiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAnneeAcademiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAnneeAcademiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
