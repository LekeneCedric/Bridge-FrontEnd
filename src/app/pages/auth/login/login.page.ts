import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private fb:FormBuilder,private authService:AuthService,
    private loadingController:LoadingController,private toast:ToastController,
    private router:Router) { }

  async ngOnInit() {
    this.credential = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
    })
    localStorage.getItem('token') as string !=null?
    this.myToken = localStorage.getItem('token') as string:
    console.log("aucun token trouve")
    if(this.myToken)
    {
      console.log('user present')
      const token = localStorage.getItem('token');
      this.authService.validToken(token).toPromise().then(
        data=>{
          this.router.navigateByUrl('/menu/dons',{replaceUrl:true});
        }
      ).catch(err=>{
        console.log('invalidToken');
      });
    }
    else{

    }
    
  }
  /*-----------------------------VARIABLES-----------------------------------------------*/
  private myToken:string = null;
  credential:FormGroup;
  term_condition:boolean = false;
  password_input_type:string = 'password';
  public switchToAssociation:boolean = false;

  /*-----------------------------FUNCTIONS-----------------------------------------------*/
  public async signIN(){
    const loading = await this.loadingController.create({
      spinner: 'lines-small',
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
    });
    await loading.present();
    const credential = { 
      email:this.email.value,
      password:this.password.value,
    }
    this.authService.signIn(credential).toPromise().then(
     async data=>{
      console.log(data)
      localStorage.setItem('token',data.token);
      localStorage.setItem('mydata',JSON.stringify( data.user));
      this.myToken = localStorage.getItem('token') as string;
      loading.dismiss();
      //on affiche un message de success
      const toast = this.toast.create({
        message:`${data.message}`,
        icon: 'information-circle',
        duration:1000,
        color:"success"
      });
      this.ngOnInit();
      (await (toast)).present();  
      
          // this.router.navigateByUrl('/menu/dons',{replaceUrl:true});
      }
    ).catch(async err=>{
      console.log(err)
        loading.dismiss();
        const toast = this.toast.create({
          message:`Compte invalide / probleme connexion`,
          icon: 'alert',
          duration:1000,
          color:"danger"
        });
        (await (toast)).present();  
    })
  }
  public changePassInputType(){
    this.password_input_type == 'password'?this.password_input_type='text':this.password_input_type="password"
  }
  get email(){return this.credential.get('email');}
  get password(){return this.credential.get('password');}
}
