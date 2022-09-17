import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal-mouvements',
  templateUrl: './modal-mouvements.page.html',
  styleUrls: ['./modal-mouvements.page.scss'],
})
export class ModalMouvementsPage implements OnInit {
  @Input() mouvements:any
  constructor() { }

  ngOnInit() {
    this.Mouvements = this.mouvements;
  }
  public Mouvements:any = null; 
  public storage = environment.storage;
}
