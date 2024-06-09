import {
  MainBanner,
  MainMenu,
  ProductBanner,
} from "@/components/HomePage/modules";

export const Home = () => {
  return (
    <div>
      <MainMenu></MainMenu>
      <MainBanner></MainBanner>
      <ProductBanner></ProductBanner>
    </div>
  );
};

export default Home;
