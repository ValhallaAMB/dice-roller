export type User = {
  id: number;
  username: string;
  email: string;
  pfpBase64: string | null;
};

export type userWithoutId = Omit<User, "id">;
