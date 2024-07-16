import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public anime: any[] = [];

  grandTotal: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getOrder().subscribe((res) => {
      this.anime = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }

  removeItem(anime: any): void {
    this.cartService.removecartItem(anime);
    this.updateTotal();
  }

  emptyCart(): void {
    this.cartService.removeAllcat();
    this.updateTotal();
  }

  private updateTotal(): void {
    this.grandTotal = this.cartService.getTotalPrice();
  }
  payNow(): void {
    alert('Proceeding to payment for the amount of ₹${this.grandTotal}');

    this.emptyCart();
    this.updateTotal();
  }
  calculateTotal() {
    this.grandTotal = 0;
    if (this.anime.length !== 0) {
      // Loop through anime items and calculate total
      for (let item of this.anime[0]) {
        this.grandTotal += item.total;
      }
    }
  }
}
