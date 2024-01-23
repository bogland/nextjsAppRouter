import { atom, useAtom } from "jotai";

export type dataAtomType = {
  str : string;
}
export const dataAtom = atom<dataAtomType>({str: 'hello'})