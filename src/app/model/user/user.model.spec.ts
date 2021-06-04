import { User } from './user.model';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User(1, "name", "email@gmail.com", "123456789", "address")).toBeTruthy();
  });
});
