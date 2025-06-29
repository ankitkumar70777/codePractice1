import { NextResponse, NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    //   return NextResponse.redirect(new URL('/home', request.url))
    console.log("middleware called", request, request.nextUrl);
    
    return NextResponse.next();
}
 
export const config = {
  matcher: ['/'],
}