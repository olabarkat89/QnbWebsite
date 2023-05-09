import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PartnersListComponent } from './components/partners-list/partners-list.component';
import { PartnerDetailsComponent } from './components/partner-details/partner-details.component';
import { AboutProgramComponent } from './components/about-program/about-program.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { TermsComponent } from './components/terms/terms.component';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrimeNgModule } from './components/prime-ng/prime-ng.module';
import { SwiperModule } from 'swiper/angular';


@NgModule({
 

  declarations: [
    AppComponent,
    PartnersListComponent,
    PartnerDetailsComponent,
    AboutProgramComponent,
    FaqsComponent,
    TermsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule,
      HttpClientModule,
      PrimeNgModule,
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
        }
      }),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}