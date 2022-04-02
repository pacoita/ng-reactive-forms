import { FormFieldType } from '../../src/app/dynamic-generation/model/form-field-types.enum.ts';

const configs = {
  admin: {
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
  },
  user: {
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
        value: 'Best Piadina SPA',
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
  },
};

export const getAllFormConfigs = ({ response }: { response: any }) => {
  response.body = configs;
};

export const getFormConfigByRole = ({
  params,
  response,
}: {
  params: { role: string };
  response: any;
}) => {
  try {
    const role = params.role as 'user' | 'admin';
    const targetConfigs = configs[role];
    if (targetConfigs) {
      response.status = 200;
      response.body = targetConfigs;
    } else {
      response.status = 404;
      response.body = [];
    }
  } catch (error) {
    response.status = 500;
    response.body = error;
  }
};
