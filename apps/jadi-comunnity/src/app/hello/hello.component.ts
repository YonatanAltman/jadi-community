import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jadi-home-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  label = 'Coming soon';

  constructor() { }

  ngOnInit(): void {
  }

}
