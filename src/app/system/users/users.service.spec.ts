import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { User } from 'src/app/model/user/user.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
    });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return list user if call api success', () => {
    const listUser: User[] = [
      {
        id: 1,
        name: 'long',
        email: 'long@gmail.com',
        phone: '123456789',
        avatar: 'avt',
      },
    ];

    service.getUsers().subscribe((listUser) => {
      expect(listUser.length).toBe(1);
    });
  });
});
