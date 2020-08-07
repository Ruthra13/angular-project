import { Injectable } from '@angular/core';
import { bouquetDetails } from '../app/bouquetdetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  bouquets: bouquetDetails[];

  constructor() {}

  // getBouquetById(id: number)
  // {
  //   return this.getBouquetDetails.pipe((result => result), first(bou => bou.id == id));
  //   return this.bouquets.filter(bou => bou.id)
  // }

  getBouquetDetails() {
    this.bouquets = [
      {
        id: 1,
        image: '../../assets/image1.png',
        name: 'Poetic Pink Roses Bouquet',
        price: 'Rs. 1999',
      },
      {
        id: 2,
        image: '../../assets/image2.png',
        name: 'Hot Red',
        price: 'Rs. 3700',
      },
      {
        id: 3,
        image: '../../assets/image3.png',
        name: 'Royal Purple Orchids Bunch',
        price: 'Rs. 749',
      },
      {
        id: 4,
        image: '../../assets/image4.png',
        name: 'Fragrant Mixed Roses Bouquet',
        price: 'Rs. 650',
      },
      {
        id: 5,
        image: '../../assets/image5.png',
        name: 'Exotic 10 pure white roses boquet',
        price: 'Rs. 570',
      },

      {
        id: 6,
        image: '../../assets/image6.png',
        name: 'Hold The Joy of Love',
        price: 'Rs. 1980',
      },
      {
        id: 7,
        image: '../../assets/image7.png',
        name: 'Oriental Lilies & Carnations Mixed Boquet',
        price: 'Rs. 2599',
      },
      {
        id: 8,
        image: '../../assets/image8.png',
        name: 'Poetic Pink Roses Bouquet',
        price: 'Rs. 1999',
      },
    ];
    return this.bouquets;
  }
}
