'use client';

import { useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Edit = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const id = pathname.split('/').slice(-1);

  return <div>{id}</div>;
};

export default Edit;
