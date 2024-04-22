"use client";

import { Pokemons } from "@/app/components/pokemons";
import { Digimons } from "@/app/components/digimons";
import { SelectedCharacter } from "@/app/components/selected-character";

export default function Home() {


    return (
        <main className="p-6 flex gap-4">
            <div className="flex flex-col gap-4">
                <Pokemons/>
                <Digimons/>
            </div>

            <SelectedCharacter/>
        </main>
    );
}
