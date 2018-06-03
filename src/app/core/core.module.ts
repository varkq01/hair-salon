import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeCarouselComponent } from './home/home-carousel/home-carousel.component';
import { HomeWorkingDaysComponent } from './home/home-working-days/home-working-days.component';
import { EmployeesListComponent } from './home/employees-list/employees-list.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { MapComponent } from './home/map/map.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ImagePreviewComponent } from './home/gallery/image-preview/image-preview.component';
import { ImageComponent } from './home/gallery/image/image.component';
import { LoginComponent } from './login/login.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    HomeCarouselComponent,
    HomeWorkingDaysComponent,
    EmployeesListComponent,
    GalleryComponent,
    MapComponent,
    ImagePreviewComponent,
    ImageComponent,
    LoginComponent,
    PasswordResetComponent,
    RegisterComponent
  ],
  imports: [AppRoutingModule, SharedModule, ModalModule.forRoot()],
  exports: [
    AppRoutingModule,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    MapComponent
  ],
  entryComponents: [ImagePreviewComponent, LoginComponent, RegisterComponent, PasswordResetComponent]
})
export class CoreModule {}
