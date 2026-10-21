import { Routes } from '@angular/router';
import { InspectionInternalComponent } from './inspection-internal.component';

export const INSPECTION_ROUTES: Routes = [
  {
    path: '',
    component: InspectionInternalComponent,
    data: { breadcrumb: 'Inspections', description: 'Incoming inspection records.' },
  },
];
