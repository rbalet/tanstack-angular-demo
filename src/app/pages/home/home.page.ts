import { NgFor } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { HeroComponent } from '@pages/shared/components/hero/hero.component'
import { HeroesService } from '@pages/shared/services/heroes.service'

@Component({
  selector: 'tanstack-home',
  standalone: true,
  imports: [
    NgFor,

    // Components
    HeroComponent,
  ],
  providers: [HeroesService],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  #heroesService = inject(HeroesService)

  heroes$ = this.#heroesService.getEntries()
}
