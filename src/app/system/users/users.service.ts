import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  /**
   * Get list users from server
   * @returns Observable<User>
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('api/users').pipe((res) => {
      return res;
    });
  }
}
