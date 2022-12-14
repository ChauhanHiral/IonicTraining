import { Place } from './../place.model';
import { PlacesService } from './../places.service';
import { Component, OnInit } from '@angular/core';
import { MenuController, SegmentChangeEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces:Place[];
  listedLoadedPlaces:Place[];
  constructor(private placesService:PlacesService,private menuCtrl:MenuController) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
    this.listedLoadedPlaces = this.loadedPlaces.slice(1);
  }
  // onOpenMenu()
  // {
  //   this.menuCtrl.toggle();
  // }

  onFilterUpdate(event:CustomEvent<SegmentChangeEventDetail>)
  {
    console.log(event.detail);
  }
}
