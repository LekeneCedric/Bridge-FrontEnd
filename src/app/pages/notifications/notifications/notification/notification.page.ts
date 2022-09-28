import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
@Input() description:string;
@Input() timeAgo:any;
  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }
  confirm(){
    return this.modalCtrl.dismiss(null, 'confirm');
  }



}
