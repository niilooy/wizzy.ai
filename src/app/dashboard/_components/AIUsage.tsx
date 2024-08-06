import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import AIChart from "./AIChart";

export const AIUsage = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }

  let availableCredit;
  let totalUsage: number = 0;

  const userAIOutputs = await db.aIOutput.findMany({
    where: {
      userId: userId as string,
    },
  });

  // If user generated some output
  if (userAIOutputs.length > 0) {
    userAIOutputs.forEach((output) => {
      totalUsage += output.description?.split(/\s+/).length || 0;
    });

    revalidatePath("/");
  }

  const userCredit = await db.user.findUnique({
    where: { userId: userId as string },
  });

  availableCredit = userCredit ? Number(userCredit?.totalCredits) : 10000;
  
  return (
    <div className="bg-white p-4">
      <AIChart availableCredit={availableCredit} totalUsage={totalUsage} />
    </div>
  );
};
