import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';

const primeModules = [AccordionModule ,SidebarModule ,ButtonModule] ;

@NgModule({
  imports: [primeModules],
  exports: [primeModules],
})
export class PrimeNgModule {}
