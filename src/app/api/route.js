import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { Agent } from 'undici';

export const GET = async () => {
  const response = await fetch(
    'https://stats.oecd.org/SDMX-JSON/data/NAAG/FRA.DBTS13GDP/?startTime=2006',
    {
      headers: {
        Accept: 'application/vnd.sdmx.data+json',
        'Accept-Language': 'en',
      },
      dispatcher: new Agent({
        connect: {
          rejectUnauthorized: false,
          secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT,
        },
      }),
    },
  );
  const dotStatData = await response.json();

  return NextResponse.json(dotStatData);
};
