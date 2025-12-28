import { Injectable, computed, signal } from '@angular/core';

export type CartItem = {
  name: string;
  price: number;
  image: string;
  quantity: number;
};

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly itemsSignal = signal<CartItem[]>([]);

  readonly items = computed(() => this.itemsSignal());
  readonly total = computed(() =>
    this.itemsSignal().reduce((sum, item) => sum + item.price * item.quantity, 0)
  );
  readonly count = computed(() =>
    this.itemsSignal().reduce((sum, item) => sum + item.quantity, 0)
  );

  addItem(item: Omit<CartItem, 'quantity'>): void {
    this.itemsSignal.update((items) => {
      const existing = items.find((entry) => entry.name === item.name);
      if (existing) {
        return items.map((entry) =>
          entry.name === item.name
            ? { ...entry, quantity: entry.quantity + 1 }
            : entry
        );
      }
      return [...items, { ...item, quantity: 1 }];
    });
  }

  removeItem(name: string): void {
    this.itemsSignal.update((items) => {
      const existing = items.find((entry) => entry.name === name);
      if (!existing) {
        return items;
      }
      if (existing.quantity > 1) {
        return items.map((entry) =>
          entry.name === name ? { ...entry, quantity: entry.quantity - 1 } : entry
        );
      }
      return items.filter((entry) => entry.name !== name);
    });
  }

  formatPrice(value: number): string {
    return `${value.toFixed(2)} EUR`;
  }
}
