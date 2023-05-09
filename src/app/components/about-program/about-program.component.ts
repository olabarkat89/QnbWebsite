import { Component } from '@angular/core';

@Component({
  selector: 'app-about-program',
  templateUrl: './about-program.component.html',
  styleUrls: ['./about-program.component.scss']
})
export class AboutProgramComponent {
  
  lang =""
  dir:boolean = false

  ngOnInit() {
    this.lang = localStorage.getItem("currentLang")!
    if(this.lang == "ar"){
     this.dir = true
    }
   }
 
}
