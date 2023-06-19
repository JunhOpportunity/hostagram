"use client";

import useSWR from "swr";
import { ChangeEvent, useEffect, useState } from "react";
import SearchBox from "../components/SearchInput";
import ShowUserList from "../components/ShowUserList";
import { SimpleUser, User, UserSearchResult } from "@/model/user";
import Error from "next/error";
import GridSpinner from "../components/ui/GridSpinner";

type SwrType = {
  data?: User[];
  isLoading?: boolean;
  error?: Error;
};

export default function SearchPage() {
  const [keyword, setKeyword] = useState<string>("");
  const { data, isLoading, error } = useSWR<UserSearchResult[]>(`api/search/${keyword}`);
  console.log("Search Data", data);
  // const [status, setStatus] = useState<SwrType>({data, isLoading, error});

  // useEffect(() => {
  //   const { data, isLoading, error } = useSWR<User>(
  //     `api/search/${keyword}`
  //   );
  //   setStatus({ data, isLoading, error });
  // }, [keyword]);

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
      {isLoading && <GridSpinner/>}
      {/* <ShowUserList userList={status.data} text={keyword} /> */}
    </>
  );
}
