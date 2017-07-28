import { Component } from '@angular/core';
import { User } from './shared/models/user'

@Component({
  selector: 'my-app',
  templateUrl:'./app/app.component.html',
  stylesUrls: ['./app/app.component.css']
})
export class AppComponent {
  message:string = "Mas que teste de mensagem é esse?";
  users: User[] = [
      {id:35, name:"Arthur Annibal", username:"annibal3d"},
      {id:36, name:"Gabriel Herpes", username:"gabigay"},
      {id:38, name:"Lucas a Guiar", username:"lusca123"},
  ];
  activeUser: User;

  selectUser(user) {
      this.activeUser = user;
      console.log(user);
  }

  onUserCreate(evt) {
      this.users.push(evt.user);
  }

}
