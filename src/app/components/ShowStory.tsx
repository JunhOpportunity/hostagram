import UserImage from "./UserImage";

type StoryList = {
  storyData: string[];
};

export default function ShowStory({ storyData }: StoryList) {
  return (
    <section className="w-full h-[100px] shadow-md gap-4">
      {storyData.map((story) => (
        <div className="flex flex-col justfy-center items-center">
          <UserImage userImageUrl={story.userImageUrl} />
          <h5>{story.userName}</h5>
        </div>
      ))}
    </section>
  );
}
