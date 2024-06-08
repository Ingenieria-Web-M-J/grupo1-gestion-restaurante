/* eslint-disable no-console */
import { BreadCrumbs, MainMenu } from "@/components/HomePage/modules";
import { ProductContainer } from "@/components/Products/modules";
import { GET_COMIDA_BY_ID } from "@/hooks/react-query/user/user";
import { mainTexts } from "@/types/types";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export const SingleProduct = (props: mainTexts) => {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading, refetch } = useQuery(GET_COMIDA_BY_ID, {
    variables: { id },
  });

  if (loading) return <></>;
  else {
    return (
      <div>
        <MainMenu></MainMenu>
        {loading ? (
          <div>Cargando...</div>
        ) : (
          <>
            <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
              <BreadCrumbs pText={data?.getComidaById.name}></BreadCrumbs>
            </div>
            <ProductContainer
              hText={data?.getComidaById.name}
              priceText={data?.getComidaById.price}
              srcImg="/sancocho.webp"
              pText={data?.getComidaById.description}
              productQuantity={data?.getComidaById.quantity}
              materialInfo={data?.getComidaById}
            ></ProductContainer>
          </>
        )}
      </div>
    );
  }
};

export default SingleProduct;
