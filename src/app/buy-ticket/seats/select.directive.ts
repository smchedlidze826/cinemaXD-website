import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { GetMovieDataService } from 'src/app/shared-services/getMovieData.service';

@Directive({
  selector: '[appSelect]'
})
export class SelectDirective {

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2) { }



  @HostListener('click') onClick() {
    if (this.elRef.nativeElement.classList.contains('selected')) {
      this.renderer.removeClass(this.elRef.nativeElement, 'selected');
    } else if (!this.elRef.nativeElement.classList.contains('occupied')) {
      this.renderer.addClass(this.elRef.nativeElement, 'selected');
    }
  }

}
