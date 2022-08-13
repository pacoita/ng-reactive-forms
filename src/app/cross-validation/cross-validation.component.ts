import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { orderValidator } from './validators/order-validator';
import { CoffeeOrder } from './model/coffee-order';

@Component({
  selector: 'app-cross-validation',
  templateUrl: './cross-validation.component.html',
  styleUrls: ['./cross-validation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrossValidationComponent implements OnInit {
  orderShipped = false;

  orderForm!: FormGroup<CoffeeOrder>;

  get coffeeName() {
    return this.orderForm.get('coffeeName');
  }
  get qty() {
    return this.orderForm.get('qty');
  }
  get qtyConfirm() {
    return this.orderForm.get('qtyConfirm');
  }

  constructor(private fb: NonNullableFormBuilder) {}

  ngOnInit(): void {
    this.orderForm = this.fb.group(
      {
        coffeeName: ['', Validators.required],
        qty: [0, [Validators.required, Validators.minLength(1)]],
        qtyConfirm: [0, [Validators.required, Validators.minLength(1)]],
        address: ['']
      },
      {
        validators: orderValidator,
        // Using a generic version
        //validators: equalityValidator('qty', 'qtyConfirm'),
      }
    );
  }

  shipOrder() {
    if (this.orderForm.valid) {
      this.orderShipped = true;
    }
  }
}
