import { dislikePost, likePost } from "@/service/post";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { handler } from "../auth/[...nextauth]/route";

export async function PUT(req: NextRequest) {
  const session = await getServerSession(handler);
  const user = session?.user;

  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }

  const { id, like } = await req.json();

  if (!id || like === undefined) {
    return new Response("Bad Request", { status: 400 });
  }

  const request = like ? likePost : dislikePost;

  return request(id, user.id)
    .then((res) => NextResponse.json(res))
    .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
}
