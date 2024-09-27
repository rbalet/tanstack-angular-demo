import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router'
import { SessionService } from '@services/session.service'

@Injectable({
  providedIn: 'root',
})
export class SessionGuard {
  constructor(
    private _router: Router,
    private _sessionService: SessionService,
  ) {}

  async canActivateChild(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) {
    // @ToDo: find how to properly use TanStack query data clearing

    const isLoggedIn = this._sessionService.session

    if (_state.url.includes('auth')) {
      if (!isLoggedIn) {
        return true
      }

      this._router.navigate([''])
      return false
    } else {
      if (isLoggedIn) {
        return true
      }

      this._router.navigate(['/auth'])
      return false
    }
  }
}
