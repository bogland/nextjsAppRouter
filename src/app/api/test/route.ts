import { NextResponse } from "next/server";
export const dynamic = 'force-dynamic' // defaults to auto
export const GET = async (req: Request, res: Response) => {
    console.log("test api get");
    await delay(1000);

    return NextResponse.json({
        data: new Date().toISOString().slice(0, 19).replace("T", " "),
        error: 0,
    })
}
function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}