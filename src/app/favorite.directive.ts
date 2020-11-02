import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[mwFavorite]'
})
export class FavoriteDirective {
  //To get a class applied to the host element that the directive is on, you can use another Angular decorator. 
  //HostBinding is used to bind a host element property to a directive property.
  @HostBinding('class.is-favorite') isFavorite = true;
}