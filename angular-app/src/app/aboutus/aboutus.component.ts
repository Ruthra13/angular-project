import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
})
export class AboutusComponent implements OnInit {
  Roles: any = ['Admin', 'Author', 'Reader'];
  constructor() {}

  ngOnInit(): void {}
}
