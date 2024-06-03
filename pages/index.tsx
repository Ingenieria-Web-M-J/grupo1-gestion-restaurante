import { LoginForm } from "@/components/Forms/modules";
import {
  MainBanner,
  MainMenu,
  ProductBanner,
} from "@/components/HomePage/modules";

export default function Home() {
  return (
    <div>
      <MainMenu></MainMenu>
      <MainBanner></MainBanner>
      <ProductBanner></ProductBanner>
    </div>
  );
}
