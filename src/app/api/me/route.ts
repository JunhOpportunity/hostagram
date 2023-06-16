import { getUserByEmail } from "@/service/user";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { handler } from "../auth/[...nextauth]/route";

export async function GET(request: Request) {
  const session = await getServerSession(handler);
  const user = session?.user;

  if (!user) {
    return new Response("Auth Error", { status: 401 });
  }

  return getUserByEmail(user.email).then((data) => NextResponse.json(data));
}
