"use client";

import Image from "next/image";

import { Character, useCharacters } from "@/store/use-characters";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const defaultDigimons: Character[] = [
    {
        name: "Agumon",
        imageUrl: "https://static.wikia.nocookie.net/digimon/images/7/7f/Agumon_t.gif/revision/latest?cb=20200405154705",
    },
    {
        name: "Angoramon",
        imageUrl: "https://static.wikia.nocookie.net/digimon/images/3/33/Angoramon_b.jpg/revision/latest?cb=20210921170200",
    },
    {
        name: "Armadimon",
        imageUrl: "https://wikimon.net/images/thumb/a/a6/Armadimon2.jpg/320px-Armadimon2.jpg",
    },
]

export function Digimons() {
    const digimons = useCharacters.use.digimons();
    const addDigimon = useCharacters.use.addDigimon();

    function addRandomDigimon() {
        const randomIndex = Math.floor(Math.random() * defaultDigimons.length);
        const randomPokemon = defaultDigimons[randomIndex];

        addDigimon(randomPokemon.name, randomPokemon.imageUrl);
    }

    return (
        <div>
            <h1 className="font-semibold">Digimons - {Math.random()}</h1>

            <div className="flex gap-4">
                {digimons.map(digimon => (
                    <Card
                        key={digimon.name}
                        className="max-w-[180px]"
                    >
                        <CardHeader>
                            <CardTitle>{digimon.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Image src={digimon.imageUrl} alt={digimon.name} width={120} height={120} />
                        </CardContent>
                    </Card>
                ))}
            </div>

            {digimons.length === 0 && (
                <div className="text-rose-500">Currently you don&apos;t have any digimons in the list</div>
            )}

            <Button className="mt-4" onClick={addRandomDigimon}>Add random Digimon</Button>
        </div>
    );
}