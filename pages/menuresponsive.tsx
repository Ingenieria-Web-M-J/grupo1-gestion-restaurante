import { ItemSidePanel } from "@/components/Transactions/modules";
export const MenuResponsive = () => {
  return (
    <div className="lg:w-full bg-white text-white h-screen">
      <div className="p-6">
        <img width="150px" src="/gourmetcode.png" alt="" />
        <h1 className="col-span-3 text-2xl font-bold mb-6 text-[#dc2626]">
          Menu
        </h1>
        <ul>
          <ItemSidePanel
            link="/dashboard"
            linkText="Dashboard"
            srcImg="/icons/home.svg"
          ></ItemSidePanel>
          <ItemSidePanel
            link="/pedidos"
            linkText="Pedidos"
            srcImg="/icons/orders.svg"
          ></ItemSidePanel>
          <ItemSidePanel
            link="/pagos"
            linkText="Pagos"
            srcImg="/icons/pay.svg"
          ></ItemSidePanel>
          <ItemSidePanel
            link="/clientes"
            linkText="Clientes"
            srcImg="/icons/clients.svg"
          ></ItemSidePanel>
          <ItemSidePanel
            link="/perfil"
            linkText="Mi perfil"
            srcImg="/icons/profile.svg"
          ></ItemSidePanel>
          <ItemSidePanel
            link="/logout"
            linkText="Logout"
            srcImg="/icons/logout.svg"
          ></ItemSidePanel>
        </ul>
      </div>
    </div>
  );
};

export default MenuResponsive;
