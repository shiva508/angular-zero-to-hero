import { Component } from '@angular/core';
import { ServersService } from './servers.service';
import { Server } from '../shared/shared.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  public servers: Server[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
  reloadServers() {
    //this.router.navigate(['/servers'], { relativeTo: this.route });//for relative path
    this.router.navigate(['/servers']);
  }
}
