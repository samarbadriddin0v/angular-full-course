import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [],
})
export class App {
  count = signal(0);

  constructor() {
    effect(() => {
      console.log('Count changed:', this.count());
      localStorage.setItem('count', this.count.toString());
    });
  }

  increment = () => this.count.update((c) => c + 1);
  decrement = () => this.count.update((c) => c - 1);
  reset = () => this.count.set(0);
}
