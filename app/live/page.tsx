import {ClientDateTime} from "../isr/ClientDateTime";

export const dynamicParams = true;

async function fetchData(zone: string) {

    //sometime this fetch will error out, failing the whole rendering function
    const res = await fetch(
        `http://worldtimeapi.org/api/timezone/Europe/${zone}`,
        { cache: 'no-store' }
    );
    const data = await res.json();
    return data;
}

export default async function Page({
                                       params,
                                   }: {
    params?: any;
    children?: React.ReactNode;
}) {
    const zone = params?.zone ? params?.zone : 'Zurich';
    const data = await fetchData(zone);
    return (
        <>
            <div>
                <p>Result of non cached fetch call from server to <a href={"http://worldtimeapi.org/api/timezone/Europe/" + zone}>http://worldtimeapi.org/api/timezone/Europe/{zone}</a></p>
                <h2>{new Date(data.datetime).toLocaleString()}</h2>
            </div>

            <div>
                <p>Last server rendering time</p>
                <h2>{new Date().toLocaleString()}</h2>
            </div>

            <ClientDateTime/>
        </>
    )
}
