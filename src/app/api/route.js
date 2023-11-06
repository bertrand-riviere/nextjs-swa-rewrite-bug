import { NextResponse } from 'next/server';

export const GET = async () => {
  const now = new Date();
  return NextResponse.json({
    generated: now.toTimeString(),
  });
};

export const revalidate = 5;
