import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeCarouselComponent } from './home/home-carousel/home-carousel.component';
import { EmployeesListComponent } from './home/employees-list/employees-list.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { MapComponent } from './home/map/map.component';
import { ImagePreviewComponent } from './home/gallery/image-preview/image-preview.component';
import { ImageComponent } from './home/gallery/image/image.component';
import { LoginComponent } from './login/login.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertBoxComponent } from './alert-box/alert-box.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    HomeCarouselComponent,
    EmployeesListComponent,
    GalleryComponent,
    MapComponent,
    ImagePreviewComponent,
    ImageComponent,
    LoginComponent,
    PasswordResetComponent,
    RegisterComponent,
    AlertBoxComponent
  ],
  imports: [AppRoutingModule, SharedModule, NgbModule.forRoot(), FormsModule, ReactiveFormsModule],
  exports: [
    AppRoutingModule,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    MapComponent
  ],
  entryComponents: [
    ImagePreviewComponent,
    LoginComponent,
    RegisterComponent,
    PasswordResetComponent
  ]
})
export class CoreModule {}
