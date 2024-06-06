import { BodyDashboard, SidePanel } from "@/components/Transactions/modules";
import {
  CREATE_COMIDA,
  GET_VERIFICATION_TOKEN,
} from "@/hooks/react-query/user/user";
import { useMutation, useQuery } from "@apollo/client";

export default function Dashboard() {
  //const [createComida] = useMutation(CREATE_COMIDA);

  /*const handleCrearPlato = async () => {
    try {
      await createComida({
        variables: {
          id: "2-arroz",
          userId: "pruebaUser",
          name: "arroz",
          quantity: 1,
          description: "arroz con pollo",
          price: 3200,
        },
      });
      alert("Plato creado con exito");
    } catch (e) {
      alert("No se pudo crear el plato");
    }
  };*/

  return (
    <div>
      <div className="grid lg:grid-cols-12 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-0">
        <div className="lg:col-span-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 bg-white">
          <SidePanel></SidePanel>
        </div>
        <div className="lg:col-span-10 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 bg-gray-200">
          <p>
            en el archivo de esta ruta está el ejemplo de como crear un plato
          </p>
        </div>
      </div>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </div>
  );
}
