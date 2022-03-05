import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { FormFieldConfig } from '../model/form-field-config-model';
import { FormFieldType } from '../model/form-field-types.enum';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  getDynamicFormFields(
    userType: 'user' | 'admin'
  ): Observable<FormFieldConfig[]> {
    // The condition here is just for sake of example
    // to simulate a server providing different configs
    if (userType === 'admin') {
      return of([
        {
          fieldId: 'role',
          type: FormFieldType.text,
          value: 'Site admin',
          label: 'User role',
          disabled: true,
        },
        {
          fieldId: 'onDuty',
          type: FormFieldType.checkbox,
          label: 'On duty',
          value: true,
        },
      ]);
    } else {
      return of([
        {
          fieldId: 'role',
          type: FormFieldType.text,
          value: 'Client',
          label: 'User role',
          disabled: true,
        },
        {
          fieldId: 'companyName',
          type: FormFieldType.text,
          label: 'Company Name',
          value: 'Trivadis',
          required: true,
        },
        {
          fieldId: 'favTech',
          type: FormFieldType.text,
          label: 'Favourite technology',
        },
      ]);
    }
  }
}
