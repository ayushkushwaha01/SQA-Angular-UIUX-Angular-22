import { Routes } from '@angular/router';
import { PartsAuditInternalComponent } from './parts-audit-internal.component';

export const PARTS_AUDIT_ROUTES: Routes = [
  {
    path: '',
    component: PartsAuditInternalComponent,
    data: { breadcrumb: 'Parts Audit', description: 'Manage and track parts audits.' },
  },
];
