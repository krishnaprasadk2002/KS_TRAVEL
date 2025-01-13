import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { IUser } from '../../models/IUser';
import { AuthResponse, LoginResponse } from '../../models/userAuth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient)
  private baseUrl = environment.apiUrl

  constructor() { }

  //user Register
  registerUser(user:IUser):Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this.baseUrl}/user/register`, user).pipe(
      catchError((error) => {
        console.error('Error registering user:', error);
        return throwError(() => error);
      })
    );
  }

  //userLogin
  loginUser(credentials: { email: string; password: string }): Observable<LoginResponse> {
   return this.http.post<LoginResponse>(`${this.baseUrl}/user/login`,credentials).pipe(
    catchError((error)=>{
      console.error('error login user',error);
      return throwError(()=>error)
    })
   )
  }



}
