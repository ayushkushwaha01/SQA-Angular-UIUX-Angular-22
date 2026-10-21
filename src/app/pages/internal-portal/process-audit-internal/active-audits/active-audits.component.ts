import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

export interface ActiveAudit {
  auditReference: string;
  commodity: string;
  location: string;
  supplier: string;
  auditor: string;
  auditDate: string;
  capa: string;
  report: string;
  status: string;
  done: boolean;
}

@Component({
  selector: 'app-active-audits',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatPaginatorModule,
  ],
  templateUrl: './active-audits.component.html',
  styleUrl: './active-audits.component.scss',
})
export class ActiveAuditsComponent implements OnInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  // Pagination State
  pageSize: number = 10;
  pageIndex: number = 0;
  totalSize: number = 0;

  // Master Data from Image 1
  masterData: ActiveAudit[] = [
    {
      auditReference: '2024/Process/254871',
      commodity: 'Engine Block',
      location: 'Chennai',
      supplier: 'ABC Castings Pvt Ltd',
      auditor: 'Vijay Mohan',
      auditDate: '12-09-2024',
      capa: '3/4',
      report: '87 %',
      status: 'Select Status',
      done: true,
    },
    {
      auditReference: '2024/Process/254832',
      commodity: 'Transmission Case',
      location: 'Pune',
      supplier: 'XYZ Industries Ltd',
      auditor: 'Arjun Sharma',
      auditDate: '05-09-2024',
      capa: '3/4',
      report: '80 %',
      status: 'Select Status',
      done: false,
    },
    {
      auditReference: '2024/Process/254812',
      commodity: 'Cylinder Head',
      location: 'Bangalore',
      supplier: 'LMN Castings Co',
      auditor: 'Radhika Iyer',
      auditDate: '22-08-2024',
      capa: '3/4',
      report: '90 %',
      status: 'Select Status',
      done: false,
    },
    {
      auditReference: '2024/Process/254854',
      commodity: 'Crankshaft',
      location: 'Hyderabad',
      supplier: 'PQR Castings Ltd',
      auditor: 'Siva Kumar',
      auditDate: '30-07-2024',
      capa: '3/4',
      report: '75 %',
      status: 'Select Status',
      done: false,
    },
    {
      auditReference: '2024/Process/254865',
      commodity: 'Camshaft',
      location: 'Mumbai',
      supplier: 'DEF Automotive Ltd',
      auditor: 'Manoj Singh',
      auditDate: '15-07-2024',
      capa: '3/4',
      report: '95 %',
      status: 'Select Status',
      done: true,
    },
  ];

  statusOptions: string[] = [
    'Select Status',
    'Open',
    'WIP',
    'Pending',
    'Completed',
    'Hold',
  ];

  pagedData: ActiveAudit[] = [];

  ngOnInit(): void {
    this.totalSize = this.masterData.length;
    this.updatePagedData();
  }

  updatePagedData(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedData = this.masterData.slice(startIndex, endIndex);
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePagedData();
  }

  toggleDone(item: ActiveAudit): void {
    item.done = !item.done;
  }

  onAddAudit(): void {
    const newRef = `2024/Process/${Math.floor(254000 + Math.random() * 1000)}`;
    const newAudit: ActiveAudit = {
      auditReference: newRef,
      commodity: 'New Component',
      location: 'Chennai',
      supplier: 'New Supplier Ltd',
      auditor: 'Vijay Mohan',
      auditDate: new Date().toLocaleDateString('en-GB').replace(/\//g, '-'),
      capa: '3/4',
      report: '100 %',
      status: 'Select Status',
      done: false,
    };
    this.masterData.unshift(newAudit);
    this.totalSize = this.masterData.length;
    this.updatePagedData();
  }

  onEditAudit(item: ActiveAudit): void {
    console.log('Edit audit:', item);
  }

  onDeleteAudit(item: ActiveAudit): void {
    if (confirm(`Are you sure you want to delete audit ${item.auditReference}?`)) {
      this.masterData = this.masterData.filter((a) => a !== item);
      this.totalSize = this.masterData.length;
      if (this.pageIndex > 0 && this.pageIndex * this.pageSize >= this.totalSize) {
        this.pageIndex--;
      }
      this.updatePagedData();
    }
  }

  scrollLeft(): void {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }

  scrollRight(): void {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }
}
