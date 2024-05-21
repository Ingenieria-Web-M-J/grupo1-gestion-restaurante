import { BreadCrumbs, MainMenu } from "@/components/HomePage/modules";
import { ProductContainer, ProductImg, ProductInfo } from "@/components/Products/modules"
import { mainTexts } from "@/types/types";

export default function SingleProduct(props: mainTexts) {
    return (
        <div>
            <MainMenu></MainMenu>
            <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <BreadCrumbs pText="Comida 1"></BreadCrumbs>
            </div>
            <ProductContainer hText="Comida 1"  priceText="20.000" srcImg="/1.webp" pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis tincidunt tincidunt. Nulla mattis, nunc ac pharetra fringilla, mauris nibh volutpat nisl, quis tincidunt massa sapien nec dolor. "></ProductContainer>
        </div>
    );
} 