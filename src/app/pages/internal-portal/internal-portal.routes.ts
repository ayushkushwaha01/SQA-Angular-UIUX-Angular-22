import { Routes } from '@angular/router';
import { InternalPortalComponent } from './internal-portal.component';
import { InternalPortalDashboardComponent } from './internal-portal-dashboard/internal-portal-dashboard.component';
 
export const INTERNAL_PORTAL_ROUTES: Routes = [
  {
    path: '',
    component: InternalPortalComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: InternalPortalDashboardComponent, data: { breadcrumb: 'Dashboard', description: 'System overview of all audits and metrics.' } },
      { path: 'sqmd', component: InternalPortalDashboardComponent, data: { breadcrumb: 'Dashboard', description: 'System overview of all audits and metrics.' } },
      {
        path: 'process-audit',
        loadChildren: () =>
          import('./process-audit-internal/process-audit-internal.routes').then(
            (m) => m.PROCESS_AUDIT_ROUTES
          ),
      },
      {
        path: 'process',
        loadChildren: () =>
          import('./process-audit-internal/process-audit-internal.routes').then(
            (m) => m.PROCESS_AUDIT_ROUTES
          ),
      },
      {
        path: 'parts-audit',
        loadChildren: () =>
          import('./parts-audit-internal/parts-audit-internal.routes').then(
            (m) => m.PARTS_AUDIT_ROUTES
          ),
      },
      {
        path: 'inspection',
        loadChildren: () =>
          import('./inspection-internal/inspection.routes').then(
            (m) => m.INSPECTION_ROUTES
          ),
      },
    
    ]
  }
];
