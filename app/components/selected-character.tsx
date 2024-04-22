"use client";

import Image from "next/image";

import { useCharacters } from "@/store/use-characters";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function SelectedCharacter() {
    const character = useCharacters.use.character();
    const lockCharacter = useCharacters.use.lockCharacter();
    const unLockCharacter = useCharacters.use.unLockCharacter();

    function toggleCharacter() {
        if (character.locked) {
            unLockCharacter();
        } else {
            lockCharacter();
        }
    }

    if (!character) {
        return null;
    }

    return (
        <div className="self-start">
            <h1 className="font-semibold">Selected character</h1>

            <Card
                key={character.name}
                className="max-w-[180px]"
            >
                <CardHeader>
                    <CardTitle>{character.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <Image src={character.imageUrl} alt={character.name} width={120} height={120}/>

                    <Button
                        size="sm"
                        className="mt-4 w-full"
                        onClick={toggleCharacter}>
                        {character.locked ? "Unlock" : "Lock"}
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}