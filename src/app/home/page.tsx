import { Button } from "@/components/ui/button";

export default function Home(props: Props) {
  return (
    <div>
      <h1>Hola</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero provident sapiente rem quas suscipit consectetur harum! Voluptatibus dolores sequi eum nostrum magnam, blanditiis culpa, voluptatem, repellendus unde distinctio minima libero!</p>
      <Button>Hola Mundo</Button>

    </div>
  );
}

interface Props {
  // define props here
}