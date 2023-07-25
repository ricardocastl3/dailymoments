import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMoment } from '../interfaces/IMoment';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IResponse } from '../interfaces/IResponse';

@Injectable({
  providedIn: 'root'
})
export class MomentService {

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`;

  constructor(private http: HttpClient) { }

  getMoments(): Observable<IResponse<IMoment[]>>{
    return this.http.get<IResponse<IMoment[]>>(this.apiUrl);
  }
  
  createMoment(formData: FormData): Observable<FormData>{
    return this.http.post<FormData>(this.apiUrl, formData);
  }



}
