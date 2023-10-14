import { Injectable } from '@angular/core';
import { Libro } from '../modelos/libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private libros: Libro[] = [
    {
      id: 1,
      ISBN: "978-0061120084",
      titulo: "To Kill a Mockingbird",
      autor: "Harper Lee",
      editorial: "HarperCollins",
      fechaPublicacion: "July 11, 1960",
      numeroEjemplares: "10",
      disponibles: "5"
    },
    {
      id: 2,
      ISBN: "978-1984800654",
      titulo: "The Great Gatsby",
      autor: "F. Scott Fitzgerald",
      editorial: "Scribner",
      fechaPublicacion: "April 10, 1925",
      numeroEjemplares: "8",
      disponibles: "3"
    },
    {
      id: 3,
      ISBN: "978-0735619678",
      titulo: "Angular Development with TypeScript",
      autor: "Yakov Fain",
      editorial: "Microsoft Press",
      fechaPublicacion: "August 15, 2018",
      numeroEjemplares: "5",
      disponibles: "2"
    },
    {
      id: 4,
      ISBN: "978-0596806750",
      titulo: "Pro Angular",
      autor: "Adam Freeman",
      editorial: "Apress",
      fechaPublicacion: "July 7, 2011",
      numeroEjemplares: "7",
      disponibles: "4"
    },
    {
      id: 5,
      ISBN: "978-1492075517",
      titulo: "Ng-book: The Complete Book on Angular",
      autor: "Nathan Murray, Ari Lerner, Felipe Coury, Carlos Taborda",
      editorial: "Fullstack.io",
      fechaPublicacion: "October 1, 2021",
      numeroEjemplares: "6",
      disponibles: "1"
    }
  ];

  getLibros(): Libro[] {
    return this.libros;
  }

  getLibroById(id: number): Libro | undefined {
    return this.libros.find((libro) => libro.id === id);
  }

}
