import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  private existingUsernames = ['francesco', 'paco', 'lucy'];

  checkIfUsernameExists(value: string): Observable<boolean> {
    return of(this.existingUsernames.some((a) => a === value)).pipe(
      delay(1500)
    );
  }
}
