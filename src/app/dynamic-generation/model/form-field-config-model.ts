import { SelectOptions } from './select-options.model';
import { FormFieldType } from './form-field-types.enum';

export interface FormFieldConfig {
  fieldId: string;
  type: FormFieldType;
  label?: string;
  value?: string | boolean | number;

  // Options is used for drop-down elements
  options?: SelectOptions[];

  // State flags
  disabled?: boolean;
  required?: boolean;
}
