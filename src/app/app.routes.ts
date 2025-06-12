import { Routes } from '@angular/router';
import { Home } from './home/home';
import { CarList } from './car-list/car-list';
import { CarForm } from './car-form/car-form';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'list', component: CarList },
  { path: 'new', component: CarForm },
  { path: 'edit/:id', component: CarForm },
];
