import { MediaItemComponent } from './media-item.component';
import { Component } from '@angular/core';

//component is a directive with a view 
//component metadata inherit from the directive metadata
@Component({
    // to decorate a component we need a selector and a template
    //selector property is what angular will use to locate a custom html element and apply the component to
    selector: 'mw-app',
    //template: `<h1> My App </h1> <p> Keeping track of the media I want to watch </p>`
    templateUrl: './app.component.html',
    // array of styles files
    styleUrls: ['./app.component.css']
    // styles: [`
        // h1 {color : #fff; }`,
        // `.description {
        //     font-style: italic;
        //     color : green;
        // }
    // `]

})

export class AppComponent {
    firstMediaItem = {
        id: 1,
        name: 'Firebug',
        medium: 'Series',
        category: 'Science Fiction',
        year: 2010,
        watchedOn: 1294166565384, //if this is null the *ngIf
        isFavorite: false
      };

      onMediaItemDelete(mediaItem) {}
 } 