
const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

console.log(regexp.test('james@hello.com'));
console.log(regexp.test('james@hello'));

class User {
  private id: number;
  private username: string;
  private email: string;
  constructor(id: number, username: string, email: string) {
    this.id = id,
    this.username = username,
    this.email = email
  }
  getId(): number {
    return this.id;
  }
  getUsername(): string {
    return this.username;
  }
  getEmail(): string {
    return this.email;
  }
}

export default User;