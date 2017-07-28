import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {


    todos: FirebaseListObservable<any[]>;

    constructor(db: AngularFireDatabase) {
        this.todos = db.list('/todos');
    }

    newTodo:string = "";

    add() {
        this.todos.push(this.newTodo);
        this.newTodo = '';
    }

    ngOnInit() {
        console.log(this)
    }

}
