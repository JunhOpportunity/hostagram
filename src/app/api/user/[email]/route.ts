import { getUser } from "@/service/user";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { email: string } }
) {
  const data = await getUser(params.email)
  return NextResponse.json({data});
}
