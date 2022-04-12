import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { IUser } from './IUser';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  protected title = 'app';
  users$!: IUser[];
  constructor(public userservice: UserService) {}

  ngOnInit()  {
      this.userservice.getUsers().subscribe(res => {
      this.users$ = res;
    })
  }
}
