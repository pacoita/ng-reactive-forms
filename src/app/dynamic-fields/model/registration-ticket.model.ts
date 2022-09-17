import { FormArray, FormControl } from "@angular/forms";

export interface RegistrationTicketForm {
    name: FormControl<string>;
    jobTitle: FormControl<string>;
    companyName: FormControl<string>;
    participants: FormArray;
  }