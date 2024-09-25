import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = {
    id: 1,
    name: 'Juan Perez',
    email: 'juan.perez@example.com',
    photoUrl: 'https://via.placeholder.com/150',
    friendsCount: 120
  };

  constructor(private readonly usersService: UsersService) { }

  ngOnInit(): void {
    const localStorageUser = this.usersService.getUser();

    if(localStorageUser){
      this.user = {
        ...localStorageUser,
        photoUrl: 'https://via.placeholder.com/300',
        friendsCount: Math.floor(Math.random() * 1000)
      }
    }

  }
}
