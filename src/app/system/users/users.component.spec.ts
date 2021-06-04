import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { User } from 'src/app/model/user/user.model';

import { UsersComponent } from './users.component';
import { UsersService } from './users.service';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersComponent],
      imports: [HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set list users to dataSource', () => {
    const listUser: User[] = [
      {
        id: 1,
        name: 'long',
        email: 'long@gmail.com',
        phone: '123456789',
        avatar: 'avt',
      },
    ];

    let usersService = new UsersService(httpClient);
    spyOn(usersService, 'getUsers').and.returnValue(of(listUser));

    component = new UsersComponent(usersService);

    expect(component.dataSource.data.length).toBe(0);
    component.getUsers();
    // Verify set data success to dataSource
    expect(component.dataSource.data.length).toBe(1);
  });
});
