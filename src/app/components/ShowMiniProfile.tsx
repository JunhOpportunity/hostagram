import UserImage from "./UserImage";

export type UserData = {
  name: string;
  userName: string;
  userImageUrl: string;
  userEmail: string;
  userIntro: string;
  userCategory: string;
};

type CurrentUser = {
  currentUser: UserData;
};

export default function ShowMiniProfile({ currentUser }: CurrentUser) {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-center gap-4">
        <UserImage userImageUrl={currentUser.userImageUrl} />
        <div className="flex flex-col">
          <h4 className="font-black">{currentUser.name}</h4>
          <h5 className="font-light">{currentUser.userName}</h5>
        </div>
      </div>
      <h5 className="font-light">{currentUser.userCategory}</h5>
      <h5>{currentUser.userIntro}</h5>
    </section>
  );
}
