import { client } from "./sanity";

type OAuthUser = {
  id: string;
  email: string | null;
  name: string | null;
  username: string;
  image?: string | null;
};
export async function addUser({ username, email, name, image, id }: OAuthUser) {
  return client.createIfNotExists({
    _id: id,
    _type: "user",
    username,
    email,
    name,
    image,
    following: [],
    followers: [],
    bookmarks: [],
  });
}

export function getUser() {
  const query = '*[_type == "user" && name == "Rachel"]'; 
  const data = client.fetch(query);
  return data
}
