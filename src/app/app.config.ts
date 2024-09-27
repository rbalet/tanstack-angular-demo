import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core'
import { provideRouter } from '@angular/router'

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'
import { SessionService } from '@services/session.service'
import { provideAngularQuery, QueryClient } from '@tanstack/angular-query-experimental'
import { filter, firstValueFrom, take } from 'rxjs'
import { environment } from '../environments/environment'
import { routes } from './app.routes'
import { BASE_URL } from './core/bases/base.token'

export function initApp(session: SessionService) {
  return async () => {
    await firstValueFrom(
      session.initialized$.pipe(
        filter((event) => (event ? true : false)),
        take(1),
      ),
    )
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: BASE_URL, useValue: `${environment.baseUrl}` },

    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [SessionService],
      multi: true,
    },

    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptorsFromDi()),

    provideAngularQuery(new QueryClient()),

    provideRouter(routes),
  ],
}
