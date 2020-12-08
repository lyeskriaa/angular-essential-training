import { Directive, HostBinding, HostListener ,Input } from '@angular/core';

@Directive({
  selector: '[mwFavorite]'
})
export class FavoriteDirective {
  //To get a class applied to the host element that the directive is on, you can use another Angular decorator. 
  //HostBinding is used to bind a host element property to a directive property.
  @HostBinding('class.is-favorite') isFavorite = true;
  @HostBinding('class.is-favorite-hovering') hovering = false;
  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.hovering = false;
  }
  // using input decorator for a setter method 
  @Input() set mwFavorite(value) {
    this.isFavorite = value;
  }
}