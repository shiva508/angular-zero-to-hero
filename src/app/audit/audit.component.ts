import { Component } from '@angular/core';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css'],
})
export class AuditComponent {
  audits: any = [];

  isToggle = false;
  onAudit() {
    const date = new Date();
    this.audits.push(date);
    this.isToggle = !this.isToggle;
  }
}
