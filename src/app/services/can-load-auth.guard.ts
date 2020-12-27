import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { defaultIfEmpty, filter, first, map, tap } from 'rxjs/operators';
import { AuthStore } from './auth.store';

@Injectable()
export class CanLoadAuthGuard implements CanLoad {
  constructor(
    private auth: AuthStore,
    private router: Router,
  ) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> {
    return this.auth.isLoggedIn$.pipe(
      first(),
      filter(isLoggedIn => !isLoggedIn),
      map(() => this.router.parseUrl('/login')),
      defaultIfEmpty<UrlTree, boolean>(true),
    );
  }
}
