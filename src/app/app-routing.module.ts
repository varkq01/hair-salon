import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { ServicesComponent } from './services/services.component';
import { HairdressingComponent } from './services/hairdressing/hairdressing.component';
import { CosmeticComponent } from './services/cosmetic/cosmetic.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'services',
    component: ServicesComponent,
    children: [
      { path: '', redirectTo: 'hairdressing', pathMatch: 'full' },
      { path: 'hairdressing', component: HairdressingComponent },
      { path: 'cosmetic', component: CosmeticComponent }
    ]
  },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
