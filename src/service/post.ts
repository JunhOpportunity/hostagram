import { client } from "./sanity";

export async function getAllPosts() {
  const query =
    '*[_type == "post"]{..., "postImageUrl": photo.asset->url, author->, comments[]{..., author->}, likes[]->}';
  const allPosts = await client.fetch(query);
  return allPosts;
}

export async function getPosts() {
  const query = '*[_type == "post"]';
  const data = await client.fetch(query);
  return;
}

const simplePostPorjection = `
  ...,
  "username": author->username,
  "userImage": author->image,
  "image": photo,
  "likes": likes[]->username,
  "text": comments[0].comment,
  "comments": count(comments)",
  "id":_id,
  "createdAt":_createdAt
`

export async function getFollowingPosts(username: string) {
  const query = `*[_type == "post" && author->username == "${username}"
   || author._ref in *[_type=="user" && username == "${username}"].following[]._ref ]
    | order(_createdAt desc){${simplePostPorjection}}`;
  const data = await client.fetch(query);
  return data;
}
