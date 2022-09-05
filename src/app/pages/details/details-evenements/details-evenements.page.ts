import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-details-evenements',
  templateUrl: './details-evenements.page.html',
  styleUrls: ['./details-evenements.page.scss'],
})
export class DetailsEvenementsPage implements OnInit {

 
  constructor(private navCtrl:NavController) { }

  ngOnInit() {
    const tabBar = document.getElementById('app-tab-bar');
  if (tabBar !== null) {
    tabBar.style.display = 'none';
  }
  }
  navBack(){
    this.navCtrl.back();
  }
}
