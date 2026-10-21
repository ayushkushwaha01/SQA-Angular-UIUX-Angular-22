// src/app/pages/pages.routes.ts
import { Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

export const routes: Routes = [
  {
    path: '',
    component: PagesComponent, // Renders the sidebar/header layout
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'internal-portal/dashboard',
      },
      {
        path: 'dashboard',
        pathMatch: 'full',
        redirectTo: 'internal-portal/dashboard',
      },
      {
        path: 'internal-portal',
        loadChildren: () =>
          import('./internal-portal/internal-portal.routes').then(
            (m) => m.INTERNAL_PORTAL_ROUTES
          ),
      },
      {
        path: 'process-audits',
        loadChildren: () =>
          import('./internal-portal/process-audit-internal/process-audit-internal.routes').then(
            (m) => m.PROCESS_AUDIT_ROUTES
          ),
      },
      {
        path: 'projects',
        pathMatch: 'full',
        redirectTo: 'process-audits',
      },
      {
        path: 'process',
        pathMatch: 'full',
        redirectTo: 'process-audits',
      },
      {
        path: 'parts-audits',
        loadChildren: () =>
          import('./internal-portal/parts-audit-internal/parts-audit-internal.routes').then(
            (m) => m.PARTS_AUDIT_ROUTES
          ),
      },
      {
        path: 'stages',
        pathMatch: 'full',
        redirectTo: 'parts-audits',
      },
      {
        path: 'inspections',
        loadChildren: () =>
          import('./internal-portal/inspection-internal/inspection.routes').then(
            (m) => m.INSPECTION_ROUTES
          ),
      },
      {
        path: 'gates',
        pathMatch: 'full',
        redirectTo: 'inspections',
      },
      {
        path: 'setup',
        loadComponent: () =>
          import('./setup/setup.component').then((c) => c.SetupComponent),
        data: {
          breadcrumb: 'Setup',
          description: 'Manage master data and configurations.',
        },
      },
      {
        path: 'master-data',
        pathMatch: 'full',
        redirectTo: 'setup',
      },
      {
        path: 'admin',
        loadComponent: () =>
          import('./admin/admin.component').then((c) => c.AdminComponent),
        data: {
          breadcrumb: 'Admin',
          description: 'System administration and user management.',
        },
      },
      {
        path: 'monitor',
        pathMatch: 'full',
        redirectTo: 'admin',
      },
      {
        path: 'resources',
        loadComponent: () =>
          import('./resources/resources.component').then((c) => c.ResourcesComponent),
        data: {
          breadcrumb: 'Resources',
          description: 'Manage resources and information available to your projects.',
        },
      },
    ],
  },
];
