import { Pokemons } from "@/app/components/pokemons";
import { Digimons } from "@/app/components/digimons";

export default function Home() {
  return (
    <main className="p-6 flex flex-col gap-4">
      <Pokemons/>
      <Digimons/>
    </main>
  );
}
