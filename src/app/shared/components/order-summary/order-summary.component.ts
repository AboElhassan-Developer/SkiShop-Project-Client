import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MatButton, MatAnchor } from "@angular/material/button";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { CartService } from '../../../core/services/cart.service';
import { CurrencyPipe, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StripeService } from '../../../core/services/stripe.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-order-summary',
  imports: [RouterLink, MatButton, MatAnchor, MatFormField, MatLabel, MatInput, CurrencyPipe, FormsModule],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss',
})
export class OrderSummaryComponent {
  cartService = inject(CartService);
  stripeService = inject(StripeService);
  location = inject(Location);
  voucherCode = '';
  couponError = '';

  async applyCode() {
    if (!this.voucherCode) return;
     if (this.cartService.cart()?.couponId) {
       this.couponError = 'A coupon is already applied!';
       setTimeout(() => this.couponError = '', 3000);
      return;
    }
    try {
      await firstValueFrom(this.stripeService.applyCoupon(this.voucherCode));
      this.couponError = '';
      this.voucherCode = '';
    } catch (error: any) {
      this.couponError = 'Invalid voucher code';
      setTimeout(() => this.couponError = '', 3000);
    }
  }
}
