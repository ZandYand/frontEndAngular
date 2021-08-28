import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = 'https://localhost:44314/api'

  constructor(private http:HttpClient) { }

  getPeopleList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/people');
  }

  addPeople(val:any){
    return this.http.post(this.APIUrl+'/people', val);
  }

  updatePeople(val:any){
    return this.http.put(this.APIUrl+'/people', val);
  }

  deletePeople(val:any){
    return this.http.delete(this.APIUrl+'/people/'+ val);
  }
}
