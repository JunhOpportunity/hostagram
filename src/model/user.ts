export type AuthUser = {
  name: string;
  username: string;
  image?: string;
  email: string;
};

export type SimpleUser = Pick<AuthUser, "username" | "image">;

export type HomeUser = AuthUser & {
  bookmarks?: string[];
  followers: SimpleUser[];
  following: SimpleUser[];
};

export type SearchUser = AuthUser & {
  following: number;
  followers: number;
}

export type ProfileUser = SearchUser & {
  posts: number;
}
