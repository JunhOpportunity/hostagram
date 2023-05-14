import PostCard, { PostDataType } from "./PostCard";

type PostList = {
  postList: PostDataType[];
};

export default function ShowPosts({ postList }: PostList) {
  return (
    <section>
      {postList.map((post) => (
        <PostCard postData={post} key={post.userName} />
      ))}
    </section>
  );
}
