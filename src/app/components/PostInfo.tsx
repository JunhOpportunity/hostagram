import { PostData } from "./PostCard";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { RiEmotionHappyLine } from "react-icons/ri";

export default function PostInfo({ postData }: PostData) {
  return (
    <div>
      <div className="flex justify-between items-center text-2xl p-2">
        <AiOutlineHeart className="cursor-pointer" />
        <BsBookmark className="cursor-pointer" />
      </div>
      <div className="px-2 text-lg">
        <b className="font-black">{postData.likedNumber} Likes</b>
        <br />
        <b className="font-black">{postData.userName}</b> {postData.title}
        <br />
        {postData.createdAt}
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
