import { platformBrowserDynamic  } from '@angular/platform-browser-dynamic';
//this func (and not essentially import a class this time) return a plateform object that have a bootsrap module function on it  
//that is the function we will use to bootstrap the root module on the plateform
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule); 
