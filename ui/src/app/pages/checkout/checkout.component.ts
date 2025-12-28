import { NgFor, NgIf } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

type Coord = { x: number; y: number };

type PaymentMethod = {
  id: string;
  label: string;
  detail: string;
};

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  private cartService = inject(CartService);

  protected cartItems = this.cartService.items;
  protected cartTotal = this.cartService.total;
  protected cartSource = this.cartService.source;

  protected user = {
    name: 'Martin L.',
    address: 'Siemensstrasse 97, 9111 Villach',
    coords: { x: 4, y: 6 }
  };

  protected gridSize = 10;
  protected gridCells = Array.from({ length: this.gridSize * this.gridSize }, (_, index) => {
    const x = (index % this.gridSize) + 1;
    const y = this.gridSize - Math.floor(index / this.gridSize);
    return { x, y };
  });

  protected paymentMethods: PaymentMethod[] = [
    { id: 'card', label: 'Kreditkarte', detail: 'Visa, Mastercard' },
    { id: 'paypal', label: 'PayPal', detail: 'Schnell und sicher' },
    { id: 'cash', label: 'Barzahlung', detail: 'Zahlen bei Lieferung' }
  ];

  protected selectedPayment = 'card';

  protected distance = computed(() => {
    const source = this.cartSource();
    if (!source) {
      return null;
    }
    return Math.abs(source.coords.x - this.user.coords.x) + Math.abs(source.coords.y - this.user.coords.y);
  });

  protected etaMinutes = computed(() => {
    const distance = this.distance();
    if (distance === null) {
      return null;
    }
    if (distance <= 3) {
      return 20;
    }
    if (distance <= 6) {
      return 35;
    }
    return 50;
  });

  selectPayment(id: string): void {
    this.selectedPayment = id;
  }

  isRestaurant(cell: Coord): boolean {
    const source = this.cartSource();
    return !!source && cell.x === source.coords.x && cell.y === source.coords.y;
  }

  isUser(cell: Coord): boolean {
    return cell.x === this.user.coords.x && cell.y === this.user.coords.y;
  }

  formatPrice(value: number): string {
    return this.cartService.formatPrice(value);
  }
}
