import { create } from "zustand";
import { createSelectors } from "@/store/createSelectors";

export type Character = {
    name: string;
    imageUrl: string;
}

type CharactersStore = {
    pokemons: Character[];
    digimons: Character[];
    addPokemon: (name: string, imageUrl: string) => void;
    addDigimon: (name: string, imageUrl: string) => void;
};

export const useCharacters = createSelectors(create<CharactersStore>((set) => ({
    pokemons: [],
    digimons: [],
    addPokemon: (name: string, imageUrl: string) => set(state => ({
        ...state,
        pokemons: [...state.pokemons, { name, imageUrl }],
    })),
    addDigimon: (name: string, imageUrl: string) => set(state => ({
        ...state,
        digimons: [...state.digimons, { name, imageUrl }],
    })),
})));