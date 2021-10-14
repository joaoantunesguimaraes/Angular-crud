import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private HeaderService: HeaderService) { }

  ngOnInit(): void {
  }


  get title() {
    return this.HeaderService.headerData.title
  }

  get icon() {
    return this.HeaderService.headerData.icon
  }

  get routeUrl() {
    return this.HeaderService.headerData.routeUrl
  }  

}
