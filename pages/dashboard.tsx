import { BodyDashboard, SidePanel } from "@/components/Transactions/modules";
import { GET_VERIFICATION_TOKEN } from "@/hooks/react-query/user/user";
import { useQuery } from "@apollo/client";

export default function Dashboard() {
  const handleFetch = async () => {
    fetch("/api/graphql").then((res) => {
      console.log(res);
    });
  };

  const { data, loading, refetch } = useQuery(GET_VERIFICATION_TOKEN);
  console.log(data);
  return (
    <div>
      <div className="grid lg:grid-cols-12 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-0 h-full">
        <div className="lg:col-span-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 bg-white">
          <SidePanel></SidePanel>
        </div>
        <div className="lg:col-span-10 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 bg-gray-200">
          <BodyDashboard></BodyDashboard>
          <h3>{data.getTokens[0].identifier}</h3>
        </div>
      </div>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </div>
  );
}
