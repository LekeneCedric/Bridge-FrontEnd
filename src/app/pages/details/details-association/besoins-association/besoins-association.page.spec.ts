import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BesoinsAssociationPage } from './besoins-association.page';

describe('BesoinsAssociationPage', () => {
  let component: BesoinsAssociationPage;
  let fixture: ComponentFixture<BesoinsAssociationPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BesoinsAssociationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BesoinsAssociationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
