import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private fb:FormBuilder,private authService:AuthService,
    private loadingController:LoadingController,private toast:ToastController,
    private router:Router) { }

  ngOnInit() {
    this.credential = this.fb.group({
      name:['',[Validators.required,Validators.minLength(6)]],
      surname:['',[Validators.required,Validators.minLength(6)]],
      email:['',[Validators.required,Validators.email]],
      birthday:[''],
      gender:['',[Validators.required]],
      codeCountry:['',[Validators.required]],
      contact:['',[Validators.required,Validators.minLength(6)]],
      country:['',[Validators.required,Validators.minLength(3)]],
      city:['',[Validators.required,Validators.minLength(3)]],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['',[Validators.required,Validators.minLength(6)]],
    })
  }
  /*-----------------------------VARIABLES-----------------------------------------------*/
  credential:FormGroup;
  term_condition:boolean = false;
  password_input_type:string = 'password';
  password_confirm_input_type:string = 'password';
  
  
  /*-----------------------------------------_FUNCTIONS------------------------------------ */
  
  public async signUP(){
    const loading = await this.loadingController.create({
      spinner: 'lines-small',
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
    });
    await loading.present();
    const credential = {
      name: this.name.value,
      surname:this.surname.value,
      email:this.email.value,
      date_naissance:!isNaN(Date.parse(this.birthday.value))?this.birthday.value:null,
      sexe:this.gender.value,
      contact:Number(this.codeCountry.value+this.contact.value),
      pays:this.country.value,
      ville:this.city.value,
      password:this.password.value,
      password_confirmation:this.confirmPassword.value
    }
    this.authService.signup(credential).toPromise().then(
     async data=>{
      loading.dismiss();
      localStorage.setItem('token',data.token);
      localStorage.setItem('mydata',JSON.stringify( data.user));
      //on affiche un message de success
      const toast = this.toast.create({
        message:`Bienvenue ${data.user.name}`,
        icon: 'hand-left-outline',
        duration:2000,
        color:"success"
      });
      (await (toast)).present();  
          this.router.navigateByUrl('/menu/dons',{replaceUrl:true});
      }
    ).catch(async err=>{
        loading.dismiss();
        const toast = this.toast.create({
          message:`${err.message}`,
          icon: 'alert',
          duration:2000,
          color:"danger"
        });
        (await (toast)).present();  
    })
  }
  public test(){
    console.log(this.credential.value);
  }
  public validcondition(){
    this.term_condition = !this.term_condition;
  }
  public  passwordMatching():boolean{
    const password = this.password.value;
    const passwordConf = this.confirmPassword.value;
    return true ? password == passwordConf : false;
    }
  public changePassInputType(){
    this.password_input_type == 'password'?this.password_input_type='text':this.password_input_type="password"
  }
  public changePassConfirmInputType(){
    this.password_confirm_input_type == 'password'?this.password_confirm_input_type='text':
    this.password_confirm_input_type="password";
  }
  get isDate(){
    console.log(!isNaN( Date.parse(this.birthday.value)));
    return !isNaN(Date.parse(this.birthday.value));
  }
  get name(){return this.credential.get('name');}
  get surname(){return this.credential.get('surname');}
  get email(){return this.credential.get('email');}
  get birthday(){return this.credential.get('birthday');}
  get gender(){return this.credential.get('gender');}
  get codeCountry(){return this.credential.get('codeCountry');}
  get contact(){return this.credential.get('contact');}
  get country(){return this.credential.get('country');}
  get city(){return this.credential.get('city');}
  get password(){return this.credential.get('password');}
  get confirmPassword(){return this.credential.get('confirmPassword');}
  

}
