export type User = {
  name: string;
  username: string;
  image?: string;
  email: string;
}

export type UserData = {
  name: string;
  username: string;
  image?: string;
  email: string;
  bookmarks?: string[];
  followers?: User[];
  following?: User[]
}