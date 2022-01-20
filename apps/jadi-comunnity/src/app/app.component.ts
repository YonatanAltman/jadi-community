import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@jadi-home/api-interfaces';

@Component({
  selector: 'jadi-home-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  label = 'Junior Angular Developer Israel';

  constructor(private http: HttpClient) {
  }
}
