'use client'
import { atom, useAtom, useAtomValue } from 'jotai';
import React from 'react';

export type dataAtomType = {
    str: string;
}
export const DataAtom = atom<dataAtomType>({ str: 'hello' });
export const CapitalAtom = atom<dataAtomType>((get) => ({ str: get(DataAtom).str.toUpperCase() }));

type Props = {
}

const ClientComponent = (props: Props) => {
    const [data, setData] = useAtom(DataAtom);
    const dataCapital = useAtomValue(CapitalAtom);

    return (
        <>
            <div className="flex flex-col">
                <input onChange={(e) => setData({ str: e.target.value })} type="text" className="edit" />
                <div>
                    {data.str}
                </div>
                <div>
                    {dataCapital.str}
                </div>
                <div>
                    전체 페이지 렌더 확인
                </div>
            </div>
        </>
    );
};

export default ClientComponent;