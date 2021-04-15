import { HttpClient, HttpRequest } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild('f', { static: false }) form: NgForm;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(postData: any) {
    if (this.form.valid) {
      let api = 'https://cinema-c1a26-default-rtdb.firebaseio.com/comming.json'
      this.httpClient.post(api, postData)
        .subscribe(
          (response) => {
            console.log(response)
          }
        )
    }
    this.form.reset()
  }
}