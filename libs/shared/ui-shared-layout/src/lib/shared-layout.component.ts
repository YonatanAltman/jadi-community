import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'shared-shared-layout',
  templateUrl: './shared-layout.component.html',
  styleUrls: ['./shared-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
