import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { DropDown, PackageOrder } from '../model/package-order';
import { packageValidator } from '../validators/order-validator';

@Component({
    selector: 'app-package-order',
    templateUrl: './package-order.component.html',
    styleUrls: ['./package-order.component.scss'],
    standalone: false
})
export class PackageOrderComponent implements OnInit {

  packageOrderForm!: FormGroup<PackageOrder>;
  packages: DropDown[] = [
    { label: 'Standard', value: 'pack1' },
    { label: 'Wooden box (from 2kg or more)', value: 'pack2' },
    { label: 'Metal box (from 5kg or more)', value: 'pack3' },
  ];

  readonly defaultPackage = this.packages[0].value;

  get customerName() {
    return this.packageOrderForm.get('customerName');
  }
  get qty() {
    return this.packageOrderForm.get('qty');
  }

  constructor(private fb: NonNullableFormBuilder) { }

  ngOnInit(): void {
    this.packageOrderForm = this.fb.group({
      customerName: ['', Validators.required],
      qty: [1, [Validators.required, Validators.min(1)]],
      packageType: [this.defaultPackage],
    },
    { validators: packageValidator}
    );
  }

  shipOrder() {
    this.packageOrderForm.markAllAsTouched();
    if (this.packageOrderForm.valid) {
      console.log(this.packageOrderForm.value);
    }
  }

}
