import { RiEmotionHappyLine } from "react-icons/ri";
import { useSession } from "next-auth/react";
import { SimplePost } from "@/model/post";
import { parseDate } from "@/util/date";
import ToggleButton from "./ui/ToggleButton";
import HeartIcon from "./ui/icons/HeartIcon";
import HeartFillIcon from "./ui/icons/HeartFillIcon";
import { ChangeEvent, useState } from "react";
import { useSWRConfig } from "swr";
import usePosts from "@/hooks/posts";

type Props = {
  post: SimplePost;
};

export default function PostInfo({ post }: Props) {
  const { id, likes, username, text, createdAt } = post;
  const { data: session } = useSession();
  const user = session?.user;
  const liked = user ? likes.includes(user.username) : false;
  const [bookmarked, setBookmarked] = useState(false);
  const [message, setMessage] = useState("");
  const { setLike } = usePosts();
  const handleLike = (like: boolean) => {
    if (user) {
      setLike(post, user.username, like);
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <div className="flex justify-between items-center my-2 px-4 text-2xl">
        <ToggleButton
          toggled={liked}
          onToggle={handleLike}
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
            value={message}
            onChange={onChange}
            placeholder="Add a comment..."
            required
          />
          <button
            className={`font-bold ml-2 ${
              message == "" ? "text-neutral-200" : "text-sky-500"
            }`}
          >
            submit
          </button>
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
