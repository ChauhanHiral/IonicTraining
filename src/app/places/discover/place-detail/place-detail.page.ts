import { CreateBookingComponent } from './../../../booking/create-booking/create-booking.component';
import { PlacesService } from './../../places.service';
import { Place } from './../../place.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place:Place;
  constructor(private navCtrl:NavController,private route:ActivatedRoute,
    private placesService:PlacesService,private modalCtrl:ModalController,
    private actionSheetCtrl:ActionSheetController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paraMap=>{
      if(!paraMap.has('placeId'))
      {
        this.navCtrl.navigateBack("/places/tabs/discover");
        return
      }
      this.place = this.placesService.getPlace(paraMap.get('placeId'));
    });
  }

  onBookPlace()
  {
    this.actionSheetCtrl.create({
      header:'Choose an Action',
      buttons:[
        {
          text:'Select Date',
          handler:()=>{this.openBookingModal('select');}
        },
        {
          text:'Random Date',
          handler:()=>{this.openBookingModal('random');}
        },
        {text:'Cancle',
        role:'cancel'}
      ]
    }).then(actionSheetEle=>{
      actionSheetEle.present();
    })
  }

  openBookingModal(mode:'select'|'random'){
    console.log(mode);
    this.modalCtrl.create({
      component:CreateBookingComponent,
        componentProps:{selectedPlace:this.place,selectedMode:mode}})
    .then(modalEle=>{
      modalEle.present();
      return modalEle.onDidDismiss()
    }).then(resultData=>{
      console.log(resultData.data,resultData.role)
      if(resultData.role==='confirm')
      {

      }
    })
  }
}
