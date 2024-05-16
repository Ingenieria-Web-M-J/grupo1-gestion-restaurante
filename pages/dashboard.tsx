import { BodyDashboard, SidePanel } from "@/components/Transactions/modules";

export default function Dashboard() {
    return (
        <div>
                <div className="grid lg:grid-cols-12 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-0 h-full">
                    <div className="lg:col-span-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 bg-white">
                        <SidePanel></SidePanel>
                    </div>
                    <div className="lg:col-span-10 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 bg-gray-200">
                        <BodyDashboard></BodyDashboard>
                    </div>
                </div>
            <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        </div>

    );
}