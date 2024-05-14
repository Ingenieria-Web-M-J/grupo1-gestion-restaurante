import { ExampleComponent } from "@/components/ExampleComponent";
import { LoginForm } from "@/components/Forms/modules";
import { MainMenu } from "@/components/HomePage/modules";

export default function Home(){
   return (
    <div>
      <MainMenu></MainMenu>
      <LoginForm></LoginForm>
    </div>
   );
};
