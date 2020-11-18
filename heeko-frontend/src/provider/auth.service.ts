import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import constants from '../app/utility/constants';


@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) {}

  userLogin(data): Observable<any> {
    return this.httpClient.post(
      `${environment.serverConfig.apiUrl}${constants.apiMethods.userLogin}`,
      data
    );
  }
  resetPassword(data): Observable<any> {
    return this.httpClient.post(
        `${environment.serverConfig.apiUrl}${constants.apiMethods.resetPassword}`,
        data
      );
  }
}
