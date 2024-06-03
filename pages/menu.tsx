/* eslint-disable react/function-component-definition */
import { BreadCrumbs, MainMenu } from "@/components/HomePage/modules";
import { ProductItem } from "@/components/Products/modules";
import { GET_COMIDA } from "@/hooks/react-query/user/user";
import { useQuery } from "@apollo/client";

interface Producto {
  id: string;
  name: string;
  price: string;
}

export default function Menu() {
  const { data, loading, refetch } = useQuery(GET_COMIDA);
  return (
    <div>
      <MainMenu></MainMenu>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <BreadCrumbs pText="Menu"></BreadCrumbs>
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {loading ? (
              <></>
            ) : (
              data.getComida.map((producto: Producto) => (
                <ProductItem
                  key={producto.id}
                  link={`/single-product/${producto.id}`}
                  priceText={`$${producto.price}`}
                  srcImg="/sancocho.webp"
                  hText={producto.name}
                ></ProductItem>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
