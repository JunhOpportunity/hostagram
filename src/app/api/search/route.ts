import { searchUser } from "@/service/user";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function GET(_:NextRequest) {
  return searchUser().then((data) => NextResponse.json(data));
}
