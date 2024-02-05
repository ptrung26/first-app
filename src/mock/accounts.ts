export interface Account {
  username: string;
  password: string;
  email: string;
}

const accounts: Partial<Account>[] = [
  {
    username: 'trungpro123',
    password: '12345678aa',
  },
];

export { accounts };
