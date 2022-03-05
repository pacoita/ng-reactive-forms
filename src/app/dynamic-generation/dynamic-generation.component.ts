import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormFieldConfig } from './model/form-field-config-model';
import { EmployeeService } from './services/employee.service';
import { FormFieldType } from './model/form-field-types.enum';
import { catchError, of, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dynamic-generation',
  templateUrl: './dynamic-generation.component.html',
  styleUrls: ['./dynamic-generation.component.scss'],
})
export class DynamicGenerationComponent implements OnInit, OnDestroy {
  form?: FormGroup;
  dynamicFields?: { [groupName: string]: FormFieldConfig[] };
  formFieldTypes = FormFieldType;
  currentUserRole: 'user' | 'admin' = 'user';

  private destroy$ = new Subject<boolean>();

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    // this.form = this.fb.group({
    //   firstname: [
    //     '',
    //     {
    //       validators: Validators.required,
    //       updateOn: 'blur',
    //     },
    //   ],
    //   lastname: ['', Validators.required],
    //   email: [''],
    //   addresses: this.fb.array([]),
    //   rating: [],
    // });

    this.setDynamicForm(this.currentUserRole);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  changeUserRole() {
    const newRole = this.currentUserRole === 'user' ? 'admin' : 'user';
    this.currentUserRole = newRole;
    this.setDynamicForm(newRole);
  }

  private setDynamicForm(userType: 'user' | 'admin') {
    // Here, we reset the form each time as we re-use it for the sake of demo.
    // This would not be necessary if we do not inject different configs into
    // teh same root FormGroup
    this.form = this.fb.group({});

    this.employeeService
      .getDynamicFormFields(userType)
      .pipe(takeUntil(this.destroy$))
      .subscribe((configs: { [groupName: string]: FormFieldConfig[] }) => {
        this.dynamicFields = configs;

        const formControls: { [key: string]: FormControl } = {};
        for (const groupName in configs) {
          configs[groupName].forEach((control: FormFieldConfig) => {
            formControls[control.fieldId] = this.fb.control(
              {
                value: this.setFieldValue(control.value, control.type),
                disabled: control.disabled ?? false,
              },
              {
                validators: control.required ? Validators.required : null,
              }
            );
          });
          const dynamicForm = this.fb.group(formControls);
          this.form?.addControl(groupName, dynamicForm);
        }
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

      case FormFieldType.select:
        return value ?? -1;

      default:
        return '';
    }
  }

  trackById(index: number, item: FormFieldConfig) {
    return item.fieldId ?? index;
  }
}
