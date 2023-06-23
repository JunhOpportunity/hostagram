import { SimpleUser, AuthUser, SearchUser } from "@/model/user";
import UserSearchBox from "./UserSearchBox";

type Props = {
  userList: SearchUser[]
  text: string;
};

export default function ShowUserList({ userList, text }: Props) {
  const searchData = userList.filter(
    (data) => data.username.includes(text) || data.name.includes(text)
  );

  return (
    <>
      
      
      {searchData.map((user) => <UserSearchBox user={user} key={user.username}/>)}
    </>
  );
}
