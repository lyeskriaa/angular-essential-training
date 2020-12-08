import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './catergory-list.pipe'
import { MediaItemFormComponent } from './media-item-form.component';

@NgModule({
    //metadatas
    imports: [
        BrowserModule,
        FormsModule
    ],
    //The declarations property is used to make components, directives, 
    //and pipes available to your module that don't come from another module. 
    //this declarations property is for components, directives and pipes is for components,
    // directives and pipes you want to make available to others within your module
    declarations: [
        AppComponent,
        MediaItemComponent,
        MediaItemListComponent,
        FavoriteDirective,
        CategoryListPipe,
        MediaItemFormComponent
    ],
    //The bootstrap property is used for a root module and will let Angular know which component or components will be 
    //the starting point for the bootstrap process. Basically, the entry point for your app code.
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}