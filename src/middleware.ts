export {default} from 'next-auth/middleware'

export const config = {
  matcher: ['/new', '/'], // 이 경로에서는 무조건 미들웨어를 거쳐야 함.
  
}