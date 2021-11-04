import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactResolverService } from 'src/services/contact-resolver.service';
import { UsertResolverService } from 'src/services/user-resolver.service';
import { ContactAppComponent } from './cmps/contact-app/contact-app.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { HomeComponent } from './home/home.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, resolve: { user: UsertResolverService } },
  { path: 'contact', component: ContactAppComponent },
  { path: 'contact/edit/:id', component: ContactEditComponent, resolve: { contact: ContactResolverService } },
  { path: 'contact/new', component: ContactEditComponent, resolve: { contact: ContactResolverService } },
  {
    path: 'contact/:id', component: ContactDetailsComponent,
    resolve: { user: UsertResolverService, contact: ContactResolverService }
  },
  { path: 'statistics', component: StatisticsComponent },

  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
