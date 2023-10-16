import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Pais } from '../modelos/pais';

@Injectable({
  providedIn: 'root',
})
export class PaisService {

  private endPointURL = "http://localhost:3000/pais"

  constructor(private http: HttpClient) {}

  getPais(): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.endPointURL);
  }

  getPaisPorId(id?: number): Observable<Pais> {
    return this.http.get<Pais>(`${this.endPointURL}/${id}`)
  }

  createPais(pais?: Pais):Observable<Pais>{
    return this.http.post<Pais>(this.endPointURL, pais);
	}

  updatePais(pais?: Pais): Observable<Pais>{
    return this.http.put<Pais>(`${this.endPointURL}/${pais?.id}`, pais);
  }

  deletePais(id?: number): Observable<Pais>{
    return this.http.delete<Pais>(`${this.endPointURL}/${id}`) ;
  }
}
