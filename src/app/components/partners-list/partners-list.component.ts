import { Component, ViewEncapsulation } from '@angular/core';
import { SwiperOptions } from 'swiper';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-partners-list',
  templateUrl: './partners-list.component.html',
  styleUrls: ['./partners-list.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class PartnersListComponent {

  lang =""
  dir:boolean = false
  constructor() {}
  
  ngOnInit() {
   this.lang = localStorage.getItem("currentLang")!
   if(this.lang == "ar"){
    this.dir = true
   }
  }

 
}
