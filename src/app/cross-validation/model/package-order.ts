import { FormControl } from '@angular/forms';

export interface DropDown {
    label: string,
    value: string
}

export interface PackageOrder {
    customerName: FormControl<string>,
    qty: FormControl<number>,
    packageType: FormControl<string>
}