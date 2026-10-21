import { Menu } from '../models/menu.model';

export const applicationMenuItems: Menu[] = [

  new Menu(1, 'Dashboard', '/internal-portal/dashboard', null, 'dashboard', null, false, 0),
  new Menu(10, 'Process Audits', '/process-audits', null, 'business_center', null, false, 0),
  new Menu(20, 'Parts Audits', '/parts-audits', null, 'layers', null, false, 0),
  new Menu(30, 'Inspections', '/inspections', null, 'door_front', null, false, 0),
  new Menu(40, 'Setup', '/setup', null, 'view_list', null, false, 0),
  new Menu(50, 'Admin', '/admin', null, 'groups', null, false, 0),

  

];

export const verticalMenuItems = applicationMenuItems;

export const horizontalMenuItems = applicationMenuItems;
