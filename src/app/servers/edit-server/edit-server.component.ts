import { Component, OnInit } from '@angular/core';
import { Server } from 'src/app/shared/shared.component';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDeactivateService } from './can-component-deactivate.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent
  implements OnInit, CanComponentDeactivateService
{
  server: any;
  serverName: string = '';
  serverStatus: string = '';
  changesSaved: boolean = false;
  allowEdit: boolean = false;

  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.queryParams);
    //console.log(this.activatedRoute.snapshot.params);
    //console.log(this.activatedRoute.snapshot.fragment);
    console.log(this.activatedRoute?.snapshot?.params['id']);
    this.activatedRoute.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(Number(params['id']));
    });

    this.serverName = this.server?.name;
    this.serverStatus = this.server?.status;
    this.allowEdit = this.activatedRoute.snapshot.queryParams['isEdit'];
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

  canDeativate(): boolean | Promise<boolean> | Observable<boolean> {
    if (!this.allowEdit) {
      return true;
    }
    if (
      (this.serverName !== this.server.name ||
        this.serverStatus !== this.server.status) &&
      !this.changesSaved
    ) {
      return confirm('Do you want to discord changes');
    } else {
      return true;
    }
  }
}
