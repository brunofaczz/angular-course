import {Component, OnInit} from '@angular/core';

import {ServersService} from '../servers.service';
import {ActivatedRoute, Data, Params, Router} from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };
  allowEdit = false;

  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(+id);
    // this.route.params
    //   .subscribe((params: Params) => {
    //     this.server = this.serversService.getServer(+params['id']);
    //   });

    this.route.data
      .subscribe((data: Data) => {
        this.server = data['server'];
      });

    this.route.queryParams
      .subscribe((queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      });
  }

  onEdit() {
    this.router.navigate(['servers', this.server.id, 'edit'], {queryParamsHandling: 'preserve'});
    // this.router.navigate(['servers', this.server.id, 'edit'], {preserveQueryParams: true});
  }

}
