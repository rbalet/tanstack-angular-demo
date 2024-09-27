import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { AngularQueryDevtools } from '@tanstack/angular-query-devtools-experimental'
import { environment } from '../environments/environment'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,

    // DevToolsExtension,
    environment.production ? [] : AngularQueryDevtools,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isProduction = environment.production

  title = 'tanstack-angular-demo'
}
