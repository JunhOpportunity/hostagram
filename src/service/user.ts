import { HomeUser, AuthUser, SearchUser } from "@/model/user";
import { UsersClient } from "@sanity/client";
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

export async function searchUser(keyword?: string) {
  const query = keyword
    ? `&& (name match "${keyword}*") || (username match "${keyword}*")`
    : ``;
  return client
    .fetch(
      `*[_type == "user" ${query}]{
    ..., 
    "following": count(following), 
    "followers": count(followers), 
  }`
    )
    .then((users) =>
      users.map((user: SearchUser) => ({
        ...user,
        following: user.following ?? 0,
        followers: user.followers ?? 0,
      }))
    );
}

export async function getUserForProfile(username: string) {
  return client
    .fetch(
      `*[_type=="user" && username == "${username}"][0]{
    ...,
    "id":_id,
    "following": count(following),
    "followers": count(followers),
    "posts": count(*[_type=="post" && author->username == "${username}"])
  }`
    )
    .then((user) => ({
      ...user,
      following: user.following ?? 0,
      followers: user.followers ?? 0,
      posts: user.posts ?? 0,
    }));
}
