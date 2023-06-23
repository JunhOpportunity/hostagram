import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { RiEmotionHappyLine } from "react-icons/ri";
import { useSession } from "next-auth/react";
import { FullPost, SimplePost } from "@/model/post";
import { AuthUser } from "@/model/user";
import { parseDate } from "@/util/date";

type Props = {
  post: SimplePost;
};

export default function PostInfo({ post }: Props) {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div>
      <div className="flex justify-between items-center my-2 px-4 text-2xl">
        {post.likes.find((data) => data.email === user?.email) ? (
          <AiFillHeart className="cursor-pointer text-red-500 duration-150 active:scale-75" />
        ) : (
          <AiOutlineHeart className="cursor-pointer duration-150 active:scale-75" />
        )}
        <BsBookmark className="cursor-pointer" />
      </div>
      <div className="px-2 text-lg">
        <p>{`${post.likes?.length ?? 0} ${
          post.likes?.length > 1 ? "Likes" : "Like"
        }`}</p>
        <p className="font-black">{post.username}</p>
        <br />
        {parseDate(post.createdAt)}
      </div>
      <div className="flex border-t mt-2 items-center justify-between">
        <RiEmotionHappyLine />
        <form className="flex w-full">
          <input
            className="w-full outline-none border-none ml-2"
            type="text"
            placeholder="Add a comment..."
            required
          />
          <button className="font-bold text-sky-500 ml-2">submit</button>
        </form>
      </div>
    </div>
  );
}
