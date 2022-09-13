import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';
import { ManageDataService } from './services/manage-data/manage-data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private authService:AuthService,private router:Router,private manageDataService:ManageDataService) {
    
  }
  ngOnInit(): void {

    // let token  = localStorage.getItem('token') as string;
    // setInterval(()=>{
    //   this.authService.validToken(token).toPromise().then(
    //     data=>{
    //       console.log('validToken')
    //     }
    //   ).catch(err=>{
    //     console.log('invalidToken')
    //     localStorage.removeItem('token')
    //     this.router.navigateByUrl('/login',{replaceUrl:true});
    //   });
    // },5000) 
    // if(JSON.parse(localStorage.getItem('mydata')).name)
    // {
    //   this.router.navigate(['/login']);
    // }
    // else{
    //   this.router.navigate(['/splashscreen']);
    // }
  }
}
