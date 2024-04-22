"use client";

import Image from "next/image";

import { Character, useCharacters } from "@/store/use-characters";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const defaultPokemons: Character[] = [
    {
        name: "Pikachu",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/a/a6/Pok%C3%A9mon_Pikachu_art.png",
    },
    {
        name: "Bulbasaur",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpHaQeXFw2FR_yJ14tJMsVC2xwZ9_U3bRHrW2NAS8JEg&s",
    },
    {
        name: "Charizard",
        imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full//006.png",
    },
];

export function Pokemons() {
    const pokemons = useCharacters.use.pokemons();
    const addPokemon = useCharacters.use.addPokemon();
    const selectCharacter = useCharacters.use.selectCharacter();

    function addRandomPokemon() {
        const randomIndex = Math.floor(Math.random() * defaultPokemons.length);
        const randomPokemon = defaultPokemons[randomIndex];

        addPokemon(randomPokemon.name, randomPokemon.imageUrl);
    }

    return (
        <div>
            <h1 className="font-semibold">Pokemons - {Math.random()}</h1>

            <div className="flex gap-4">
                {pokemons.map(pokemon => (
                    <Card
                        key={pokemon.name}
                        className="max-w-[180px]"
                    >
                        <CardHeader>
                            <CardTitle>{pokemon.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Image src={pokemon.imageUrl} alt={pokemon.name} width={120} height={120}/>

                            <Button size="sm" className="mt-4 w-full" onClick={() => selectCharacter(pokemon)}>Choose</Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {pokemons.length === 0 && (
                <div className="text-rose-500">Currently you don&apos;t have any pokemons in the list</div>
            )}

            <Button className="mt-6" onClick={addRandomPokemon}>Add random Pokemon</Button>
        </div>
    );
}