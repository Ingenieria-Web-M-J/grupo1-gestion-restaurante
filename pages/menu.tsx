import { ProductItem } from "@/components/Products/modules";
import { BreadCrumbs, MainMenu } from "@/components/HomePage/modules";


export default function Menu() {
    return (
        <div>

            <MainMenu></MainMenu>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <BreadCrumbs pText="Menu"></BreadCrumbs>
                    <h2 className="sr-only">Products</h2>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        <ProductItem link="/single-product" priceText="$20.000" srcImg="/1.webp" hText="Comida 1"></ProductItem>
                        <ProductItem link="/single-product" priceText="$20.000" srcImg="/2.webp" hText="Comida 2"></ProductItem>
                        <ProductItem link="/single-product" priceText="$20.000" srcImg="/3.webp" hText="Comida 3"></ProductItem>
                        <ProductItem link="/single-product" priceText="$20.000" srcImg="/4.webp" hText="Comida 4"></ProductItem>
                        <ProductItem link="/single-product" priceText="$20.000" srcImg="/5.webp" hText="Comida 5"></ProductItem>
                        <ProductItem link="/single-product" priceText="$20.000" srcImg="/6.webp" hText="Comida 6"></ProductItem>
                        <ProductItem link="/single-product" priceText="$20.000" srcImg="/7.webp" hText="Comida 7"></ProductItem>
                    </div>
                </div>
            </div>
        </div>
    );
}
