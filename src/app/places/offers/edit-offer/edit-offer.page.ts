import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from './../../places.service';
import { Place } from './../../place.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  place:Place;
  form:FormGroup;
  constructor(private route:ActivatedRoute,private navCtrl:NavController,private placesService:PlacesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paraMap=>{
      if(!paraMap.has('placeId'))
      {
        this.navCtrl.navigateBack("/places/tabs/offers");
        return
      }
      this.place = this.placesService.getPlace(paraMap.get('placeId'));
      this.form = new FormGroup({
        title:new FormControl(this.place.title,{
          updateOn:'blur',
          validators:[Validators.required]
        }),
        description:new FormControl(this.place.description,{
          updateOn:'blur',
          validators:[Validators.required,Validators.maxLength(180)]
        })
      })
    });
  }

  onEditOffer()
  {
    console.log(this.form);
  }

}
