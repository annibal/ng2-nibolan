import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
    selector:'user-form',
    template: `
        <form #form="ngForm" (ngSubmit)="onSubmit()" *ngIf="active">

            <div class="form-group"
                [ngClass]="{ 'has-error': name.invalid && name.touched }">
                <input type="text"
                    placeholder="Name"
                    class="form-control"
                    name="name"
                    [(ngModel)]="newUser.name"
                    #name="ngModel"
                    required>

                <span class="help-block"
                    *ngIf="name.invalid && name.touched">
                    Name is Required
                </span>
            </div>

            <div class="form-group"
                [ngClass]="{ 'has-error': username.invalid && username.touched }">
                <input type="text"
                    placeholder="Username"
                    class="form-control"
                    name="username"
                    [(ngModel)]="newUser.username"
                    #username="ngModel"
                    required>

                <span class="help-block"
                    *ngIf="username.invalid && username.touched">
                    Username is Required
                </span>
            </div>

            <button type="submit"
                class="btn btn-lg btn-primary btn-block"
                [disabled]="form.invalid">
                Create user
            </button>
        </form>
    `,
    styles:[`
        form {
            padding:10px;
            background:#ECF0F1;
            border-radius:3px;
            margin-bottom:30px;
        }
    `]
})
export class UserFormComponent {
    @Output() userCreate = new EventEmitter();

    newUser:User = new User();
    active:boolean = true;

    onSubmit() {
        this.userCreate.emit({ user : this.newUser });

        this.newUser = new User();
        this.active = false;
        setTimeout(x => this.active = true, 0)
    }
}
