import { Metadata } from "next";
import ClientComponent from "../Component/ClientComponent";

async function getTestData() {
    const res = await fetch('http://localhost:3000/api/test', { cache: "no-store" },);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export const metadata: Metadata = {
    title: 'Builder.io - Visual Headless CMS',
    description: 'Build digital experiences for any tech stack, visually.',
}

export default async function Home() {
    const startTimestamp = new Date().getTime();
    const resData = await getTestData();
    const endTimestamp = new Date().getTime();
    const elapsedMilliseconds = endTimestamp - startTimestamp;
    console.log(`경과 시간: ${elapsedMilliseconds}밀리초`);

    console.log("resData", resData);


    return (
        <>
            {resData.data}
            <ClientComponent />
        </>
    );
}

