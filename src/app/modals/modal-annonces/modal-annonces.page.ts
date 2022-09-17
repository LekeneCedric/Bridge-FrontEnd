import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal-annonces',
  templateUrl: './modal-annonces.page.html',
  styleUrls: ['./modal-annonces.page.scss'],
})
export class ModalAnnoncesPage implements OnInit {
@Input() annonces:any;
  constructor() { }

  ngOnInit() {
    this.Annonces = this.annonces
  }
  public storage = environment.storage;
  public Annonces:any 
}
