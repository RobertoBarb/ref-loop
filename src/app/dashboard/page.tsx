import { caller } from "@/shared/helpers/trpc/server";

export default async function DashboardPage() {
  const privateData = await caller.dashboard.privateData();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {privateData.userId}</p>
      <p>Data: {privateData.message}</p>
    </div>
  );
}
