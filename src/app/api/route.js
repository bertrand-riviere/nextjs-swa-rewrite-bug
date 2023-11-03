import { NextResponse } from 'next/server';
import crypto from 'crypto';
import https from 'https';
import axios from 'axios';
//import { Agent } from 'undici';

export const GET = async (req) => {
  try {
    // const response = await fetch(
    //   'https://stats.oecd.org/SDMX-JSON/data/NAAG/FRA.DBTS13GDP/?startTime=2006',
    //   {
    //     headers: {
    //       Accept: 'application/vnd.sdmx.data+json',
    //       'Accept-Language': 'en',
    //     },
    //     // dispatcher: new https.Agent({
    //     //   connect: {
    //     //     rejectUnauthorized: false,
    //     //     secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT,
    //     //   },
    //     // }),
    //     // dispatcher: new Agent({
    //     //   connect: {
    //     //     rejectUnauthorized: false,
    //     //     secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT,
    //     //   },
    //     // }),
    //   },
    // );
    // const dotStatData = await response.json();

    const response = await axios.get(
      'https://stats.oecd.org/SDMX-JSON/data/NAAG/FRA.DBTS13GDP/?startTime=2006',
      {
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
          secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT,
        }),
      },
    );

    const dotStatData = response.data;

    return NextResponse.json(dotStatData);
  } catch (e) {
    return NextResponse.json({ error: e });
  }
};
