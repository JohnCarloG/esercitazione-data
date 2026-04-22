import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// Configurazione globale dell'app: registra i servizi disponibili tramite dependency injection.
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(), // cattura gli errori non gestiti nel browser
    provideRouter(routes)                 // registra il router (rotte vuote: app a pagina singola)
  ]
};
