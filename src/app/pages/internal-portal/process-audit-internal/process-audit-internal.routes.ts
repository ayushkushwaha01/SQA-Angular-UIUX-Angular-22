import { Routes } from '@angular/router';
import { ProcessAuditInternalComponent } from './process-audit-internal.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ActiveAuditsComponent } from './active-audits/active-audits.component';
import { ProcessCapaComponent } from './process-capa/process-capa.component';
import { CompletedAuditsComponent } from './completed-audits/completed-audits.component';

export const PROCESS_AUDIT_ROUTES: Routes = [
  {
    path: '',
    component: ProcessAuditInternalComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'analytics' },
      {
        path: 'analytics',
        component: AnalyticsComponent,
        data: { breadcrumb: 'Analytics', description: 'Process audit analytics and metrics.', fullBleed: true },
      },
      {
        path: 'active-audits',
        component: ActiveAuditsComponent,
        data: { breadcrumb: 'Active Audits', description: 'Manage and track process audits.', fullBleed: true },
      },
      {
        path: 'process-capa',
        component: ProcessCapaComponent,
        data: { breadcrumb: 'Process CAPA', description: 'Corrective and Preventive Actions.', fullBleed: true },
      },
      {
        path: 'actions',
        pathMatch: 'full',
        redirectTo: 'process-capa',
      },
      {
        path: 'completed-audits',
        component: CompletedAuditsComponent,
        data: { breadcrumb: 'Completed Audits', description: 'Archived and completed process audits.', fullBleed: true },
      },
    ],
  },
];
