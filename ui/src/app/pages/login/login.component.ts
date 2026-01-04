import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {}

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

  handleLogin(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/dashboard']);
  }
}