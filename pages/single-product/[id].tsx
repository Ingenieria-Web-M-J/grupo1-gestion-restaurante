/* eslint-disable no-console */
import { BreadCrumbs, MainMenu } from "@/components/HomePage/modules";
import { ProductContainer } from "@/components/Products/modules";
import { GET_COMIDA_BY_ID } from "@/hooks/react-query/user/user";
import { mainTexts } from "@/types/types";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function SingleProduct(props: mainTexts) {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading, refetch } = useQuery(GET_COMIDA_BY_ID, {
    variables: { id },
  });

  let producto;
  if (loading == false) {
    producto = data.getComidaById;
  }

  console.log(data);

  if (loading) return <></>;
  else {
    return (
      <div>
        <MainMenu></MainMenu>
        <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <BreadCrumbs pText={producto.name}></BreadCrumbs>
        </div>
        <ProductContainer
          hText={producto.name}
          priceText={producto.price}
          srcImg="/1.webp"
          pText={producto.description}
        ></ProductContainer>
      </div>
    );
  }
}
