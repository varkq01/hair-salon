import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { HomeCarouselComponent } from './home/home-carousel/home-carousel.component';
import { HomeWorkingDaysComponent } from './home/home-working-days/home-working-days.component';
import { EmployeesListComponent } from './home/employees-list/employees-list.component';
import { GalleryComponent } from './home/gallery/gallery.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    HomeCarouselComponent,
    HomeWorkingDaysComponent,
    EmployeesListComponent,
    GalleryComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
    HomeComponent,
    FooterComponent
  ],
})
export class CoreModule {}