import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ResolveFn } from '@angular/router';
import { delay, of } from 'rxjs';

export const userResolver: ResolveFn<boolean> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return of(false).pipe(delay(5000));
};


