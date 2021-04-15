import { Component, OnInit } from '@angular/core';
import { GiftCard } from './gift-card.model';

@Component({
  selector: 'app-gift-cards',
  templateUrl: './gift-cards.component.html',
  styleUrls: ['./gift-cards.component.css']
})
export class GiftCardsComponent implements OnInit {

  giftCardsArr: GiftCard[] = [
    new GiftCard('25$', 'https://d2j6dbq0eux0bg.cloudfront.net/images/31962119/1493524471.jpg'),
    new GiftCard('50$', 'https://d2j6dbq0eux0bg.cloudfront.net/images/31962119/1493509936.jpg'),
    new GiftCard('75$', 'https://d2j6dbq0eux0bg.cloudfront.net/images/31962119/1493518882.jpg'),
    new GiftCard('100$', 'https://d2j6dbq0eux0bg.cloudfront.net/images/31962119/1493524566.jpg'),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
