import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent {

  lang =""
  dir:boolean = false

  ngOnInit() {
    this.lang = localStorage.getItem("currentLang")!
    if(this.lang == "ar"){
     this.dir = true
    }
   }

}
