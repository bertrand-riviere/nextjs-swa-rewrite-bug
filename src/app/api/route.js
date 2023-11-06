import { NextResponse } from 'next/server';

export const GET = async () => {
  const now = new Date();

  const minute = now.getMinutes();

  const headers =
    minute % 2 === 0
      ? {
          headers: {
            'Cache-Control': 'no-cache, no-store, s-maxage=0',
          },
        }
      : {};

  return NextResponse.json(
    {
      generated: now.toTimeString(),
    },
    { ...headers },
  );
};

export const revalidate = 5;
