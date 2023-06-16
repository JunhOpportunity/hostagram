export type User = {
  name: string;
  username: string;
  image?: string;
  email: string;
};

export type SimpleUser = Pick<User, "username" | "image">;

export type DetailUser = User & {
  bookmarks?: string[];
  followers: SimpleUser[];
  following: SimpleUser[];
};
