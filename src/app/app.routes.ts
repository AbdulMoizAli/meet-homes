import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home • Meet Homes',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Details • Meet Homes',
  },
];
