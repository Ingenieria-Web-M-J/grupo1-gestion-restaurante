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
                  srcImg="/1.webp"
                  hText={producto.name}
                ></ProductItem>
              ))
            )}

            <ProductItem
              link="/single-product/template"
              priceText="$20.000"
              srcImg="/1.webp"
              hText="Comida 1"
            ></ProductItem>
            <ProductItem
              link="/single-product/template"
              priceText="$20.000"
              srcImg="/2.webp"
              hText="Comida 2"
            ></ProductItem>
            <ProductItem
              link="/single-product/template"
              priceText="$20.000"
              srcImg="/3.webp"
              hText="Comida 3"
            ></ProductItem>
            <ProductItem
              link="/single-product/template"
              priceText="$20.000"
              srcImg="/4.webp"
              hText="Comida 4"
            ></ProductItem>
            <ProductItem
              link="/single-product/template"
              priceText="$20.000"
              srcImg="/5.webp"
              hText="Comida 5"
            ></ProductItem>
            <ProductItem
              link="/single-product/template"
              priceText="$20.000"
              srcImg="/6.webp"
              hText="Comida 6"
            ></ProductItem>
            <ProductItem
              link="/single-product/template"
              priceText="$20.000"
              srcImg="/7.webp"
              hText="Comida 7"
            ></ProductItem>
          </div>
        </div>
      </div>
    </div>
  );
}
