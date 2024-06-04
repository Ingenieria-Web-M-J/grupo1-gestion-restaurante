import { mainTexts } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

export const SidePanel = (props: mainTexts) => {
  return (
    <div className="flex">
      <div className="block lg:hidden border-solid border-2 border-[#dc2626] w-full p-2 grid grid-cols-2">
        <div className="col-span-1 my-auto ml-5">
          <Link href="/menuresponsive">
            <img width="30px" src="/icons/menu.svg" alt="" />
          </Link>
        </div>
        <div className="col-span-1">
          <Link href={"/"}>
            <img width="150px" src="/gourmetcode.png" alt="" />
          </Link>
        </div>
      </div>
      <div className="lg:w-full hidden lg:block bg-white text-white h-screen">
        <div className="p-6">
          <Link href={"/"}>
            <img width="150px" src="/gourmetcode.png" alt="" />
          </Link>
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
              link="/dashboard/pedidos"
              linkText="Pedidos"
              srcImg="/icons/orders.svg"
            ></ItemSidePanel>
            <ItemSidePanel
              link="/dashboard/pagos"
              linkText="Pagos"
              srcImg="/icons/pay.svg"
            ></ItemSidePanel>
            <ItemSidePanel
              link="/dashboard/clientes"
              linkText="Clientes"
              srcImg="/icons/clients.svg"
            ></ItemSidePanel>
            <ItemSidePanel
              link="/dashboard/perfil"
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
    </div>
  );
};

export const ItemSidePanel = (props: mainTexts) => {
  return (
    <li className="grid grid-cols-6 mb-4">
      <img
        className="col-span-1 m-auto"
        width="25px"
        src={props.srcImg}
        alt=""
      />
      <a
        href={props.link}
        className="col-span-5 text-lg hover:bg-[#dc2626] p-2 rounded block text-black hover:text-white"
      >
        {props.linkText}
      </a>
    </li>
  );
};
export const BodyDashboard = (props: mainTexts) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:w-full">
      <h1 className="text-3xl font-bold mb-4 text-[#dc2626]">{props.hText}</h1>
      <div className="overflow-x-auto">
        <table className="lg:min-w-full bg-white w-full">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Producto</th>
              <th className="py-2 px-4 border-b">Precio</th>
              <th className="py-2 px-4 border-b">Estado</th>
              <th className="py-2 px-4 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <ItemCrud
              id="1"
              hText="Comida 1"
              priceText="20.000"
              stateText="En cocina"
            ></ItemCrud>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const ItemCrud = (props: mainTexts) => {
  return (
    <tr>
      <td className="py-2 px-4 border-b text-center">{props.id}</td>
      <td className="py-2 px-4 border-b text-center">{props.hText}</td>
      <td className="py-2 px-4 border-b text-center">${props.priceText}</td>
      <td className="py-2 px-4 border-b text-center">{props.stateText}</td>
      <td className="py-2 px-4 border-b space-x-2 text-center">
        <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-black">
          Edit
        </button>
        <button className="bg-[#dc2626] text-white px-4 py-2 rounded hover:bg-black">
          Delete
        </button>
      </td>
    </tr>
  );
};
