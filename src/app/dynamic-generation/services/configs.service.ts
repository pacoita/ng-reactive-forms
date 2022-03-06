import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { FormFieldConfig } from '../model/form-field-config-model';
import { FormFieldType } from '../model/form-field-types.enum';

@Injectable({
  providedIn: 'root',
})
export class ConfigsService {
  constructor(private http: HttpClient) {}

  getDynamicFormFields(
    userType: 'user' | 'admin'
  ): Observable<{ [groupName: string]: FormFieldConfig[] }> {
    return this.useLocalCode(userType);

    // If you want to use Deno as server, you the method below.
    // Remeber to start the Deno server first from the
    // folder: backprivate useDenoServer() {}end/server.ts  (All details are in the Backend/README file)

    // return this.useDenoServer(userType);
  }

  private useLocalCode(userType: 'user' | 'admin') {
    // The condition here is just for sake of example
    // to simulate a server providing different configs
    if (userType === 'admin') {
      return of({
        details: [
          {
            fieldId: 'role',
            type: FormFieldType.text,
            value: 'Site admin',
            label: 'User role',
            disabled: true,
          },
          {
            fieldId: 'duty',
            type: FormFieldType.checkbox,
            label: 'On duty',
            value: true,
          },
          {
            fieldId: 'logLevel',
            type: FormFieldType.select,
            label: 'Log level',
            value: '1',
            options: [
              { key: '1', value: 'Info' },
              { key: '2', value: 'Debug' },
              { key: '3', value: 'Warning' },
              { key: '4', value: 'Error' },
            ],
          },
        ],
        address: [
          {
            fieldId: 'street',
            type: FormFieldType.text,
            value: 'via Rossi 123',
            label: 'Street',
          },
          {
            fieldId: 'city',
            type: FormFieldType.text,
            value: 'Bologna',
            label: 'City',
            required: true,
          },
          {
            fieldId: 'dutyPhone',
            type: FormFieldType.text,
            value: '+39 12458695',
            label: 'Duty Phone Number',
            required: true,
          },
        ],
      });
    } else {
      return of({
        details: [
          {
            fieldId: 'role',
            type: FormFieldType.text,
            value: 'user',
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
        ],
        address: [
          {
            fieldId: 'street',
            type: FormFieldType.text,
            value: 'Piazza Verdi 3',
            label: 'Street',
          },
          {
            fieldId: 'city',
            type: FormFieldType.text,
            value: 'Roma',
            label: 'City',
          },
          {
            fieldId: 'newsletter',
            type: FormFieldType.checkbox,
            label: 'Newsletter',
            value: 'true',
          },
        ],
      });
    }
  }

  private useDenoServer(userType: 'user' | 'admin') {
    return this.http.get<{ [groupName: string]: FormFieldConfig[] }>(
      `http://localhost:8500/form-config/${userType}`
    );
  }
}
