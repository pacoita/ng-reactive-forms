import { FormControl } from "@angular/forms";

export interface RegistrationForm {
    name: FormControl<string>;
    address: FormControl<string>;
    isAbroad: FormControl<boolean>;
    userProfile: FormControl<string>;
}