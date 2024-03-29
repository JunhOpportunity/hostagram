import { searchUser } from "@/service/user";
import { NextRequest, NextResponse } from "next/server";

type Context = {
  params: { keyword: string };
};

export async function GET(_:NextRequest , { params: { keyword } }: Context) {
  return searchUser(keyword).then((data) => NextResponse.json(data));
}
