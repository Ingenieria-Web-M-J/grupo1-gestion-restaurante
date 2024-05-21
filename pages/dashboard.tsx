import { BodyDashboard, SidePanel } from "@/components/Transactions/modules";
import { GET_VERIFICATION_TOKEN } from "@/hooks/react-query/user/user";
import { useQuery } from "@apollo/client";

export default function Dashboard() {
    return (
        <div>
                <div className="grid lg:grid-cols-12 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-0">
                    <div className="lg:col-span-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 bg-white">
                        <SidePanel></SidePanel>
                    </div>
                    <div className="lg:col-span-10 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 bg-gray-200">
                        
          <h3>{data.getTokens[0].identifier}</h3>
        </div>
      </div>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </div>
  );
}
