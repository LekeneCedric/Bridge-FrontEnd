import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { ManageDataService } from 'src/app/services/manage-data/manage-data.service';
import { Geolocation } from '@capacitor/geolocation';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { MediasService } from 'src/app/services/medias/medias.service';
@Component({
  selector: 'app-creation-mouvements',
  templateUrl: './creation-mouvements.page.html',
  styleUrls: ['./creation-mouvements.page.scss'],
})
export class CreationMouvementsPage implements OnInit {

  constructor(private navCtrl:NavController,private manageDataService:ManageDataService,
    private route:ActivatedRoute,private loadingController:LoadingController,private mediaService:MediasService,
    private toast:ToastController,private router:Router) { }

  ngOnInit() {
  
    let id = this.route.snapshot.params['id_association'];
    this.manageDataService.getOneAssociation(id).toPromise().then(
      data=>{
        console.log(data)
        this.Association = data;
      }
    )
  }

  /*---------------------------------VARIABLES--------------------------*/
  public Association:any = null;
  public date:Date;
  public coordinates :GeolocationPosition;
  public seletedCategory:string = null;
  public selectedIntitule:string = null ;
  public DateDebut:Date = null;
  public DateFin:Date = null;
  public description:string = null ;
  selectedImages:any[] = [];
  /*---------------------------------FUNCTIONS--------------------------*/
  get validation():boolean{
  let res:boolean = false;
  if(this.selectedImages.length>0&&this.selectedIntitule!=null&&this.description!=null&&this.seletedCategory!=null&&this.DateDebut!=null&&this.DateFin!=null){
    if(this.selectedIntitule!=''&&this.description!=''){
      res = true;
    }
  }
  else{
    res=false;
  }
  return res;
  }
  public async createMouvement(){
    let dateDebut = new Date(this.DateDebut)
    let datefin = new Date(this.DateFin);
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'creation Mouvement....',
      translucent: true,
      cssClass: 'custom-class custom-loading',
    });
    await loading.present();
    const data = { 
      association_id:this.Association.id,
      category:this.seletedCategory,
      intitule:this.selectedIntitule,
      date_rencontre:`${dateDebut.getFullYear()}-${dateDebut.getMonth()+1}-${this.DateDebut.toString().slice(8,10)}`,
      heure_debut:`${dateDebut.getHours()}:${dateDebut.getMinutes()}`,
      heure_fin:`${datefin.getHours()}:${datefin.getMinutes()}`,
      latitude:11,
      longitude:7,
      description:this.description
    }
   this.manageDataService.addMouvement(data).toPromise().then((data)=>{
    console.log(data)
    this.upload_image(data,loading);
   }).catch(async (err)=>{
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
    mouvement_id:data.mouvement.id,
    files:this.selectedImages
  }
    this.mediaService.uploadImageMouvement(token,fd).then(async data=>{
      setTimeout(async ()=>{
        loading.dismiss();
        this.router.navigateByUrl('/menu/associations')
        //on affiche un message de success
        const toast = this.toast.create({
          message:`Evenement creer avec success`,
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
  public navBack(){
    this.navCtrl.back();
  }
  public test(){
    console.log(new Date(this.DateDebut).getFullYear());
  }
}
