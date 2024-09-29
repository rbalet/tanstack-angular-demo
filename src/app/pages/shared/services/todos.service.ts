import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { BASE_URL } from '@bases/base.token'
import { Todo } from '@models/core'
import { CreateQueryResult, injectQuery } from '@tanstack/angular-query-experimental'
import { firstValueFrom } from 'rxjs'

@Injectable()
export class ToDoService {
  #baseUrl = inject(BASE_URL)
  #http = inject(HttpClient)

  getEntries(): CreateQueryResult<Todo[], Error> {
    return injectQuery(() => ({
      queryKey: ['todos'],
      queryFn: () => {
        return firstValueFrom(this.#http.get<Todo[]>(`${this.#baseUrl}/todos`))
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
