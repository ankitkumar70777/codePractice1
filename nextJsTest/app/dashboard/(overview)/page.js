import { Suspense } from "react";
import Loading from "./loading";

// component is async by default, this allows you to await and fetch data
const Dashboard = async () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>Dashboard</Suspense>
    </div>
  );
};

export default Dashboard;
