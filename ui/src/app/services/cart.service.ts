import { Injectable, computed, signal } from '@angular/core';

export type CartItem = {
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export type CartSource = {
  name: string;
  address: string;
  coords: { x: number; y: number };
};

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly itemsSignal = signal<CartItem[]>([]);
  private readonly sourceSignal = signal<CartSource | null>(null);

  readonly items = computed(() => this.itemsSignal());
  readonly total = computed(() =>
    this.itemsSignal().reduce((sum, item) => sum + item.price * item.quantity, 0)
  );
  readonly count = computed(() =>
    this.itemsSignal().reduce((sum, item) => sum + item.quantity, 0)
  );
  readonly source = computed(() => this.sourceSignal());

  addItem(item: Omit<CartItem, 'quantity'>, source?: CartSource): void {
    if (source) {
      const currentSource = this.sourceSignal();
      if (!currentSource || currentSource.name !== source.name) {
        this.itemsSignal.set([]);
      }
      this.sourceSignal.set(source);
    }
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
    if (this.itemsSignal().length === 0) {
      this.sourceSignal.set(null);
    }
  }

  formatPrice(value: number): string {
    return `${value.toFixed(2)} EUR`;
  }
}
