import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Personne } from '../interfaces/personne';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  private url = 'http://localhost:8000/api/personnes';
 
  headers: HttpHeaders;
  constructor(private http: HttpClient) {  }

  getAllPersonnes() {
    const headers = new HttpHeaders();
    return this.http.get<Array<Personne>>(this.url).pipe(map(elt => elt['hydra:member']));
  }
  getPersonne(id: number) {
    return this.http.get<Personne>(this.url + '/' + id);
  }
  addPersonne(personne: Personne) {
    return this.http.post(this.url, personne);
  }
  editPersonne(personne: Personne) {
    return this.http.put(this.url + '/' + personne.id, personne);
  }
  deletePersonne(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
