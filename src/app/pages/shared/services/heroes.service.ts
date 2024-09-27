import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { BASE_URL } from '@bases/base.token'
import { Hero } from '@models/core'
import { CreateQueryResult, injectQuery } from '@tanstack/angular-query-experimental'
import { firstValueFrom } from 'rxjs'

@Injectable()
export class HeroesService {
  #baseUrl = inject(BASE_URL)
  #http = inject(HttpClient)

  getEntries(): CreateQueryResult<Hero[], Error> {
    return injectQuery(() => ({
      queryKey: ['heroes'],
      queryFn: () => {
        return firstValueFrom(this.#http.get<Hero[]>(`${this.#baseUrl}/heroes`))
      },
    }))
  }

  mutateEntry() {
    // TODO: Implement
  }

  deleteEntry() {
    // TODO: Implement
  }
}
