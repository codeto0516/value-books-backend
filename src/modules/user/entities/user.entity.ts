export class User {
  id: string;
  name: string;
  email: string;
  password?: string;
  budget: number;

  createdAt: Date;
  updatedAt: Date;

  constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
