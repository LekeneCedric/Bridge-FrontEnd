import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
})
export class SplashscreenPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('userData')){
    this.router.navigateByUrl('/menu',{replaceUrl:true})
    }
  }

}
