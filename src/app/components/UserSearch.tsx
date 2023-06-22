"use client";

import useSWR from "swr";
import { ChangeEvent, useState } from "react";
import SearchBox from "../components/SearchInput";
import ShowUserList from "../components/ShowUserList";
import { SearchUser } from "@/model/user";
import GridSpinner from "../components/ui/GridSpinner";
import useDebounce from "@/hooks/debounce";

export default function UserSearch() {
  const [keyword, setKeyword] = useState<string>("");
  const debouncedKeyword = useDebounce(keyword, 1000);
  const { data, isLoading, error } = useSWR<SearchUser[]>(
    `/api/search/${debouncedKeyword}`
  );

  console.log("Search Data", data);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setKeyword(value);
  };

  return (
    <>
      <SearchBox onChange={onChange} value={keyword} />
      {error && <p>무엇인가 굉장히 잘못되었다! 🤔</p>}
      {isLoading && <GridSpinner />}
      {data && <ShowUserList userList={data} text={keyword} />}
    </>
  );
}