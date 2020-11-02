import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})

export class MediaItemComponent {
  // filmName = 'The Redemption';
  // wasWatched() {
  //   return true;
  // }
  // input decorator designed to be used on a class property
  //This will tell Angular that we want it to support any property
  // bindings placed on instances of the mw-media-item elements, where the property name is media item.
  @Input() mediaItem: any ;
  @Output() delete = new EventEmitter();
  // its recommended to use alias only in a case when we need it @Input('mediaItemToWatch') mediaItem;
  onDelete() {
    console.log('deleted');
    this.delete.emit(this.mediaItem);
  }
}
