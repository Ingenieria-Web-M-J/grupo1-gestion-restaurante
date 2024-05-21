import { mainTexts } from "@/types/types";

export function SidePanel(props: mainTexts) {
    return (
        <div className="flex">
            <div className="lg:w-full hidden lg:block bg-gray-800 text-white h-screen">
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-6">Menu</h1>
                    <ul>
                        <ItemSidePanel link="/" linkText="Dashboard"></ItemSidePanel>
                        <ItemSidePanel link="/pedidos" linkText="Pedidos"></ItemSidePanel>
                        <ItemSidePanel link="/Pagos" linkText="Pagos"></ItemSidePanel>
                        <ItemSidePanel link="/Clientes" linkText="Clientes"></ItemSidePanel>
                        <ItemSidePanel link="/perfil" linkText="Mi perfil"></ItemSidePanel>
                        <ItemSidePanel link="/logout" linkText="Logout"></ItemSidePanel>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export function ItemSidePanel(props: mainTexts){
    return(
        <li className="mb-4">
            <a href={props.link} className="text-lg hover:bg-gray-700 p-2 rounded block">{props.linkText}</a>
        </li>
    );
} 
export function BodyDashboard(props: mainTexts) {
    return (
        <div className="min-h-screen bg-gray-100 p-6 md:w-full">
            <h1 className="text-3xl font-bold mb-4">{props.hText}</h1>
            <div className="overflow-x-auto">
                <table className="lg:min-w-full bg-white w-full">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">ID</th>
                            <th className="py-2 px-4 border-b">Plato</th>
                            <th className="py-2 px-4 border-b">Precio</th>
                            <th className="py-2 px-4 border-b">Estado</th>
                            <th className="py-2 px-4 border-b">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b text-center">1</td>
                            <td className="py-2 px-4 border-b text-center">Product 1</td>
                            <td className="py-2 px-4 border-b text-center">$29.99</td>
                            <td className="py-2 px-4 border-b text-center">Description of Product 1</td>
                            <td className="py-2 px-4 border-b space-x-2 text-center">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Edit</button>
                                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}