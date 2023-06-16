import { User } from "@/model/user";
import UserSearchBox from "./UserSearchBox";

type Props = {
  userList: User[];
  text: string;
};

export default function ShowUserList({ userList, text }: Props) {
  const searchData = userList.filter(
    (data) => data.username.includes(text) || data.name.includes(text)
  );

  return (
    <>
      {text === ""
        ? userList.map((user) => <UserSearchBox userData={user} key={user.username}/>)
        : searchData.map((user) => <UserSearchBox userData={user} key={user.username}/>)}
    </>
  );
}
