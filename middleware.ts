import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'

/**
 * This middleware implements deep linking support for products and categories.
 *
 * It allows users to share or access shortened URLs, like `/p/123`,
 * which are automatically redirected to the full product page at `/product/123`.
 */
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()

  // Example: if someone shares a short link like /p/123,
  // redirect it to the full product URL /product/123
  if (url.pathname.startsWith('/p/')) {
    const id = url.pathname.split('/')[2]
    url.pathname = `/product/${id}`
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

// Apply this middleware only to paths that start with /p/
export const config = {
  matcher: ['/p/:path*'],
}
