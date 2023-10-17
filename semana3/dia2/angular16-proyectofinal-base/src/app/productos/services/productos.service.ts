import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Producto } from '../domain/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private baseUrl = 'http://localhost:3000/producto';

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.baseUrl).pipe(
      catchError(this.handleError)
    );
  }

  getProducto(id: number): Observable<Producto> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Producto>(url).pipe(
      catchError(this.handleError)
    );
  }

  agregarProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.baseUrl, producto).pipe(
      catchError(this.handleError)
    );
  }

  actualizarProducto(id: number, producto: Producto): Observable<Producto> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Producto>(url, producto).pipe(
      catchError(this.handleError)
    );
  }

  eliminarProducto(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('Error en la solicitud:', error);
    return throwError(() => new Error('Ocurrió un error en la solicitud. Por favor, inténtalo de nuevo más tarde.'));
  }

}
