import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BreadcrumbComponent } from '../../../theme/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-process-audit-internal',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    MatIconModule,
    MatTooltipModule,
    BreadcrumbComponent,
  ],
  templateUrl: './process-audit-internal.component.html',
  styleUrl: './process-audit-internal.component.scss',
})
export class ProcessAuditInternalComponent {
  isSidenavOpen = true;

  toggleSidenav(): void {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  openaudit(module: string): void {
    console.log('Open new audit for:', module);
  }

  openUserManual(fileName: string): void {
    window.open(`assets/${fileName}`, '_blank');
  }

  openHelpDesk(): void {
    console.log('Open IT Help Desk');
  }
}

