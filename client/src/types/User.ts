export type User = {
  id: number;
  username: string;
  email: string;
  pfpBase64: string | null;
};

export type UserWithoutId = Omit<User, "id">;

export type UserLogin = {
  email: string;
  password: string;
};
