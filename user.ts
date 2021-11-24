class User {
  private username: string;
  password: string;
  id: number;
  friends: User[];
  numFriends: number;
  constructor(username: string, password: string, id: number, friends: User[] = [], numFriends: number = 0) {
    this.username = username,
      this.password = password,
      this.id = id,
      this.friends = friends,
      this.numFriends = numFriends
  }

  getUsername(): string {
    return this.username;
  }
  addFriend(users: User[]): void {
    this.friends.push(...users);
  }
  loop(): User[] {
    return this.friends.reduce((acc: User[], curr: User) => {
      acc.push(curr);
      return acc;
    }, []);
  }
}

const alex = new User('alex', 'pwd', 1);
const james = new User('james', 'pwd', 1);
const adam = new User('adam', 'pwd', 1);
console.log(alex.getUsername());

console.log(alex.friends);
alex.addFriend([james, adam]);
console.log(alex.friends);

export default User;