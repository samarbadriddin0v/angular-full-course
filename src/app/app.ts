import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [],
})
export class App {
  email = signal('');
  emailError = '';

  constructor() {
    effect(() => {
      const keyword = this.email();
      if (keyword.length >= 3) {
        console.log(`Searching for: ${keyword}`);
      }
    });
  }

  onEmailChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.email.set(input.value);
  }
}
