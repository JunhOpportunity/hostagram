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

export function getUser(email: string) {
  const query = `*[_type == "user" && email == "${email}"]{..., following[]->, followers[]->, bookmarks[]->}`;
  const data = client.fetch(query);
  return data;
}

export async function getUserByEmail(email: string) {
  return client.fetch(`*[_type == "user" && email == "${email}"][0]{
      ..., 
      "id":_id,
      following[]->{username, image}, 
      followers[]->{username, image}, 
      "bookmarks": bookmarks[]->_id
    }`);
}
