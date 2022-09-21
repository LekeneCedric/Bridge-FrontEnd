import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';
import { MediasService } from 'src/app/services/medias/medias.service';

@Component({
  selector: 'app-creation-annonces',
  templateUrl: './creation-annonces.page.html',
  styleUrls: ['./creation-annonces.page.scss'],
})
export class CreationAnnoncesPage implements OnInit {

  constructor(private route:ActivatedRoute,private manageDataService:ManageDataService,
    private navCtrl:NavController,private loadingController:LoadingController,
    private mediaService:MediasService,private router:Router,private toast:ToastController
    ) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id_association'];
    this.manageDataService.getOneAssociation(id).toPromise().then(
      data=>{
        console.log(data)
        this.Association = data;
      }
    )
  }
  
  /*-------------------------------------VARIABLES----------------------*/
  public Association:any = null;
  public title:string = null;
  public intitule:string = null;
  public nbvue:number = 0;
  public selectedImages:any[] = [];

  /*------------------------------------FUNCTIONS----------------------*/
  get validation():boolean{
    let res:boolean = false;
    if(this.selectedImages.length>0&&this.title!=null&&this.intitule!=null){
      if(this.title!=''&&this.intitule!=''){
        res = true;
      }
    }
    else{
      res=false;
    }
    return res;
    }
  public async createAssociation(){
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'creation Mouvement....',
      translucent: true,
      cssClass: 'custom-class custom-loading',
    });
    await loading.present();
    const data = {
      association_id:this.Association.id,
      title:this.title,
      intitule:this.intitule,
      nbvue:0
    }
    this.manageDataService.addAnnonce(data).toPromise().then(
      (data)=>{
        this.upload_image(data,loading)
      }
    ).catch(async (err)=>{
      const toast = this.toast.create({
        message:`${err.message}`,
        icon: 'information-circle',
        duration:2000,
        color:"danger"
      });
      (await (toast)).present();  
    })
  }

  public upload_image(data:any,loading){
    //creation don 
    const token = localStorage.getItem('token');
  
  let fd = {
    annonce_id:data.annonce.id,
    files:this.selectedImages
  }
    this.mediaService.uploadImageAnnonce(token,fd).then(async data=>{
      setTimeout(async ()=>{
        loading.dismiss();
        this.router.navigateByUrl('/menu/associations')
        //on affiche un message de success
        const toast = this.toast.create({
          message:`annonce creer avec success`,
          icon: 'information-circle',
          duration:1000,
          color:"success"
        });
        (await (toast)).present();  
      })
    })
    .catch(async err=>{
      loading.dismiss();
    //on affiche un message de success
    const toast = this.toast.create({
      message:`${err.message}`,
      icon: 'information-circle',
      duration:1000,
      color:"danger"
    });
    (await (toast)).present();  
    })
  }
  public navBack(){
    this.navCtrl.back();
  }
  public removeOnImagesList(i:number){
    this.selectedImages.splice(i, 1)
   }
  public async getPicture(){
    const image = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source:CameraSource.Camera,
      quality:100
    });
    if(image){
      console.log(image)
      this.saveImage(image)
    }
  }
  public async saveImage(image:Photo){
  const base64data = await this.readAsBase64(image);
  console.log(base64data)
  const filename = new Date().getTime()+'.jpeg';
  const img = {
    path:filename,
    data:base64data
  }
  setTimeout(() => {
    this.selectedImages.unshift(img)},500)
  }
  public async readAsBase64(photo:Photo){
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
}
