import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet, RouterLink],
})
export class App {
  protected title = 'angular-course';
}
