import { FavoriteDirective } from './favorite.directive';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MediaItemComponent} from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';



@NgModule({
    //metadatas
    imports: [
        BrowserModule
    ],
    //The declarations property is used to make components, directives, 
    //and pipes available to your module that don't come from another module. 
    declarations: [
        AppComponent,
        MediaItemComponent,
        MediaItemListComponent,
        FavoriteDirective
    ],
    //The bootstrap property is used for a root module and will let Angular know which component or components will be 
    //the starting point for the bootstrap process. Basically, the entry point for your app code.
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}