import { searchUser } from "@/service/user";
import { NextResponse } from "next/server";

type Context = {
  params: { keyword: string };
};

export async function GET(context: Context) {
  return searchUser().then((data) => NextResponse.json(data));
}
