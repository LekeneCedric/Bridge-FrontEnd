import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private authService:AuthService,private router:Router) {}
  ngOnInit(): void {
    // if(JSON.parse(localStorage.getItem('mydata')).name)
    // {
    //   this.router.navigate(['/login']);
    // }
    // else{
    //   this.router.navigate(['/splashscreen']);
    // }
  }
}
