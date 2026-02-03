import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';


import { routes } from './app.routes';
import {provideToastr} from 'ngx-toastr'
import { provideAnimations } from '@angular/platform-browser/animations';
// import { provideAnimations } from '@angular/platform-browser/animations';




export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideToastr(),
    // provideToastr({
    //   timeOut: 3000,       // Auto close after 3s
    //   positionClass: 'toast-top-right',
    //   preventDuplicates: true,
    // }),
    provideAnimations()
    
    
   
    
  
   
  ]
}
