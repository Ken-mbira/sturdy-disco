import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[navbarHover]'
})
export class NavbarHoverDirective {

  constructor() { }

  @Input() navbarHover = "";

  @HostListener('mouseenter') onMouseEnter() {
    if(this.navbarHover !== "") {
      const targetElement = document.getElementById(this.navbarHover);

      if(targetElement) {
        targetElement.style.display = 'block';
      }
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if(this.navbarHover !== "") {
      const targetElement = document.getElementById(this.navbarHover);

      if(targetElement) {
        targetElement.style.display = 'none';
      }
    }
  }
}
