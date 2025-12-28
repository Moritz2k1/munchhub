import { NgFor, NgIf } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

type Category = {
  label: string;
  count: number;
};

type MenuItem = {
  name: string;
  price: string;
  priceValue: number;
  description: string;
  image: string;
};

type MenuSection = {
  title: string;
  subtitle: string;
  items: MenuItem[];
};

type RestaurantData = {
  slug: string;
  name: string;
  image: string;
  cuisine: string;
  address: string;
  rating: number;
  ratingCount: number;
  eta: string;
  categories: Category[];
  menuSections: MenuSection[];
};

const DEFAULT_SLUG = 'negans-picolini';

const RESTAURANTS: Record<string, RestaurantData> = {
  'hawking-labs': {
    slug: 'hawking-labs',
    name: 'Hawking Labs',
    image: '/assets/images/strange/01.png',
    cuisine: 'Burger | Desserts | Specials',
    address: 'Labstrasse 4, 9020 Hawkins',
    rating: 4.8,
    ratingCount: 214,
    eta: '30-40 min',
    categories: [
      { label: 'Burger', count: 6 },
      { label: 'Desserts', count: 4 },
      { label: 'Combos', count: 3 },
      { label: 'Specials', count: 5 },
      { label: 'Drinks', count: 8 }
    ],
    menuSections: [
      {
        title: 'Lab Burger',
        subtitle: 'Klassiker aus dem Upside Down.',
        items: [
          {
            name: 'Smoky Burger',
            price: '12.90 EUR',
            priceValue: 12.9,
            description: 'Doppeltes Patty, Cheddar und rauchige Sauce.',
            image: '/assets/images/foodpics/burger01.png'
          },
          {
            name: 'Portal Melt',
            price: '10.50 EUR',
            priceValue: 10.5,
            description: 'Grilled Cheese mit karamellisierten Zwiebeln.',
            image: '/assets/images/foodpics/whateverinbrown.png'
          },
          {
            name: 'Veggie Byte',
            price: '9.20 EUR',
            priceValue: 9.2,
            description: 'Gemuesebratling, Avocado und Kraeuter.',
            image: '/assets/images/foodpics/whatever.png'
          },
          {
            name: 'Lab Fries',
            price: '4.10 EUR',
            priceValue: 4.1,
            description: 'Pommes mit Paprika Dust und Dip.',
            image: '/assets/images/foodpics/pomm.png'
          }
        ]
      },
      {
        title: 'Desserts',
        subtitle: 'Suess und ein bisschen strange.',
        items: [
          {
            name: 'Upside Down Shake',
            price: '5.80 EUR',
            priceValue: 5.8,
            description: 'Vanille, Karamell und Crunch.',
            image: '/assets/images/foodpics/milkshake.png'
          },
          {
            name: 'Dark Portal Cake',
            price: '6.40 EUR',
            priceValue: 6.4,
            description: 'Schokoladig, weich und leicht salzig.',
            image: '/assets/images/foodpics/whateverthisshitis.png'
          },
          {
            name: 'Energy Cookies',
            price: '3.20 EUR',
            priceValue: 3.2,
            description: 'Hafer, Nuss und dunkle Schokolade.',
            image: '/assets/images/foodpics/whateverinbrown.png'
          },
          {
            name: 'Mini Waffles',
            price: '4.90 EUR',
            priceValue: 4.9,
            description: 'Mit Beeren und Vanillesauce.',
            image: '/assets/images/foodpics/pizza01.png'
          }
        ]
      }
    ]
  },
  'negans-picolini': {
    slug: 'negans-picolini',
    name: 'Negans Picolini',
    image: '/assets/images/restaurants/walkingdead.png',
    cuisine: 'Burger | Doener | Pommes | Tuerkisch',
    address: 'Siemensstrasse 97, 9111 Villach',
    rating: 4.8,
    ratingCount: 300,
    eta: '25-35 min',
    categories: [
      { label: 'Vegetarisch', count: 12 },
      { label: 'Combo Deals', count: 3 },
      { label: 'Boxen', count: 6 },
      { label: 'Tellergerichte', count: 5 },
      { label: 'Pizza Normal', count: 13 }
    ],
    menuSections: [
      {
        title: 'Vegetarisch',
        subtitle: 'Frische Auswahl fuer leichte Gerichte.',
        items: [
          {
            name: 'Doener Kebap',
            price: 'ab 3.45 EUR',
            priceValue: 3.45,
            description: 'Frisches Fladenbrot, bunte Salate und hausgemachte Sauce.',
            image: '/assets/images/foodpics/whatever.png'
          },
          {
            name: 'Falafel Wrap',
            price: 'ab 4.20 EUR',
            priceValue: 4.2,
            description: 'Knusprige Falafel, Sesamsauce und frisches Gemuese.',
            image: '/assets/images/foodpics/whateverinbrown.png'
          },
          {
            name: 'Veggie Bowl',
            price: 'ab 5.10 EUR',
            priceValue: 5.1,
            description: 'Bunte Bowl mit Reis, Avocado und Limetten-Dressing.',
            image: '/assets/images/foodpics/milkshake.png'
          },
          {
            name: 'Ofengemuese',
            price: 'ab 3.90 EUR',
            priceValue: 3.9,
            description: 'Gemuese aus dem Ofen mit Kraeuterquark und Sesam.',
            image: '/assets/images/foodpics/pomm.png'
          }
        ]
      },
      {
        title: 'Tellergerichte',
        subtitle: 'Klassiker aus der Kueche des Hauses.',
        items: [
          {
            name: 'Kebap Teller',
            price: 'ab 7.20 EUR',
            priceValue: 7.2,
            description: 'Doenerfleisch, Pommes, Salat und Joghurtsauce.',
            image: '/assets/images/foodpics/burger01.png'
          },
          {
            name: 'Grill Mix',
            price: 'ab 9.80 EUR',
            priceValue: 9.8,
            description: 'Gemischter Grillteller mit Reis und hausgemachter Sauce.',
            image: '/assets/images/foodpics/whateverthisshitis.png'
          },
          {
            name: 'Pizza Classic',
            price: 'ab 8.50 EUR',
            priceValue: 8.5,
            description: 'Tomatensauce, Mozzarella und frisches Basilikum.',
            image: '/assets/images/foodpics/pizza01.png'
          },
          {
            name: 'Hausburger',
            price: 'ab 6.90 EUR',
            priceValue: 6.9,
            description: 'Saftiger Burger mit Cheddar und hausgemachten Saucen.',
            image: '/assets/images/foodpics/whateverinbrown.png'
          }
        ]
      }
    ]
  },
  'the-rocks': {
    slug: 'the-rocks',
    name: "The Rock's",
    image: '/assets/images/restaurants/therock.png',
    cuisine: 'BBQ | Grill | Burger',
    address: 'Jungle Road 7, 1234 Tschungle',
    rating: 4.9,
    ratingCount: 160,
    eta: '20-30 min',
    categories: [
      { label: 'BBQ', count: 7 },
      { label: 'Grill', count: 5 },
      { label: 'Burger', count: 4 },
      { label: 'Sides', count: 6 },
      { label: 'Drinks', count: 9 }
    ],
    menuSections: [
      {
        title: 'Grill Teller',
        subtitle: 'Fuer alle, die es rauchig moegen.',
        items: [
          {
            name: 'BBQ Ribs',
            price: '13.80 EUR',
            priceValue: 13.8,
            description: 'Ribs mit Haus-BBQ und Kraut.',
            image: '/assets/images/foodpics/whateverthisshitis.png'
          },
          {
            name: 'Rock Burger',
            price: '11.20 EUR',
            priceValue: 11.2,
            description: 'Rind, Cheddar und knusprige Zwiebeln.',
            image: '/assets/images/foodpics/burger01.png'
          },
          {
            name: 'Spicy Wings',
            price: '8.40 EUR',
            priceValue: 8.4,
            description: 'Scharf glasiert mit Limette.',
            image: '/assets/images/foodpics/whatever.png'
          },
          {
            name: 'Steak Plate',
            price: '15.60 EUR',
            priceValue: 15.6,
            description: 'Medium Steak mit Ofenkartoffel.',
            image: '/assets/images/foodpics/whateverinbrown.png'
          }
        ]
      },
      {
        title: 'Sides und Snacks',
        subtitle: 'Das Beste fuer den Extra-Crunch.',
        items: [
          {
            name: 'Loaded Fries',
            price: '5.20 EUR',
            priceValue: 5.2,
            description: 'Pommes mit Cheddar und Jalapenos.',
            image: '/assets/images/foodpics/pomm.png'
          },
          {
            name: 'Grill Mais',
            price: '4.00 EUR',
            priceValue: 4.0,
            description: 'Maiskolben mit Chili Butter.',
            image: '/assets/images/foodpics/pizza01.png'
          },
          {
            name: 'Coleslaw',
            price: '3.60 EUR',
            priceValue: 3.6,
            description: 'Krautsalat mit Limette.',
            image: '/assets/images/foodpics/whatever.png'
          },
          {
            name: 'Haus Dip Box',
            price: '2.80 EUR',
            priceValue: 2.8,
            description: 'Drei Saucen fuer alles.',
            image: '/assets/images/foodpics/whateverthisshitis.png'
          }
        ]
      }
    ]
  }
};

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {
  protected cartOpen = true;
  protected restaurant: RestaurantData = RESTAURANTS[DEFAULT_SLUG];

  private route = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);
  private cartService = inject(CartService);
  protected cartItems = this.cartService.items;
  protected cartTotal = this.cartService.total;

  constructor() {
    this.route.paramMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => {
        const slug = params.get('slug') ?? DEFAULT_SLUG;
        this.restaurant = RESTAURANTS[slug] ?? RESTAURANTS[DEFAULT_SLUG];
      });
  }

  toggleCart(): void {
    this.cartOpen = !this.cartOpen;
  }

  addToCart(item: MenuItem, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.cartService.addItem({
      name: item.name,
      price: item.priceValue,
      image: item.image
    });
    this.cartOpen = true;
  }

  removeFromCart(name: string, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.cartService.removeItem(name);
  }

  formatPrice(value: number): string {
    return this.cartService.formatPrice(value);
  }
}
