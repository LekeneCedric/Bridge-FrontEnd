import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mes-associations',
  templateUrl: './mes-associations.page.html',
  styleUrls: ['./mes-associations.page.scss'],
})
export class MesAssociationsPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    const tabBar = document.getElementById('app-tab-bar');
      if (tabBar !== null) {
        tabBar.style.display = 'none';
      }
  }
  navBack(){
    this.router.navigateByUrl('/menu/settings',{replaceUrl:true});
    const tabBar = document.getElementById('app-tab-bar');
      if (tabBar !== null) {
        tabBar.style.display = 'flex';
      }
  }

}
