import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging/logging.service';
import { AccountService } from '../account-service/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [],
})
export class AccountComponent {
  @Input() account!: { name: string; status: string };
  @Input() id!: number;

  constructor(
    private loggingService: LoggingService,
    private accountService: AccountService
  ) {
    this.accountService.statusChanggedEvent.subscribe((status: string) =>
      alert(status)
    );
  }
  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    //this.loggingService.loggingStatusChange(status);
  }
}
