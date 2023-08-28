// eslint-disable @next/next/no-server-import-in-page
import { NextResponse } from 'next/server';

export const middleware = async (req) => {
  if (req.nextUrl.pathname.startsWith('/page-c')) {
    return NextResponse.rewrite(new URL('/page-d', req.url));
  }
};
