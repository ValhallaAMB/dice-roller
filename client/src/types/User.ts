export type User = {
  id: number;
  cognitoSub: string;
  email: string;
  username: string;
  pfpBase64: string | null;
};

// export type UserWithoutId = Omit<User, "id">;