import {ClientDateTime} from "../isr/ClientDateTime";
import {cookies, headers} from "next/headers";

export default async function Page({
                                       params,
                                   }: {
    params?: any;
    children?: React.ReactNode;
}) {
    // @ts-ignore
    const headerList = headers();
    console.log("Accept:", headerList.get("Accept"));
    const cookiesList = cookies();
    return (
        <>
            <div>
                <p>Headers.Accept</p>
                <h2>{headerList.get("Accept")}</h2>
            </div>

            <div>
                <p>Last server rendering time</p>
                <h2>{new Date().toLocaleString()}</h2>
            </div>

            <ClientDateTime/>
        </>
    )
}
