import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appWishList]'
})
export class WishListDirective {

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2) { }

  @HostListener('click') onClick() {
    this.renderer.addClass(this.elRef.nativeElement, 'added-to-wish-list')
  }
}
