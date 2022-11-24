import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places:Place[] = [
   new Place('p1','Manhattan Mansion','In the heart of New York City','../../assets/images/1.jpg',1496.99,new Date('2019-01-01'),new Date('2019-12-31')),
   new Place('p2',"L'Amour Toujours",'A romantic place in Paris!','../../assets/images/2.jpg',1456.23,new Date('2019-01-01'),new Date('2019-12-31')),
   new Place('p3','The Foggy Palace','Not your average city trip!','../../assets/images/3.jpg',678.23,new Date('2019-01-01'),new Date('2019-12-31')),
  ];

  get places()
  {
    return [...this._places];
  }

  constructor() { }

  getPlace(placeId:string)
  {
    return {...this._places.find(x=>x.id===placeId)};
  }
}
