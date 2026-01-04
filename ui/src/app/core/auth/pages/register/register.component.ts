import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  protected parallaxX = 0;
  protected parallaxY = 0;

  onParallaxMove(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement | null;
    if (!target) {
      return;
    }

    const rect = target.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    const maxOffset = 18;

    this.parallaxX = (offsetX / rect.width) * maxOffset;
    this.parallaxY = (offsetY / rect.height) * maxOffset;
  }

  resetParallax(): void {
    this.parallaxX = 0;
    this.parallaxY = 0;
  }
}
