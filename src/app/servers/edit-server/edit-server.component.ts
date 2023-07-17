import { Component, OnInit } from '@angular/core';
import { Server } from 'src/app/shared/shared.component';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit {
  server: any;
  serverName: string = '';
  serverStatus: string = '';
  changesSaved: boolean = false;

  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    //console.log(this.activatedRoute.snapshot.params);
    //console.log(this.activatedRoute.snapshot.fragment);
    console.log(this.activatedRoute?.snapshot?.params['id']);
    this.activatedRoute.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(Number(params['id']));
    });

    this.serverName = this.server?.name;
    this.serverStatus = this.server?.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }
}
