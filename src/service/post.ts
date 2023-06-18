import { SimplePost } from "@/model/post";
import { client, urlFor } from "./sanity";

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
  "comments": count(comments),
  "id":_id,
  "createdAt":_createdAt
`;

export async function getFollowingPosts(email: string) {
  return client
    .fetch(
      `*[_type == "post" && author->email == "${email}"
    || author._ref in *[_type=="user" && email == "${email}"].following[]._ref ]
    | order(_createdAt desc){${simplePostPorjection}}`
    )
    .then((posts) =>
      posts.map((post: SimplePost) => ({ ...post, image: urlFor(post.image) }))
    );
}
