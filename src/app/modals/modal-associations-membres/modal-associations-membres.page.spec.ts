import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalAssociationsMembresPage } from './modal-associations-membres.page';

describe('ModalAssociationsMembresPage', () => {
  let component: ModalAssociationsMembresPage;
  let fixture: ComponentFixture<ModalAssociationsMembresPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAssociationsMembresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalAssociationsMembresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
