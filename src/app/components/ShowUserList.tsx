import { UserData } from "./ShowMiniProfile";
import UserSearchBox from "./UserSearchBox";

type Props = {
  userList: UserData[];
  text: string;
};

export default function ShowUserList({ userList, text }: Props) {
  const searchData = userList.filter(
    (data) => data.userName.includes(text) || data.name.includes(text)
  );
  console.log(searchData);
  return (
    <>
      {text === ""
        ? userList.map((user) => <UserSearchBox userData={user} />)
        : searchData.map((user) => <UserSearchBox userData={user} />)}
    </>
  );
}
