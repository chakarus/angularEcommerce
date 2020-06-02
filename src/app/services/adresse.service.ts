import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Adresse } from '../interfaces/adresse';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'any'
})
export class AdresseService {

  private urlAdresse ='http://localhost:8000/api/adresses';

  constructor(private http: HttpClient) { }

  getAllAdresses() {
    return this.http.get<Array<Adresse>>(this.urlAdresse).pipe(map(elt => elt['hydra:member']));
  }
  // getAdresse(id: number) {
  //   return this.http.get<Adresse>(this.url + '/' + id);
  // }
  // addAdresse(adresse: Adresse) {
  //   return this.http.post(this.url, adresse);
  // }
  // editAdresse(adresse: Adresse) {
  //   return this.http.put(this.url + '/' + adresse.id, adresse);
  // }
  deleteAdresse(id: number) {
    return this.http.delete(this.urlAdresse + '/' + id);
  }
}
