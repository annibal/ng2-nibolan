import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <header>
      <nav class="navbar navbar-inverse">
        <div class="navbar-header">
          <a href="/" class="navbar-brand">Olar</a>
        </div>
      </nav>
    </header>

    <main>
      <div class="jumbotron">
        <h1>Welcome to Our App!</h1>
        <p>{{message}}</p>
      </div>
    </main>

    <ul class="list-group" *ngIf="items && items.length > 0">
      <li class="list-group-item" *ngFor="let item of items">
        {{item}}
      </li>
    </ul>

    <footer>
      Coperight &copy; nibalAn
    </footer>

  `,
  styles: [`
    .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
  `]
})
export class AppComponent {
  message = "Mas que teste de mensagem é esse?";
  items = [
    "oi",
    "Olar",
    "uehu teste 123",
    "Maisum"
  ];

}
