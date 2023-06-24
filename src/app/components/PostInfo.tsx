import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { RiEmotionHappyLine } from "react-icons/ri";
import { useSession } from "next-auth/react";
import { FullPost, SimplePost } from "@/model/post";
import { AuthUser } from "@/model/user";
import { parseDate } from "@/util/date";
import { dislikePost } from "@/service/post";
import ToggleButton from "./ui/ToggleButton";
import HeartIcon from "./ui/icons/HeartIcon";
import HeartFillIcon from "./ui/icons/HeartFillIcon";
import { useState } from "react";

type Props = {
  post: SimplePost;
};

export default function PostInfo({ post }: Props) {
  const [liked, setLiked] = useState(false);
  const { data: session } = useSession();
  const user = session?.user;
  console.log("test", user);

  console.log(post.likes);
  // console.log(post.likes.find((data) => data.email === user?.email))

  return (
    <div>
      <div className="flex justify-between items-center my-2 px-4 text-2xl">
        <ToggleButton
          toggled={liked}
          onToggle={setLiked}
          onIcon={<HeartFillIcon />}
          offIcon={<HeartIcon />}
        />
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

// {user?.username != undefined &&
//  post.likes.indexOf(user?.username) != -1 ? (
//    <AiFillHeart
//      onClick={onDeleteLike}
//      className="cursor-pointer text-red-500 duration-150 active:scale-75"
//    />
//  ) : (
//    <AiOutlineHeart className="cursor-pointer duration-150 active:scale-75" />
//  )}
