import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
import { UserResponse } from './models/user-response';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  private randomUserApiUrl = "https://randomuser.me/api/"

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<UserResponse> {
    return this._http.get<UserResponse>(this.randomUserApiUrl);
  }
}
