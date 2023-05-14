import Image from "next/image";
import { PostData, PostDataType } from "./PostCard";
import PostInfo from "./PostInfo";
import UserImage from "./UserImage";

type Props = {
  postData: PostDataType;
  onClick: (isOpen: boolean) => void;
}

export default function PostDetail({ postData, onClick }: Props ) {
  return (
    <section className="w-full h-full">
      <article className="z-20 bg-white fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex">
        <div className="w-[700px] h-[700px] relative">
          <Image
            src={`${postData.postImageUrl}`}
            fill={true}
            alt="Post Image"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex p-2 gap-5 items-center text-xl font-black">
            <UserImage userImageUrl={postData.userImageUrl} />
            <h5>{postData.userName}</h5>
          </div>
          <div className="grow">
            {postData.comments.map((comment) => (
              <div className="flex" key={comment.userName}>
                <UserImage userImageUrl={comment.userImageurl} />
                <h4>{comment.userName}</h4>
                <h4>{comment.userComment}</h4>
              </div>
            ))}
          </div>
          <PostInfo postData={postData} />
        </div>
      </article>
      <article onClick={()=> onClick(false)} className="z-10 bg-black fixed opacity-50 left-0 top-0 w-full h-full" />
    </section>
  );
}
