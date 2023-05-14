import Image from "next/image";
import UserImage from "./UserImage";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { RiEmotionHappyLine } from "react-icons/ri";

export type PostDataType = {
  userImageUrl: string;
  postImageUrl: string;
  likedNumber: number;
  userName: string;
  title: string;
  createdAt: string;
};

export type PostData = {
  postData: PostDataType;
};

export default function PostCard({ postData }: PostData) {
  return (
    <section className="shadow-md flex flex-col max-w-[500px] mx-auto">
      <div className="flex p-2 gap-5 items-center text-xl font-black">
        <UserImage userImageUrl={postData.userImageUrl} />
        <h5>{postData.userName}</h5>
      </div>
      <div className="w-[500px] h-[500px] relative">
        <Image
          src={`${postData.postImageUrl}`}
          fill={true}
          alt="Post Image"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="">
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
          <form>
            <input className="" type="text" placeholder="Add a comment..." required/>
            <input className="text-cyan-400 cursor-pointer" type="submit" value="Post" />
          </form>
        </div>
      </div>
    </section>
  );
}
