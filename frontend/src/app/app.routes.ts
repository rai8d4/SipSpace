import { Routes } from '@angular/router';

import { CafeList } from './components/cafe-list/cafe-list';
import { AddCafe } from './components/add-cafe/add-cafe';

import { VisitList } from './components/visit-list/visit-list';
import { AddVisit } from './components/add-visit/add-visit';

export const routes: Routes = [

  { path: '', component: VisitList },

  { path: 'cafes', component: CafeList },
  { path: 'add-cafe', component: AddCafe },

  { path: 'visits', component: VisitList },
  { path: 'add-visit', component: AddVisit }

];