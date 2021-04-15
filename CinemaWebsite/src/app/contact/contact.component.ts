import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  lat = 41.7151;
  lng = 44.8271;
  constructor() { }

  ngOnInit(): void {
  }

}
