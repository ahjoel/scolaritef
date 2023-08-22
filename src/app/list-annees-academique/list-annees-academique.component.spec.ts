import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnneesAcademiqueComponent } from './list-annees-academique.component';

describe('ListAnneesAcademiqueComponent', () => {
  let component: ListAnneesAcademiqueComponent;
  let fixture: ComponentFixture<ListAnneesAcademiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAnneesAcademiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAnneesAcademiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
