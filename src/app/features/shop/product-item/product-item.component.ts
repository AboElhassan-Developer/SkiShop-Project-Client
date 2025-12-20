import { Component, Input } from '@angular/core';
import { Product } from '../../../shared/models/product';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { MatAnchor } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-item',
  imports: [
    MatCard,
    CurrencyPipe,
    MatCardContent,
    MatCardActions,
    MatAnchor,
    MatIcon
],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent {
@Input() product?: Product;
}
