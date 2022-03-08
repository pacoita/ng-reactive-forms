import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { orderValidator } from './validators/order-validator';

@Component({
  selector: 'app-cross-validation',
  templateUrl: './cross-validation.component.html',
  styleUrls: ['./cross-validation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrossValidationComponent {
  orderShipped = false;

  get coffeeName() {
    return this.orderForm.get('coffeeName');
  }
  get qty() {
    return this.orderForm.get('qty');
  }
  get qtyConfirm() {
    return this.orderForm.get('qtyConfirm');
  }

  constructor(private fb: FormBuilder) {}

  orderForm = this.fb.group(
    {
      coffeeName: ['', Validators.required],
      qty: ['', Validators.required],
      qtyConfirm: ['', Validators.required],
      address: [''],
    },
    {
      validators: orderValidator,
      // Using a generic version
      //validators: equalityValidator('qty', 'qtyConfirm'),
    }
  );

  shipOrder() {
    if (this.orderForm.valid) {
      this.orderShipped = true;
    }
  }
}
