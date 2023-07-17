import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { Server } from 'src/app/shared/shared.component';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: Server | undefined;

  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(Number(params['id']));
    });
  }

  updateServer() {
    this.router.navigate(['/servers', this.server?.id, 'edit'], {
      queryParamsHandling: 'preserve',
    });
  }
}
