import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { BASE_URL } from '@bases/base.token'
import { Session } from '@models/core'
import { CreateQueryResult, injectQuery } from '@tanstack/angular-query-experimental'
import { BehaviorSubject, firstValueFrom, map } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  #baseUrl = inject(BASE_URL)
  #http = inject(HttpClient)

  initialized$: BehaviorSubject<boolean> = new BehaviorSubject(false)
  session$ = this.getMe()
  session?: Session

  constructor() {}

  getMe(): CreateQueryResult<Session, Error> {
    return injectQuery(() => ({
      queryKey: ['session'],
      queryFn: () =>
        firstValueFrom(
          this.#http.get<Session>(`${this.#baseUrl}/session`).pipe(
            map((value) => {
              this.session = value
              this.initialized$.next(true)

              return value
            }),
          ),
        ),
      retry: 1,
    }))
  }
}
