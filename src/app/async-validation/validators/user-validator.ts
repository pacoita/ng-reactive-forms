import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';

export class UserValidator {
  static usernameValidator(userService: UserService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return userService.checkIfUsernameExists(control.value).pipe(
        map((result: boolean) => (result ? { usernameExists: true } : null)),
        // If an error occurs, we could decide to generate a specific ValidationError
        catchError(() => of(null))
      );
    };
  }
}