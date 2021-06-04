import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/model/user/user.model';
import { UsersService } from './users.service';

let dataUsers: User[] = [];
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'phone'];
  dataSource = new MatTableDataSource(dataUsers);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  /**
   * Get list users
   */
  getUsers() {
    this.usersService.getUsers().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
}
