import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[elementHover]'
})
export class ElementHoverDirective {
  private socialIconsContainer: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseover') onMouseOver() {
    // Contenedor para los botones de redes sociales
    this.socialIconsContainer = this.renderer.createElement('div');

    // Agregar botones de redes sociales
    this.renderer.setProperty(this.socialIconsContainer, 'innerHTML', `
      <button class="btn btn-primary">
        <span class="bi bi-facebook"></span> Facebook
      </button>
      <button class="btn btn-info">
        <span class="bi bi-twitter"></span> Twitter
      </button>
      <button class="btn btn-danger">
        <span class="bi bi-instagram"></span> Instagram
      </button>
    `);

    // Adjuntar el contenedor de botones al elemento
    this.renderer.appendChild(this.el.nativeElement, this.socialIconsContainer);
  }

  @HostListener('mouseout') onMouseOut() {
    // Eliminar el contenedor de botones al salir del mouse
    if (this.socialIconsContainer) {
      this.renderer.removeChild(this.el.nativeElement, this.socialIconsContainer);
      this.socialIconsContainer = null;
    }
  }
}
