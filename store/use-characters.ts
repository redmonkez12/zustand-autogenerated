import { create } from "zustand";
import { createSelectors } from "@/store/createSelectors";
import { immer } from "zustand/middleware/immer";


export type Character = {
    name: string;
    imageUrl: string;
}

export type SelectedCharacters = Character & { // new
    locked: boolean;
};

type CharactersStore = {
    pokemons: Character[];
    digimons: Character[];
    character: SelectedCharacters; // new
    addPokemon: (name: string, imageUrl: string) => void;
    addDigimon: (name: string, imageUrl: string) => void;
    selectCharacter: (character: Character) => void;
    lockCharacter: () => void; // new
    unLockCharacter: () => void; // new
};

export const useCharacters = createSelectors(create<CharactersStore>(
    immer((set) => ({
        pokemons: [],
        digimons: [],
        character: undefined,
        addPokemon: (name: string, imageUrl: string) => set(state => ({
            ...state,
            pokemons: [...state.pokemons, { name, imageUrl }],
        })),
        addDigimon: (name: string, imageUrl: string) => set(state => ({
            ...state,
            digimons: [...state.digimons, { name, imageUrl }],
        })),
        selectCharacter: (character: Character) => set(state => {
            state.character = {
                ...character,
                locked: false,
            };
        }),
        lockCharacter: () => set(state => {
            state.character.locked = true;
        }),
        unLockCharacter: () => set(state => {
             state.character.locked = false;
        }),
    }))));