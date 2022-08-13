import { FormControl } from '@angular/forms';

export interface CoffeeOrder {
    coffeeName: FormControl<string>,
    qty: FormControl<number>,
    qtyConfirm: FormControl<number>,
    address: FormControl<string>
}