import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'jghp-app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent {
  breadcrumbs: { label: string; url: string }[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // Subscripción a eventos de enrutamiento
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Cuando se completa una navegación, actualiza las migas de pan
        this.breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root);
      }
    });
  }

  private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: { label: string; url: string }[] = []): { label: string; url: string }[] {
    // Obtiene las rutas hijas del enrutamiento actual
    const children: ActivatedRoute[] = route.children;

    // Si no hay rutas hijas, retorna las migas de pan actuales
    if (children.length === 0) {
      return breadcrumbs;
    }

    // Recorre las rutas hijas para construir las migas de pan
    for (const child of children) {
      // Obtiene la URL de la ruta hija
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      // Agrega la información de la ruta actual a las migas de pan
      breadcrumbs.push({ label: child.snapshot.data['breadcrumb'], url: url });
      // ^ Accede a la propiedad 'breadcrumb' de los datos de la ruta para obtener la etiqueta de la miga de pan

      // Llama recursivamente a la función para procesar rutas hijas
      breadcrumbs = this.createBreadcrumbs(child, url, breadcrumbs);
    }

    // Retorna las migas de pan construidas
    return breadcrumbs;
  }
}
