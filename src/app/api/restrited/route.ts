import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

export async function POST(req: Request, res: Response) {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    new Response(JSON.stringify({ message: '성공적!' }), {
      status: 200
    })
  } else {
    new Response(JSON.stringify({ message: '메일 전송 실패' }), { status: 200 })
  }
}