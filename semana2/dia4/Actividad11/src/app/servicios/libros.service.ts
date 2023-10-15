import { Injectable } from '@angular/core';
import { Libro } from '../modelos/libro';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private endPointURL = "http://localhost:3000/libros";

  constructor (private http: HttpClient) {}

  getLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.endPointURL);
  }

  getLibroById(id: number): Observable<Libro> {
    return this.http.get<Libro>(`${this.endPointURL}/${id}`)
  }

  createLibro(libro: Libro): Observable<Libro> {
    return this.http.post<Libro>(this.endPointURL, libro);
  }

  updateLibro(libro: Libro): Observable<Libro> {
    return this.http.put<Libro>(`${this.endPointURL}/${libro.id}`, libro)
  }

  deleteLibroById(id: number): Observable<Libro> {
    return this.http.get<Libro>(`${this.endPointURL}/${id}`)
  }

}
