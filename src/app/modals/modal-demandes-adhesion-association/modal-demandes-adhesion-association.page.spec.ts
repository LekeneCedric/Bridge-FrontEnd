import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalDemandesAdhesionAssociationPage } from './modal-demandes-adhesion-association.page';

describe('ModalDemandesAdhesionAssociationPage', () => {
  let component: ModalDemandesAdhesionAssociationPage;
  let fixture: ComponentFixture<ModalDemandesAdhesionAssociationPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDemandesAdhesionAssociationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalDemandesAdhesionAssociationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
