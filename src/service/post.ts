import { client } from "./sanity";

export async function getAllPosts() {
  const query = '*[_type == "post"]{..., "postImageUrl": photo.asset->url, author->, comments[]{..., author->}, likes[]->}';
  const allPosts = await client.fetch(query);
  return allPosts;
}

export async function getPosts() {
  const query = '*[_type == "post"]';
  const data = await client.fetch(query);
  return;
}
