import Avatar from "./Avatar";
import { PostDataType } from "./PostCard";
import PostInfo from "./PostInfo";

type Props = {
  postData: PostDataType;
  onClick: (isOpen: boolean) => void;
};

export default function PostDetail({ postData, onClick }: Props) {
  return (
    <section>
      <article className="z-20 bg-white fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex">
      <img
        src={`${postData.postImageUrl}`}
        alt="Post Image"
        className="w-[700px] h-[700px] object-cover"
      />
        <div className="flex flex-col">
          <div className="flex p-2 gap-5 items-center text-xl font-black">
            <Avatar image={postData.author.image} />
            <h5>{postData.userName}</h5>
          </div>
          <div className="grow">
            {postData.comments.map((comment) => (
              <div className="flex" key={comment._key}>
                <Avatar image={comment.author.image} />
                <h4>{comment.author.username}</h4>
                <h4>{comment.comment}</h4>
              </div>
            ))}
          </div>
          <PostInfo postData={postData} />
        </div>
      </article>
      <article
        onClick={() => onClick(false)}
        className="z-10 bg-black fixed opacity-50 left-0 top-0 w-full h-full"
      />
    </section>
  );
}
