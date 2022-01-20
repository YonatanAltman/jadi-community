import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { INav } from '@jadi-home/api-interfaces';

@Component({
  selector: 'shared-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent implements OnInit {
  navs: INav[] = [
    { label: 'hello', link: 'hello' },
    { label: 'about', link: 'about' },
    { label: 'goals', link: 'goals' },
    { label: 'register', link: 'register' }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
