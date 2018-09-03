import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ServerService {
  private URLSERVERS = 'https://udemy-ng-http-c55ef.firebaseio.com/data';

  constructor(private http: Http) {
  }

  storeServers(servers: any[]) {
    return this.http.put(this.URLSERVERS, servers);
  }

  getServers() {
    return this.http.get(this.URLSERVERS)
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        return Observable.throw('Something went wrong.');
      });
  }
}
