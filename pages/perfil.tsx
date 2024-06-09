import { SidePanel, BodyDashboard } from "@/components/Transactions/modules";

export const Perfil = () => {
  return (
    <div className="grid lg:grid-cols-12 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-0 h-full">
      <div className="lg:col-span-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 bg-white">
        <SidePanel></SidePanel>
      </div>
      <div className="lg:col-span-10 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 bg-gray-200">
        <BodyDashboard hText="Perfil"></BodyDashboard>
      </div>
    </div>
  );
};
export default Perfil;
