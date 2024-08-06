import React from 'react';
import { auth } from '@clerk/nextjs/server';
import { db } from '@/lib/db';
import HistoryClient from './_components/HistoryClient';

const page = async () => {
  const { userId } = auth();

  const userHistory = await db.aIOutput.findMany({
    where: {
      userId: userId as string,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className="mx-5 py-2">
      <div className="mt-5 py-6 px-4 bg-white rounded">
        <h2 className="font-medium">Output History</h2>
      </div>
      <div className="mt-5 py-6 px-4 bg-white rounded">
        <HistoryClient userHistory={userHistory} />
      </div>
    </div>
  );
};

export default page;
