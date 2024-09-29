import { NgFor } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { TodoComponent } from '@pages/shared/components/todo/todo.component'
import { ToDoService } from '@pages/shared/services/todos.service'

@Component({
  selector: 'tanstack-home',
  standalone: true,
  imports: [
    NgFor,

    // Components
    TodoComponent,
  ],
  providers: [ToDoService],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  #ToDoService = inject(ToDoService)

  todos$ = this.#ToDoService.getEntries()
}
