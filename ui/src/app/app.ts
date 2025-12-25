import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ui');
  protected readonly navOpen = signal(false);

  toggleNav(): void {
    this.navOpen.update((current) => !current);
  }

  closeNav(): void {
    this.navOpen.set(false);
  }
}
