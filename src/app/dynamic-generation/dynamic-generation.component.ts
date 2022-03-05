import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormFieldConfig } from './model/form-field-config-model';
import { EmployeeService } from './services/employee.service';
import { FormFieldType } from './model/form-field-types.enum';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-dynamic-generation',
  templateUrl: './dynamic-generation.component.html',
  styleUrls: ['./dynamic-generation.component.scss'],
})
export class DynamicGenerationComponent implements OnInit {
  form!: FormGroup;
  dynamicFields?: FormFieldConfig[];
  formFieldTypes = FormFieldType;
  currentUserRole: 'user' | 'admin' = 'user';

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstname: [
        '',
        {
          validators: Validators.required,
          updateOn: 'blur',
        },
      ],
      lastname: ['', Validators.required],
      email: [''],
      addresses: this.fb.array([]),
      rating: [],
    });

    this.setDynamicForm(this.currentUserRole);
  }

  changeUserRole() {
    const newRole = this.currentUserRole === 'user' ? 'admin' : 'user';
    this.currentUserRole = newRole;
    this.setDynamicForm(newRole);
  }

  private setDynamicForm(userType: 'user' | 'admin') {
    this.form.removeControl('dynamicForm');
    this.employeeService
      .getDynamicFormFields(userType)
      .pipe(
        catchError(() => {
          return of([]);
        })
      )
      .subscribe((configs) => {
        if (configs.length < 1) {
          return;
        }
        this.dynamicFields = configs;

        const formControls: { [key: string]: FormControl } = {};
        configs.forEach((config: FormFieldConfig) => {
          formControls[config.fieldId] = new FormControl(
            {
              value: this.setFieldValue(config.value, config.type),
              disabled: config.disabled || false,
            },
            {
              validators: config.required ? Validators.required : null,
            }
          );
        });
        const dynamicForm = this.fb.group(formControls);
        this.form.addControl('dynamicForm', dynamicForm);
      });
  }

  private setFieldValue(
    value: string | number | boolean | undefined,
    type: FormFieldType
  ): string | boolean | number {
    switch (type) {
      case FormFieldType.text:
        return value ?? '';

      case FormFieldType.checkbox:
        return value ?? false;

      default:
        return '';
    }
  }

  trackById(index: number, item: FormFieldConfig) {
    return item.fieldId ?? index;
  }
}
