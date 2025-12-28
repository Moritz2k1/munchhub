import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  private cartService = inject(CartService);
  protected cartOpen = true;
  protected cartItems = this.cartService.items;
  protected cartTotal = this.cartService.total;

  toggleCart(): void {
    this.cartOpen = !this.cartOpen;
  }

  removeFromCart(name: string): void {
    this.cartService.removeItem(name);
  }

  formatPrice(value: number): string {
    return this.cartService.formatPrice(value);
  }
}
