import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem } from '@capacitor/filesystem';
import { ModalController, Platform, ToastController } from '@ionic/angular';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';
import { MediasService } from 'src/app/services/medias/medias.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal-edit-profil',
  templateUrl: './modal-edit-profil.page.html',
  styleUrls: ['./modal-edit-profil.page.scss'],
})
export class ModalEditProfilPage implements OnInit {
 
  constructor(private http:HttpClient,private manageDataService:ManageDataService,
    private toast:ToastController,private modalCtrl:ModalController,private platform:Platform,
    private mediaService:MediasService) { }

  ngOnInit() {
    console.log(this.user)
    this.userInfo = this.user;
    this.name = this.user.name;
    this.surname = this.user.surname;
    this.date_naissance = this.user.date_naissance;
    this.contact = this.user.contact;
  }
  @Input() user:any;
  public userInfo:any;
  public name:string ;
  public surname:string ;
  public date_naissance:string ;
  public code:number ;
  public contact:number ;
  public storage = environment.storage;
  public updateImage:any = null;
  test(){
    console.log(this.name,this.surname,this.date_naissance,this.code,this.contact);
  }
  public async getPicture(){
    const image = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source:CameraSource.Camera,
      quality:100
    });
    if(image){
      this.saveImage(image)
    }
  }
  public async saveImage(image:Photo){
  const base64data = await this.readAsBase64(image);
  const filename = new Date().getTime()+'.jpeg';
  const img = {
    path:filename,
    data:base64data
  }
  setTimeout(() => {
    this.updateImage=img}), 500
  }
  public async readAsBase64(photo:any){
    
      const res = await fetch(photo.webPath);
      const blob = await res.blob();
      return await this.convertBlobToBase64(blob) as string;
    
  }
  public convertBlobToBase64 = (blob:Blob)=>new Promise((resolve, reject)=>{
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {resolve(reader.result)};
    reader.readAsDataURL(blob);
  })
  updateProfil(){
    const data = {
      name:this.name,
      surname:this.surname,
      date_naissance:this.date_naissance,
      contact:this.contact.toString()
    }
    this.manageDataService.updateProfil(this.user.id,data).toPromise().then(
      async data=>{
        if(this.updateImage!=null){
          const token = localStorage.getItem('token');
          let fd = {
            donateur_id:this.user.id,
            files:this.updateImage
          }
            this.mediaService.uploadImageProfil(token,fd).then(async data=>{
            //on affiche un message de success
            setTimeout(async ()=>{
              const toast = this.toast.create({
                message:`profil modifie avec success`,
                icon: 'alert',
                duration:1000,
                color:"warning"
              });
              (await (toast)).present();  
              this.confirm();
            },1000)
            
               
            })
        }
        else{
          const toast = this.toast.create({
            message:`profil modifie avec success`,
            icon: 'alert',
            duration:1000,
            color:"warning"
          });
          (await (toast)).present();  
          this.confirm();
        }
       
        
      }
    ).catch(er=>{

    })
  }
  confirm(){
    return this.modalCtrl.dismiss(null, 'confirm');
  }

}
