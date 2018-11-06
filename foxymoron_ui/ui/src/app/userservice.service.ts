import { Injectable, Inject, PLATFORM_ID  } from '@angular/core';
import {HttpClientService} from './common/http-client.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private HttpClientServiceRef:HttpClientService ,private route:Router) { }
  ass2(data) {
    return this.HttpClientServiceRef.post('api/Ass/ass2',data);
  }
  ass3(data) {
    return this.HttpClientServiceRef.post('api/users/user',data);
  }
  


}
