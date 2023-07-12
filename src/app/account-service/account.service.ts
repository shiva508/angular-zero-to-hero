import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from '../logging/logging.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  statusChanggedEvent = new EventEmitter<string>();
  constructor(private loggingService: LoggingService) {}

  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  addAccount(accountName: string, accountStatus: string) {
    this.accounts.push({
      name: accountName,
      status: accountStatus,
    });
    this.loggingService.loggingStatusChange(accountStatus);
  }
  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.loggingStatusChange(status);
    this.statusChanggedEvent.emit(status);
  }
}
