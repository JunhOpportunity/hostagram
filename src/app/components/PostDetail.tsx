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
          className="w-[500px] h-[500px] object-cover"
        />
        <div className="flex flex-col w-[300px]">
          <div className="flex p-[10px] gap-1 items-center text-xl font-black">
            <Avatar image={postData.author.image} size="small" highlight={true} />
            <h5 className="text-2xl">{postData.author.username}</h5>
          </div>
          <div className="grow p-[10px]">
            {postData.comments.map((comment) => (
              <div className="flex mb-[10px]" key={comment._key}>
                <Avatar
                  image={comment.author.image}
                  size="small"
                  highlight={true}
                />
                <h4 className="font-black mr-[5px]">
                  {comment.author.username}
                </h4>
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
