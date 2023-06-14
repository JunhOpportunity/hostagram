import { PostData } from "./PostCard";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { RiEmotionHappyLine } from "react-icons/ri";
import { useSession } from "next-auth/react";

export default function PostInfo({ postData }: PostData) {
  const { data: session } = useSession();
  const user = session?.user;
  console.log("유저", postData);
  return (
    <div>
      <div className="flex justify-between items-center text-2xl p-2">
        {postData.likes.find((data) => data.email ===  user?.email) ? (
          <AiFillHeart className="cursor-pointer text-red-500 duration-150 active:scale-75" />
        ) : (
          <AiOutlineHeart className="cursor-pointer duration-150 active:scale-75" />
        )}
        <BsBookmark className="cursor-pointer" />
      </div>
      <div className="px-2 text-lg">
        <b className="font-black">{postData.likes.length} Likes</b>
        <br />
        <b className="font-black">{postData.author.username}</b>
        <br />
        {postData._createdAt}
      </div>
      <div className="flex border-t mt-2 p-2 items-center justify-between">
        <RiEmotionHappyLine />
        <form className="flex w-full">
          <input
            className="w-full"
            type="text"
            placeholder="Add a comment..."
            required
          />
          <input
            className="text-cyan-400 cursor-pointer"
            type="submit"
            value="Post"
          />
        </form>
      </div>
    </div>
  );
}
