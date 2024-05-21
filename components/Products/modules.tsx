import { mainTexts, normalTexts } from "@/types/types";


export function ProductItem(props: mainTexts) {
    return (
        <a href={props.link} className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src={props.srcImg} alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="h-full w-full object-cover object-center group-hover:opacity-75" />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{props.hText}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{props.priceText}</p>
        </a>
    );

}

export function ProductInfo(props: mainTexts) {
    return (
        <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Informacion de producto</h2>
            <div className="lg:col-span-2  lg:border-gray-200 lg:pr-8 mb-10">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:pt-14">{props.hText}</h1>
            </div>
            <p className="text-3xl tracking-tight text-gray-900 pb-10">${props.priceText}</p>
            <div>
                <h3 className="text-sm font-medium text-gray-900 pb-4">Descripción</h3>
                <div className="space-y-6">
                    <p className="text-base text-gray-900">{props.pText}</p>
                </div>
            </div>
            <button type="submit" className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Agregar al carrito</button>

        </div>
    );
}

export function ProductImg(props: mainTexts) {
    return (
        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div className="mt-10">
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
                    <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <img src={props.srcImg} alt="Model wearing plain white basic tee." className="h-full w-full object-cover object-center" />
                    </div>
                </div>
            </div>
        </div>

    );
}

export function ProductContainer(props: mainTexts) {
    return(
        <div className="bg-white">
            <div className="pt-6">
                {/* <!-- Product info --> */}
                <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"></div>
                    <ProductInfo hText={props.hText} priceText={props.priceText} pText={props.pText}></ProductInfo>
                    <ProductImg srcImg={props.srcImg}></ProductImg>
                </div>
            </div>
        </div>
    );
}

// export function SVGIcon(props:mainTexts){
//     return(
//         <svg viewBox="0 0 512 512" width+><path fill={props.colorText} d={props.pText}/></svg>
//     );
// }