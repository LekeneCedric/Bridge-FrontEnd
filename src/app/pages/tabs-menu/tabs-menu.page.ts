import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-tabs-menu',
  templateUrl: './tabs-menu.page.html',
  styleUrls: ['./tabs-menu.page.scss'],
})
export class TabsMenuPage implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {

  }

}
