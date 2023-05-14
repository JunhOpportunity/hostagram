import UserImage from "./UserImage";

export type StoryData = {
  userImageUrl: string;
  userName: string;
};

type StoryList = {
  storyData: StoryData[];
};

export default function ShowStory({ storyData }: StoryList) {
  return (
    <section className="flex p-2 w-full h-[100px] shadow-md gap-4 overflow-y-auto">
      {storyData.map((story) => (
        <div className="flex flex-col justfy-center items-center" key={story.userName}>
          <UserImage userImageUrl={story.userImageUrl} />
          <h5>{story.userName}</h5>
        </div>
      ))}
    </section>
  );
}
