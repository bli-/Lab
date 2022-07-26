import { Component, OnInit } from '@angular/core';
import { Name } from './models/name';
import { User } from './models/user';
import { RandomUserService } from './random-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public user: User;

  constructor(private userService: RandomUserService) {
    this.user = new User();
    this.user.name = new Name();
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
      this.user = response.results[0];
    })
  }

}
